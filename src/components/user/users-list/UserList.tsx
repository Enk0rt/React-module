import {UserItem} from "../user/UserItem.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../../redux/slices/user-slice/UserSlice.ts";
import {useSearchParams} from "react-router-dom";
import {Pagination} from "../../pagination/Pagination.tsx";
import './UserList.scss'

export const UserList = () => {
    const [query] = useSearchParams();

    const {usersByPage, total} = useAppSelector(({userSlice}) => userSlice)
    const dispatch = useAppDispatch()

    const skip: number = Number(query.get('skip'));

    useEffect(() => {

        if (!(usersByPage[skip] && usersByPage[skip].length > 0)) {
            dispatch(userSliceActions.loadUsersWithPagination(skip));
        }
    }, [skip]);

    return (
        <div className={'user'}>
            <div className={'user__list'}>
                {
                    usersByPage[skip] ?
                    (
                        <div>
                            {
                                usersByPage[skip]?.map(user => <UserItem key={user.id} user={user}/>)
                            }
                        </div>
                    ) : (
                        <div><h2 className={'user__loader'}>Loading...</h2></div>
                    )
                }
                <Pagination skip={skip} total={total}/>
            </div>
        </div>
    );
};

