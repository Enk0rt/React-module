import {RecipeItem} from "../recipe/RecipeItem.tsx";
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {Pagination} from "../../pagination/Pagination.tsx";
import {recipeSliceActions} from "../../../redux/slices/recipe-slice/RecipeSlice.ts";
import './RecipeList.scss'

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
        <div className={'tag'}>
                {
                    recipesByPage[skip] ?
                    (<div className={'tag__list'} >
                    {
                        recipesByPage[skip]?.map((recipe, index) => <RecipeItem key={index} recipe={recipe}/>)
                    }
                </div>) : (<div><h2 className={'tag__loader'}>Loading...</h2></div>)
                }
                <Pagination skip={skip} total={total}/>
        </div>
    );
};

