import {UserList} from "../../components/user/users-list/UserList.tsx";
import {Search} from "../../components/search/Search.tsx";
import './Users.scss'

const UsersPage = () => {
    return (
        <div className={'users'}>
            <Search type={"users"}/>
            <UserList/>
        </div>
    );
};

export default UsersPage;