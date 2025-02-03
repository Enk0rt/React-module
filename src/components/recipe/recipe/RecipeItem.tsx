import {IRecipe} from "../../../models/recipe/IRecipe.ts";
import {Link} from "react-router-dom";
import './RecipeItem.scss'

interface RecipeItemProps {
    recipe: IRecipe
}

export const RecipeItem = ({recipe}: RecipeItemProps) => {

    return (
        <div className={'tag__wrapper'}>
            <Link to={'/recipe/' + recipe.id}>{recipe.name} ({recipe.userId})</Link>
            <div className={'tag__container'}>
                {
                    recipe.tags.map((tag, index) =>
                        <div key={index} className={'tag__item'}>
                            <Link to={'/recipe/tag/'+tag}>
                                {tag}
                            </Link>
                        </div>)
                }
            </div>
        </div>
    );
};

