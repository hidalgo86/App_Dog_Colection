import { configureStore } from "@reduxjs/toolkit";
import dogs from "./dogsSlice"

export default configureStore ({
    reducer:{
        dogs: dogs
    }
})