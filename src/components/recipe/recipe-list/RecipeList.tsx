import {RecipeItem} from "../recipe/RecipeItem.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {recipeSliceActions} from "../../../redux/slices/recipe-slice/RecipeSlice.ts";
import {useRefreshAndLoadItems} from "../../../hooks/useRefreshAndLoadItems.tsx";
import {IRecipe} from "../../../models/recipe/IRecipe.ts";

export const RecipeList = () => {
    const {recipes} = useAppSelector(({recipeSlice})=> recipeSlice)
    const {fetchItems} = useRefreshAndLoadItems<IRecipe[]>( recipeSliceActions.loadRecipes);  // ← Передаємо loadUsers
    useEffect(() => {
    if (!recipes.length) {
        fetchItems();
    }
   }, [recipes.length]);
    return (
        <div>
            {
                recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe}/>)
            }
        </div>
    );
};

