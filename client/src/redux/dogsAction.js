import { getDogAll } from "./dogsSlice";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getStorage, uploadBytes, getDownloadURL, ref } from "firebase/storage";
import swal from "sweetalert";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "colection-d1206.firebaseapp.com",
  projectId: "colection-d1206",
  storageBucket: "colection-d1206.appspot.com",
  messagingSenderId: "878545419025",
  appId: "1:878545419025:web:1844b7eac5e2e2cdbeaab0",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

//Metodo para solicitar los dog de api externa y db:
export const getDogAll = () => {
  return (dispatch) => {
    axios.get("/api/dogAll").then(
      (response) => {
        dispatch(getDogAll(response.data));
      },
      (error) => {
        console.log(error.message);
        dispatch(getError(error.message));
      }
    );
  };
};

//Metodo para solicitar los dog de api externa:
export const getDogApi = () => {
  return (dispatch) => {
    axios.get("/api/dogApi").then(
      (response) => {
        dispatch(getDogApi(response.data));
      },
      (error) => {
        console.log(error.message);
        dispatch(getError(error.message));
      }
    );
  };
};

//Metodo para solicitar los dog de db:
export const getDogDb = () => {
  return (dispatch) => {
    axios.get("/api/dogDb").then(
      (response) => {
        let data = response.data;

        if (!data.length)
          return swal("Disculpa!", "No hay mascotas creada!", "warning");

        dispatch(getDogDb(response.data));
      },
      (error) => {
        console.log(error.message);
        dispatch(getError(error.message));
      }
    );
  };
};

//Metodo para solicitar los dog de db para editarlos:
export const dogsEdit = () => {
  return (dispatch) => {
    axios.get("/api/dogDb").then(
      (response) => {
        dispatch(dogsEdit(response.data));
      },
      (error) => {
        console.log(error.message);
        dispatch(getError(error.message));
      }
    );
  };
};

//Metodo para solicitar los dog por name:
export const getDogName = (name) => {
  return (dispatch) => {
    axios.get(`/api/dogAll?name=${name}`).then(
      (response) => {
        dispatch(getDogName(response.data));
      },
      (error) => {
        console.log(error.message);
        dispatch(getError(error.message));
      }
    );
  };
};

//Metodo para aplicar filtro a la base de data dogs:
export const getFilterDogs = ({ temperament, name, weight, order }) => {
  return (dispatch) => {
    axios.get("/api/dogAll").then((value) => {
      let data = value.data;

      if (temperament) {
        data = data.filter(
          (dog) =>
            dog.temperament.filter((value) => value === temperament).length
        );
      }

      if (order === "weight") {
        if (weight === "ascendente") {
          data = data.sort((a, b) => (a.weightMin > b.weightMin ? 1 : -1));
        } else {
          data = data.sort((a, b) => (a.weightMin > b.weightMin ? -1 : 1));
        }
      }

      if (order === "name") {
        if (name === "ascendente") {
          data = data.sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
          );
        } else {
          data = data.sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
          );
        }
      }

      dispatch(getFilterDogs(data));
    });
  };
};

export const getDogDetail = (data) => {
  return (dispatch) => {
    try {
      dispatch(getDogDetail(data));
    } catch (error) {
      console.log(error.message);
      dispatch(getError(error.message));
    }
  };
};

//Metodo para importar todos los temperamentos de la db:
export const getTemperament = () => {
  return (dispatch) => {
    axios.get("/api/temperaments").then(
      (response) => dispatch(getTemperament(response.data)),
      (error) => {
        console.log(error.message);
        dispatch(getError(error.message));
      }
    );
  };
};

//Metodo para remover data del estado global react al cerrar componente:
export const removeDog = (data) => {
  return function (dispatch) {
    try {
      dispatch(removeDog([]));
    } catch (error) {
      console.log(error.message);
    }
  };
};

//Metodo para crear un dog:
export const createDog = (data, file, token, history) => {
  return function (dispatch) {
    // if (!token) return swal("Disculpa!", "Debe iniciar Sesion!", "warning");
    if (!token) return login(history);

    if (!data || !file) {
      return swal("Error!", "Faltan algunos datos!", "error");
    }
    const storageRef = ref(storage, `dogs/${file.name}`);
    uploadBytes(storageRef, file)
      .then(() => getDownloadURL(storageRef))
      .then((url) => {
        data = { ...data, url: url };
        console.log(data);
        return axios.post(`/api/dogCreate`, data, { headers: { token } });
      })
      .then((response) => {
        let res = response.data;

        if (res === "access denied, token expered or incorrect")
          return login(history);

        if (res.message === "Dog creado con éxito") {
          return home(history);
        }
        return swal("Error!", "Faltan algunos datos!", "error");
      })
      .catch((error) =>
        swal(`Error!", "No se pudo guardar! ${error.message}`, "error")
      );
  };
};

//Metodo para actualizar un dog:
export const updateDog = (id, data, token, history) => {
  return function (dispatch) {
    if (!token) return login(history);

    axios.put(`/api/dogUpdate/${id}`, data, { headers: { token } }).then(
      (response) => {
        let res = response.data;
        if (res.message === "Dog actualizado con éxito")
          return swal("Exito!", "Se ha actualizado!", "success");

        swal("Disculpa!", "Faltan algunos datos!", "warning");
      },
      (error) => swal("Error!", "No se pudo actualizar!", "error")
    );
  };
};

//Metodo para eliminar un dog:
export const deleteDog = (id, token, history) => {
  return function (dispatch) {
    if (!token) return login(history);
    axios.delete(`/api/dogDelete/${id}`, { headers: { token } }).then(
      (response) => {
        dispatch(dogsEdit());
        return swal("Exito!", "Se ha eliminado!", "success");
      },
      (error) => swal("Error!", "No se pudo Eliminar!", "error")
    );
  };
};

//Metodo para autorizar un usuario:
export const authorizationUser = (data, home) => {
  return function (dispatch) {
    axios.post("/api/authorization", data).then(
      (response) => {
        let { message, token } = response.data;
        if (message === "Usuario autenticado") {
          localStorage.setItem("token", token);
          home();
        } else {
          swal("Disculpa!", `${message}!`, "warning");
        }
      },
      (error) => swal("Error!", "No registrardo!", "error")
    );
  };
};

//Metodo para crear un usuario:
export const createrUser = (data, home) => {
  return function (dispatch) {
    if (!data.name || !data.password || !data.email)
      return swal("Error!", "Datos incompletos!", "error");

    axios.post("/api/userCreate", data).then(
      (response) => {
        home();
        return swal("Exito!", "Se ha registrado!", "success");
      },
      (error) => swal("Error!", "No se pudo registrar!", "error")
    );
  };
};

let login = (history) => {
  swal({
    title: "Disculpa!",
    text: "Debe iniciar sesion!",
    icon: "warning",
    buttons: ["iniciar sesion", "cancelar"],
  }).then((result) => {
    if (!result) {
      return history.push("/home/user/login");
    }
  });
};

let home = (history) => {
  swal({
    title: "Exito!",
    text: "Se ha agregado!",
    icon: "success",
    buttons: ["Home", "cancelar"],
  }).then((result) => {
    if (!result) {
      return history.push("/home");
    }
  });
};
