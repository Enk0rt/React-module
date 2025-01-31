import {userSlice} from "../slices/user-slice/UserSlice.ts";
import {recipeSlice} from "../slices/recipe-slice/RecipeSlice.ts";
import {configureStore} from "@reduxjs/toolkit";
import {userAuthSlice} from "../slices/userAuth-slice/UserAuthSlice.ts";
import {modalSlice} from "../slices/modal-slice/ModalSlice.ts";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        recipeSlice: recipeSlice.reducer,
        userAuthSlice: userAuthSlice.reducer,
        modalSlice:modalSlice.reducer,
    }
})