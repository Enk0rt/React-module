import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useParams} from "react-router-dom";

export const RecipeDetails = () => {
    const {id} = useParams()
    const recipe= useAppSelector(({recipeSlice})=> recipeSlice.recipes.find(recipe => recipe.id.toString() === id))
    return (
        <div>
            {
                recipe ? (
                    <div>
                        <h2>{recipe.id} --- {recipe.name} rating: {recipe.rating}</h2>
                        <p>Cuisine :{recipe.cuisine}</p>
                        <p>CaloriesPerServing: {recipe.caloriesPerServing}</p>
                        <p>Servings: {recipe.servings}</p>
                        <p>Cook Time: {recipe.cookTimeMinutes}</p>
                        <p>Preparation Time: {recipe.prepTimeMinutes}</p>
                        <p>Difficulty: {recipe.difficulty}</p>
                        <p>Meal-type: {recipe.mealType}</p>

                    </div>
                ) : (<div>Recipe not found</div>)
            }

        </div>
    );
};

export default RecipeDetails;