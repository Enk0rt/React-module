import {memo} from "react";
import {IUser} from "../../../models/user/IUser.ts";
import {Link} from "react-router-dom";
import './UserItem.scss'
interface UserItemProps {
    user:IUser,
}

export const UserItem = memo(({user}: UserItemProps) => {
    return (
        <div className={'user__item'}>
            <Link to={'/users/'+user.id}><h2>{user.id} --- {user.firstName} {user.lastName}</h2>
            <p>{user.email}</p>
            </Link>
        </div>
    );
})

