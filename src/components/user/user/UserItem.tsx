import {memo} from "react";
import {IUser} from "../../../models/user/IUser.ts";
import {Link} from "react-router-dom";

interface UserItemProps {
    user:IUser,
}

export const UserItem = memo(({user}: UserItemProps) => {
    return (
        <div>
            <Link to={'/users/'+user.id}><h2>{user.id} --- {user.firstName} {user.lastName}</h2></Link>
            <p>{user.phone}</p>
        </div>
    );
})

