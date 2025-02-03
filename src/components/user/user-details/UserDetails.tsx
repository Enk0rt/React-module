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
        !userById ? (
            <div>Loading...</div>
        ) : (
            <div>
                <h2>{userById.id} --- {userById.firstName} {userById.lastName}, {userById.age}</h2>
                <p>{userById.gender}</p>
                <p>{userById.birthDate}</p>
                <p>{userById.email}</p>
                <p>{userById.phone}</p>
                <img src={userById.image} alt={userById.firstName}/>
                <h3>Recipes:</h3>
                {
                    userRecipes &&
                    <ul>
                        {userRecipes.map((recipe,index) => (
                            <Link key={index} to={'/recipe/' + recipe.id}> - {recipe.name}</Link>
                        ))}
                    </ul>
                }
            </div>
        ));
});

export default UserDetails;
