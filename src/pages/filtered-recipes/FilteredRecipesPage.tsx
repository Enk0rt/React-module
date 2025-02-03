import {RecipeTagFilter} from "../../components/recipe/recipe-tag-filter/RecipeTagFilter.tsx";
import {Search} from "../../components/search/Search.tsx";

const FilteredRecipesPage = () => {
    return (
        <div>
            <Search type={"recipes"}/>
            <RecipeTagFilter/>
        </div>
    );
};

export default FilteredRecipesPage;