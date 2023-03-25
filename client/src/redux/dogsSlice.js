import { createSlice } from "@reduxjs/toolkit";

export const dogsSlice = createSlice({
  name: "dogs",
  initialState: {
    dogs: [],
    dogsEdit: [],
    detail: [],
    temperament: [],
    user: {},
  },

  reducers: {
    getDogAll: (state, action) => {
        state.dogs = action.payload
    },

    getDogApi: (state, action) => {
        state.dogs = action.payload
    },

    getDogDb: (state, action) => {
        state.dogs = action.payload
    },

    dogsEdit: (state, action) => {
        state.dogs = action.payload
    },

    getDogName: (state, action) => {
        state.dogs = action.payload
    },

    getFilterDogs: (state, action) => {
        state.dogs = action.payload
    },
    
    getDogDetail: (state, action) => {
        state.dogs = action.payload
    },

    getTemperament: (state, action) => {
        state.dogs = action.payload
    },
    
    removeDog: (state, action) => {
        state.dogs = action.payload
    },
    
    getError: (state, action) => {
        state.dogs = action.payload
    }

  }
});

export const actions = dogsSlice.actions;
export default dogsSlice.reducer