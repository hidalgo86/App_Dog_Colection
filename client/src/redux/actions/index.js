import {
  AUTHORIZATION_USER,
  EDIT_DOG,
  ERROR_SOLICITUD,
  FILTER_DOGS,
  GET_DOG_All,
  GET_DOG_API,
  GET_DOG_DB,
  GET_DOG_NAME,
  GET_TEMPERAMENT,
  REMOVE_DOG,
} from "../types";
import axios from "axios";
import swal from "sweetalert";

//Metodo para solicitar los dog de api externa y db:
export const getDogAll = () => {
  return (dispatch) => {
    axios.get("/api/dogAll").then(
      (response) => {
        dispatch({
          type: GET_DOG_All,
          payload: response.data,
        });
      },
      (error) => {
        console.log(error.message);
        dispatch({
          type: ERROR_SOLICITUD,
          payload: [error.message],
        });
      }
    );
  };
};

//Metodo para solicitar los dog de api externa:
export const getDogApi = () => {
  return (dispatch) => {
    axios.get("/api/dogApi").then(
      (response) => {
        dispatch({
          type: GET_DOG_API,
          payload: response.data,
        });
      },
      (error) => {
        console.log(error.message);
        dispatch({
          type: ERROR_SOLICITUD,
          payload: [error.message],
        });
      }
    );
  };
};

//Metodo para solicitar los dog de db:
export const getDogDb = () => {
  return (dispatch) => {
    axios.get("/api/dogDb").then(
      (response) => {
        dispatch({
          type: GET_DOG_DB,
          payload: response.data,
        });
      },
      (error) => {
        console.log(error.message);
        dispatch({
          type: ERROR_SOLICITUD,
          payload: [error.message],
        });
      }
    );
  };
};

//Metodo para solicitar los dog de db para editarlos:
export const dogsEdit = () => {
  return (dispatch) => {
    axios.get("/api/dogDb").then(
      (response) => {
        dispatch({
          type: EDIT_DOG,
          payload: response.data,
        });
      },
      (error) => {
        console.log(error.message);
        dispatch({
          type: ERROR_SOLICITUD,
          payload: [error.message],
        });
      }
    );
  };
};

//Metodo para solicitar los dog por name:
export const getDogName = (name) => {
  return (dispatch) => {
    axios.get(`/api/dogAll?name=${name}`).then(
      (response) => {
        dispatch({
          type: GET_DOG_NAME,
          payload: response.data,
        });
      },
      (error) => {
        console.log(error.message);
        dispatch({
          type: ERROR_SOLICITUD,
          payload: [error.message],
        });
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

      dispatch({ type: FILTER_DOGS, payload: data });
    });
  };
};

//Metodo para importar todos los temperamentos de la db:
export const getTemperament = () => {
  return (dispatch) => {
    axios.get("/api/temperaments").then(
      (response) =>
        dispatch({
          type: GET_TEMPERAMENT,
          payload: response.data,
        }),
      (error) => {
        console.log(error.message);
        dispatch({
          type: ERROR_SOLICITUD,
          payload: [error.message],
        });
      }
    );
  };
};

//Metodo para remover data del estado global react al cerrar componente:
export const removeDog = (data) => {
  return function (dispatch) {
    axios.post("/api/dogCreate", data).then(
      (response) => {
        dispatch({
          type: REMOVE_DOG,
          payload: [],
        });
      },
      (error) => console.log(error.message)
    );
  };
};

//Metodo para crear un dog:
export const createDog = (data, token) => {
  return function (dispatch) {
    if (!token) return swal("Acceso Denegado!", "iniciar sesion!", "warning");

    axios.post(`/api/dogCreate`, data, { headers: { token } }).then(
      (response) => {
        let res = response.data;

        if (res === "access denied, token expered or incorrect")
          return swal("Acceso Denegado!", "iniciar sesion!", "warning");

        if (res.message === "Dog creado con éxito")
          return swal("Exito!", "Se ha agredo!", "success");

        return swal("Error!", "datos incompletos!", "error");
      },
      (error) => swal("Error!", "No se pudo guardar!", "error")
    );
  };
};

//Metodo para actualizar un dog:
export const updateDog = (id, data, token) => {
  return function (dispatch) {
    if (!token) return swal("Acceso Denegado!", "iniciar sesion!", "warning");

    axios.put(`/api/dogUpdate/${id}`, data, { headers: { token } }).then(
      (response) => {
        let res = response.data
        if (res.message === "Dog actualizado con éxito")
        return swal("Exito!", "Se ha actualizado!", "success");
        
        swal("Advertencia!", "faltan datos!", "warning");

      },
      (error) => swal("Error!", "No se pudo actualizar!", "error")
    );
  };
};

//Metodo para eliminar un dog:
export const deleteDog = (id, token) => {
  return function (dispatch) {
    if (!token) return swal("Acceso Denegado!", "iniciar sesion!", "warning");
    axios.delete(`/api/dogDelete/${id}`, { headers: { token } }).then(
      (response) => {
        dispatch(dogsEdit());
        return swal("Exito!", "Se ha Eliminado!", "success");
      },
      (error) => swal("Error!", "No se pudo Eliminar!", "error")
    );
  };
};

//Metodo para autorizar un usuario:
export const authorizationUser = (data) => {
  return function (dispatch) {
    axios.post("/api/authorization", data).then(
      (response) =>
        dispatch({ type: AUTHORIZATION_USER, payload: response.data }),

      (error) => swal("Error!", "No registrardo!", "error")
    );
  };
};

//Metodo para crear un usuario:
export const createrUser = (data) => {
  return function (dispatch) {
    axios.post("/api/userCreate", data).then(
      (response) => {
        return swal("Exito!", "Se ha registrado!", "success");
      },
      (error) => swal("Error!", "No se pudo registrar!", "error")
    );
  };
};
