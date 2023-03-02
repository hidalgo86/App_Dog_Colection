//*********Solicitud al servidor************

//Solicita los dogs a la api externa y db:
export const GET_DOG_All = "GET_DOG_ALL";

//Solicita los dogs a la api externa:
export const GET_DOG_API = "GET_DOG_API";

//Solicita los dogs a la db:
export const GET_DOG_DB = "GET_DOG_DB";

//Solicita los dogs que contengan name=NAME:
export const GET_DOG_NAME = "GET_DOG_NAME";

//Crea un nuevo dog en la db:
export const CREATE_DOG = "CREATE_DOG";

//Actualiza un dog en la db:
export const UPDATE_DOG = "UPDATE_DOG";

//Elimina un dog en la db:
export const DELETE_DOG = "GET_DOG";

//Solicitar la lista de temperament de la db:
export const GET_TEMPERAMENT = "GET_TEMPERAMENT";

//Crea un nuevo usuario en la db:
export const POST_USER = "POST_USER";

//Actualiza un usuario en la db:
export const PUT_USER = "PUT_USER";

//Elimina un usuario en la db:
export const DELETE_USER = "GET_USER";

//Autorizacion de un usuario en la db:
export const AUTHORIZATION_USER = "AUTHORIZATION_USER";


//*********solicitudes internas************

//Mostar informacion completa de un dog:
export const DETAIL_DOG = "DETAIL_DOG";

//Desmontar el estado dogs del componente:
export const REMOVE_DOG = "REMOVE_DOG";

//Matriz de dogs editables:
export const EDIT_DOG = "EDIT_DOG";

//filtrar los dogs por temperament
export const FILTER_DOG_TEMPERAMENT = "FILTER_DOG_TEMPERAMENT";

//Filtart los dogs por peso:
export const FILTER_DOG_WEIGHT = "FILTER_DOG_WEIGHT";

//Filtart los dogs por nombre:
export const FILTER_DOG_NAME = "FILTER_DOG_NAME";

//Filtart los dogs por nombre:
export const FILTER_DOGS = "FILTER_DOGS";

//Registro de error:
export const ERROR_SOLICITUD = "ERROR_SOLICITUD"