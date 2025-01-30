import {RecipeItem} from "../recipe/RecipeItem.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {recipeSliceActions} from "../../../redux/slices/recipe-slice/RecipeSlice.ts";

export const RecipeList = () => {
    const {recipes} = useAppSelector(({recipeSlice})=> recipeSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(!recipes.length) dispatch(recipeSliceActions.loadRecipes())
   }, []);
    return (
        <div>
            {
                recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe}/>)
            }
        </div>
    );
};

