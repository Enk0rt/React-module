import {memo, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";

import {userSliceActions} from "../../../redux/slices/user-slice/UserSlice.ts";
import {recipeSliceActions} from "../../../redux/slices/recipe-slice/RecipeSlice.ts";


export const UserDetails = memo(() => {
    const {id} = useParams();
    const userById = useAppSelector(({userSlice}) => userSlice.userById);
    const {userRecipes} = useAppSelector(({recipeSlice}) => recipeSlice);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userSliceActions.clearUserById());
        dispatch(userSliceActions.loadUserById(Number(id)));
        if (userRecipes) {
            dispatch(recipeSliceActions.clearRecipes());
            dispatch(recipeSliceActions.loadUserRecipes(Number(id)));
        }
    }, [id]);

    if (!userById) {
        return;
    }

    console.log(userRecipes)
    return (
        <div className={'flex justify-center items-center pt-2 gap-14'}>
            {!userById ? (
                <div>Loading...</div>
            ) : (
                <div className={' bg-gray-200 bg-opacity-50 p-8 rounded-xl flex flex-col'}>
                    <div className={'flex gap-6'}>
                        <div className={'flex flex-col gap-2'}>
                            <h2>{userById.firstName} {userById.lastName}, {userById.age}</h2>
                            <p>{userById.gender}</p>
                            <p>{userById.birthDate}</p>
                            <p>{userById.email}</p>
                            <p>{userById.phone}</p>
                        </div>
                        <img className={'size-40'} src={userById.image} alt={userById.firstName}/>
                    </div>

                </div>

            )}
            <div className={'w-96 bg-gray-200 bg-opacity-50 p-8 rounded-xl self-start'}>
                <h3 className={`text-center`}>Recipes:</h3>
                {
                    userRecipes &&
                    <ul className={'mt-4'}>
                        {userRecipes.map((recipe, index) => (
                            <Link key={index} to={'/recipe/' + recipe.id}> - {recipe.name}</Link>
                        ))}
                    </ul>
                }
            </div>
        </div>
        );
});

export default UserDetails;
