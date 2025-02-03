import {Link, useNavigate} from "react-router-dom";
import {AppRoutes} from "../../routes/routes.ts";
import {Modal} from "../modal/Modal.tsx";
import {LoginForm} from "../form/login-form/LoginForm.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {userAuthSliceActions} from "../../redux/slices/userAuth-slice/UserAuthSlice.ts";
import {modalSliceActions} from "../../redux/slices/modal-slice/ModalSlice.ts";
import './Menu.scss'
export const Menu = () => {
    const {userImage, isUserAuth} = useAppSelector(({userAuthSlice}) => userAuthSlice)
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const openModal = () => {
        dispatch(modalSliceActions.setIsActive(true))
    }

    const logoutUser = () => {
        dispatch(userAuthSliceActions.setLogoutUser())
        navigate(AppRoutes.root);
    }

    if (isUserAuth && userImage) {
        return (
            <div className={'menu'}>
                <div className={'menu__container'}>
                    <ul className={'menu__nav'}>
                        <Link to={AppRoutes.root}>
                            <li className={'menu__nav-item'}>Home</li>
                        </Link>
                        <Link to={AppRoutes.users}>
                            <li className={'menu__nav-item'}>Users</li>
                        </Link>
                        <Link to={AppRoutes.recipes}>
                            <li className={'menu__nav-item'}>Recipes</li>
                        </Link>
                        <button className={'menu__nav-item'}
                                onClick={logoutUser}>Logout
                        </button>
                        <img src={userImage} alt="image" className={'menu__nav-image'}/>
                    </ul>
                </div>
                <Modal>
                    <LoginForm/>
                </Modal>
            </div>
        )
    } else {
        return (
            <div className={'menu'}>
                <div className={'menu__container'}>
                    <ul className={'menu__nav'}>
                        <button className={'menu__nav-item'}
                                onClick={openModal}>Login
                        </button>
                    </ul>
                </div>
                <Modal>
                    <LoginForm/>
                </Modal>
            </div>
        );
    }
}


