import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {recipeSliceActions} from "../../../redux/slices/recipe-slice/RecipeSlice.ts";


export const RecipeDetails = () => {
    const {id} = useParams()
    const {recipeById} = useAppSelector(({recipeSlice}) => recipeSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(recipeSliceActions.clearRecipeById())
        dispatch(recipeSliceActions.loadRecipeById(Number(id)))
    }, []);
    console.log(recipeById)

    return (
        !recipeById ? (
            <div>Loading...</div>
        ) : (
            <div>
                <h2>{recipeById.id} --- {recipeById.name} rating: {recipeById.rating}</h2>
                <p>Cuisine :{recipeById.cuisine}</p>
                <p>CaloriesPerServing: {recipeById.caloriesPerServing}</p>
                <p>Servings: {recipeById.servings}</p>
                <p>Cook Time: {recipeById.cookTimeMinutes}</p>
                <p>Preparation Time: {recipeById.prepTimeMinutes}</p>
                <p>Difficulty: {recipeById.difficulty}</p>
                <p>Meal-type: {recipeById.mealType}</p>
                <img src={recipeById.image} alt={recipeById.name}/>
            </div>
        ))
};

export default RecipeDetails;