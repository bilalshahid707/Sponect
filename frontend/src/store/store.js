import { configureStore } from "@reduxjs/toolkit";
import {UserAuth}  from "../services/UserAuth";
export const store = configureStore({
    reducer:{
        "User":UserAuth.reducer
    },
})

export default store