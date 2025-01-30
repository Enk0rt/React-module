import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getData} from "../../../api/data-from-api/getData.ts";
import {urls} from "../../../constants/urls.ts";
import {IRecipe} from "../../../models/recipe/IRecipe.ts";
import {IRecipeResponse} from "../../../models/recipe/IRecipeResponse.ts";

type RecipeSliceType = {
    recipes: IRecipe[],
}

const loadRecipes = createAsyncThunk(
    'recipeSlice/loadRecipes',
    async (_,thunkApi)=>{
        return(thunkApi.fulfillWithValue(await getData<IRecipeResponse>(urls.recipes).then(({recipes}:IRecipeResponse):IRecipe[]=>recipes)))
    }
)

const recipeInitialState: RecipeSliceType = {recipes:[]}
export const recipeSlice = createSlice({
    name: 'recipeSlice',
    initialState: recipeInitialState,
    reducers: {},
    extraReducers:builder =>
        builder.addCase(loadRecipes.fulfilled,(state, action)=>{
            state.recipes = action.payload;
        })
})

export const recipeSliceActions = {
    ...recipeSlice.actions,loadRecipes
}