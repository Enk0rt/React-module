import {RecipeList} from "../../components/recipe/recipe-list/RecipeList.tsx";
import {Search} from "../../components/search/Search.tsx";

const RecipesPage = () => {
    return (
        <div>
            <Search type={"recipes"}/>
            <RecipeList/>
        </div>
    );
};

export default RecipesPage;