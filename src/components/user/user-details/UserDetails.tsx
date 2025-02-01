import {useParams} from "react-router-dom";
import {memo, useEffect} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";

import {userSliceActions} from "../../../redux/slices/user-slice/UserSlice.ts";
import {useRefreshAndLoadItems} from "../../../hooks/useRefreshAndLoadItems.tsx";
import {recipeSliceActions} from "../../../redux/slices/recipe-slice/RecipeSlice.ts";
import {RecipeItem} from "../../recipe/recipe/RecipeItem.tsx";

export const UserDetails = memo(() => {
    const {id} = useParams()
    const user = useAppSelector(({userSlice}) => userSlice.users.find(user => user.id.toString() === id))

    const {recipes} = useAppSelector(({recipeSlice}) => recipeSlice)

    const filteredRecipes = recipes.filter(recipe => recipe.userId.toString() === id)
    const getUsers = useRefreshAndLoadItems(userSliceActions.loadUsers)
    const getRecipes = useRefreshAndLoadItems(recipeSliceActions.loadRecipes)

    useEffect(() => {
        if (!user && !getUsers.error) {
            getUsers.fetchItems()
        }
        if (!recipes.length && !getRecipes.error) {
            getRecipes.fetchItems()
        }
    }, [id, getUsers.error]);

    return (
        <div>
            {
                !user && recipes.length ? (
                    <div>User not found</div>
                ) : user ? (
                    <div>
                        <h2>{user.id} --- {user.firstName} {user.lastName}, {user.age}</h2>
                        <p>{user.gender}</p>
                        <p>{user.birthDate}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <img src={user.image} alt={user.firstName}/>
                        {
                            !filteredRecipes.length &&
                            <div>
                                Recipes: no recipes
                            </div>
                        }
                        {
                            !!filteredRecipes.length &&
                            <div>
                                Recipes:
                                {
                                    filteredRecipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe}/>)
                                }
                            </div>
                        }
                    </div>
                ) : (
                    <div>Loading..</div>
                )}
        </div>
    )
})
export default UserDetails