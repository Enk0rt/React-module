import {IRecipe} from "../../../models/recipe/IRecipe.ts";
import {Link} from "react-router-dom";


interface RecipeItemProps {
    recipe: IRecipe
}

export const RecipeItem = ({recipe}: RecipeItemProps) => {
    return (
        <div>
            <Link to={'/recipe/'+recipe.id}>{recipe.name} ({recipe.userId})</Link>
        </div>
    );
};

