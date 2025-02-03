import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {IForm} from "../../../models/form/IForm.ts";
import {loginValidator} from "../../../validator/LoginValidator.ts";
import {loginUser} from "../../../api/auth/loginUser.ts";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {modalSliceActions} from "../../../redux/slices/modal-slice/ModalSlice.ts";
import {userAuthSliceActions} from "../../../redux/slices/userAuth-slice/UserAuthSlice.ts";
import './LoginForm.scss'


export const LoginForm = () => {
    const {isActive} = useAppSelector(({modalSlice})=>modalSlice)
    const dispatch = useAppDispatch()

    const {handleSubmit, register, formState: {errors}, reset} = useForm<IForm>({
        mode: "all",
        resolver: joiResolver(loginValidator)
    })

    useEffect(() => {
        if (!isActive) {
            reset()
        }
    }, [isActive,reset]);
    const submitAndLogin = async (formData: IForm) => {
        const {data} = await loginUser({...formData,expiresInMins:1}).then(res => res);
        dispatch(userAuthSliceActions.setLoginUser(data))
        dispatch(modalSliceActions.setIsActive(false));
        reset()
    }

    return (
        <div className={'container'}>
            <h2>Login</h2>
            <form className={'form'} onSubmit={handleSubmit(submitAndLogin)}>
                <div>
                    <div className={'form__error'}>
                        {
                            errors.username  && <div>{errors.username.message}</div>
                        }
                    </div>
                    <label className={'input'}>
                        <span className={'input__name'}>Username</span>
                        <input type="text" {...register('username')}
                               className={'input__item'}/>
                    </label>
                </div>
                <div>
                    <div className={'form__error'}>
                        {
                            errors.password  && <div>{errors.password.message}</div>
                        }
                    </div>
                    <label className={'input'}>
                        <span className={'input__name'}>Password</span>
                        <input type="text" {...register("password")}
                               className={'input__item'}/>
                    </label>
                </div>
                <button
                    className={'input__submit'}>
                    Sign in
                </button>
            </form>
        </div>
    )
}

