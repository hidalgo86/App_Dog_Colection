import { createSlice } from "@reduxjs/toolkit";

export const dogsSlice = createSlice({
  name: "dogs",
  initialState: {
    dogsAll: [],
    dogsEdit: [],
    detail: [],
    temperament: [],
    error:""
  },

  reducers: {
    getDogAll: (state, action) => {
      state.dogsAll = action.payload;
    },

    getDogApi: (state, action) => {
      state.dogsAll = action.payload;
    },

    getDogDb: (state, action) => {
      state.dogsAll = action.payload;
    },

    getDogName: (state, action) => {
      state.dogsAll = action.payload;
    },

    getFilterDogs: (state, action) => {
      state.dogsAll = action.payload;
    },

    getDogDetail: (state, action) => {
      state.detail = action.payload;
    },

    getTemperament: (state, action) => {
      state.temperament = action.payload;
    },

    dogsEdit: (state, action) => {
      state.dogsEdit = action.payload;
    },

    removeDog: (state, action) => {
      state.dogsAll = action.payload;
    },

    getError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const actions = dogsSlice.actions;
export default dogsSlice.reducer;
