import {UserList} from "../../components/user/users-list/UserList.tsx";
import {Search} from "../../components/search/Search.tsx";

const UsersPage = () => {
    return (
        <div>
            <Search type={"users"}/>
            <UserList/>
        </div>
    );
};

export default UsersPage;