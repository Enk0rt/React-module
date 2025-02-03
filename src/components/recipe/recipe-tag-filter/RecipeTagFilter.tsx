import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {recipeSliceActions} from "../../../redux/slices/recipe-slice/RecipeSlice.ts";
import {useParams, useSearchParams} from "react-router-dom";
import {RecipeItem} from "../recipe/RecipeItem.tsx";
import {urls} from "../../../constants/urls.ts";
import {Pagination} from "../../pagination/Pagination.tsx";

export const RecipeTagFilter = () => {
    const [query] = useSearchParams();

    const {tagItem} = useParams()
    const {recipesByTag,total} = useAppSelector(({recipeSlice})=>recipeSlice)
    const dispatch = useAppDispatch()
    const skip: number = Number(query.get('skip'));

    useEffect(() => {
        if (tagItem) {
            dispatch(recipeSliceActions.loadRecipesByTag({url: urls.recipes, tag: tagItem, skip: skip}))
        }
    }, [tagItem,skip])
    return (
        <div>
            {
                recipesByTag.map((recipe,index) => <RecipeItem key={index} recipe={recipe}/>)
            }
            {total >= 7 && <Pagination skip={skip} total={total}/>}
        </div>
    );
};

