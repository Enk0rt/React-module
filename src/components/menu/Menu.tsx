import {Link} from "react-router-dom";
import {AppRoutes} from "../../routes/routes.ts";
import {Modal} from "../modal/Modal.tsx";
import {useEffect, useState} from "react";
import {LoginForm} from "../form/login-form/LoginForm.tsx";
import {IUserWithTokens} from "../../models/auth/IUserWithTokens.ts";

export const Menu = () => {
    const [active, setActive] = useState<boolean>(false)
    const openModal = () => {
        setActive(true)
    }
    const [userImage,setUserImage] = useState<string>('')
    const authenticatedUser:IUserWithTokens = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        if(authenticatedUser){
            setUserImage(authenticatedUser.image)
        }
    }, [authenticatedUser]);

    return (
        <div className={'w-full bg-gray-50 bg-opacity-30 relative'}>
            <div className={'w-5/6 h-20 flex justify-end items-center '}>
                <ul className={'flex w-96 gap-6 justify-between items-center'}>
                    <Link to={AppRoutes.root}>
                        <li className={'hover:text-white hover:underline underline-offset-2'}>Home</li>
                    </Link>
                    <Link to={AppRoutes.users}>
                        <li className={'hover:text-white hover:underline underline-offset-2'}>Users</li>
                    </Link>
                    <Link to={AppRoutes.recipes}>
                        <li className={'hover:text-white hover:underline underline-offset-2'}>Recipes</li>
                    </Link>
                    <button className={'hover:text-white hover:underline underline-offset-2'} onClick={openModal}>Login</button>
                    {
                        userImage && <img src={userImage} alt="image" className={'size-14'}/>
                    }
                </ul>
            </div>
            <Modal active={active} setActive={setActive}>
                <LoginForm setActive={setActive}/>
            </Modal>
        </div>
    );
};

