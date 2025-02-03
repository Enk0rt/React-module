import {IRecipe} from "../../../models/recipe/IRecipe.ts";
import {Link} from "react-router-dom";


interface RecipeItemProps {
    recipe: IRecipe
}

export const RecipeItem = ({recipe}: RecipeItemProps) => {

    return (
        <div>
            <Link to={'/recipe/' + recipe.id}>{recipe.name} ({recipe.userId})</Link>
            <div className={'flex gap-2 mt-2 items-center'}>
                <p> Tags: </p>
                {
                    recipe.tags.map((tag, index) =>
                        <div key={index} className={'px-2 py-1 bg-black rounded-md'}>
                            <Link to={'/recipe/tag/'+tag}>
                                {tag}
                            </Link>
                        </div>)
                }
            </div>
        </div>
    );
};

