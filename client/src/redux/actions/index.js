import {
  ERROR_SOLICITUD,
  GET_DOG_All,
  GET_DOG_API,
  GET_DOG_DB,
  GET_DOG_NAME,
  GET_TEMPERAMENT,
} from "../types";
import axios from "axios";

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

//Metodo para solicitar los dog por name:
export const getDogName = (name) => {
  return (dispatch) => {
    axios.get(`/api/dogs?name=${name}`).then(
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

// export const getFilterDogs = ({ temperament, breed, order }) => {
//   return function (dispatch) {
//     axios.get("/dogs").then((response) => {
//       let dataFilter = [];

//       temperament === "All"
//         ? (dataFilter = response.data)
//         : (dataFilter = response.data.filter((dog) =>
//             dog.temperament ? dog.temperament.includes(temperament) : false
//           ));

//       breed === "Standard"
//         ? (dataFilter = dataFilter.filter((dog) => typeof dog.id === "number"))
//         : breed === "Created"
//         ? (dataFilter = dataFilter.filter((dog) => typeof dog.id !== "number"))
//         : (dataFilter = dataFilter);

//       order === "asc"
//         ? (dataFilter = dataFilter.sort((a, b) => {
//             if (a.name.toLowerCase() > b.name.toLowerCase()) {
//               return 1;
//             }
//             if (a.name.toLowerCase() < b.name.toLowerCase()) {
//               return -1;
//             }
//           }))
//         : order === "desc"
//         ? (dataFilter = dataFilter.sort((b, a) => {
//             if (a.name.toLowerCase() > b.name.toLowerCase()) {
//               return 1;
//             }
//             if (a.name.toLowerCase() < b.name.toLowerCase()) {
//               return -1;
//             }
//           }))
//         : order === "increment"
//         ? (dataFilter = dataFilter.sort((a, b) => {
//             if (a.weightMin > b.weightMin) {
//               return 1;
//             }
//             if (a.weightMin < b.weightMin) {
//               return -1;
//             }
//           }))
//         : order === "decrement"
//         ? (dataFilter = dataFilter.sort((a, b) => {
//             if (a.weightMax < b.weightMax) {
//               return 1;
//             }
//             if (a.weightMax > b.weightMax) {
//               return -1;
//             }
//           }))
//         : (dataFilter = dataFilter);

//       dispatch({ type: GET_FILTER_DOGS, payload: dataFilter });
//     });
//   };
// };

// export const getDetailDog = (idRaza) => {
//   return idRaza
//     ? function (dispatch) {
//         axios
//           .get(`/dogs/${idRaza}`)
//           .then((response) =>
//             dispatch({ type: GET_DETAIL_DOG, payload: response.data })
//           )
//           .catch((error) =>
//             dispatch({ type: GET_DETAIL_DOG, payload: [error] })
//           );
//       }
//     : function (dispatch) {
//         dispatch({ type: GET_DETAIL_DOG, payload: [] });
//       };
// };

// export const createDogs = ({
//   name,
//   heightMin,
//   heightMax,
//   weightMin,
//   weightMax,
//   lifeSpanMin,
//   lifeSpanMax,
//   temperaments,
// }) => {
//   return function (dispatch) {
//     axios
//       .post("/dogs", {
//         name,
//         heightMin,
//         heightMax,
//         weightMin,
//         weightMax,
//         lifeSpanMin,
//         lifeSpanMax,
//         temperaments,
//       })
//       .then((response) =>
//         dispatch({ type: POST_CREATE_DOGS, payload: getAllDogs })
//       )
//       .catch((error) => dispatch({ type: POST_CREATE_DOGS, payload: [error] }));
//   };
// };

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
