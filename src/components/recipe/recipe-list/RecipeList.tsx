import {RecipeItem} from "../recipe/RecipeItem.tsx";

import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {Pagination} from "../../pagination/Pagination.tsx";
import {recipeSliceActions} from "../../../redux/slices/recipe-slice/RecipeSlice.ts";

export const RecipeList = () => {
    const [query] = useSearchParams();
    const {recipesByPage,total} = useAppSelector(({recipeSlice})=>recipeSlice)
    const dispatch = useAppDispatch()
    const skip: number = Number(query.get('skip'));
    useEffect(() => {
        if (!(recipesByPage[skip] && recipesByPage[skip].length > 0)) {
            dispatch(recipeSliceActions.loadRecipes(skip));
        }
    }, [skip]);
    return (
        <div>
            {
                recipesByPage[skip]?.map((recipe,index) => <RecipeItem key={index} recipe={recipe}/>)
            }
            <Pagination skip={skip} total={total}/>
        </div>
    );
};

