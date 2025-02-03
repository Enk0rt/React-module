import {RecipeList} from "../../components/recipe/recipe-list/RecipeList.tsx";
import {Search} from "../../components/search/Search.tsx";
import './Recipes.scss'
const RecipesPage = () => {
    return (
        <div className={'recipes'}>
            <Search type={"recipes"}/>
            <RecipeList/>
        </div>
    );
};

export default RecipesPage;