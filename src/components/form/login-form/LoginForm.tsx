import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {IForm} from "../../../models/form/IForm.ts";
import {loginValidator} from "../../../validator/LoginValidator.ts";
import {loginUser} from "../../../api/auth/loginUser.ts";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {userAuthSliceSliceActions} from "../../../redux/slices/userAuth-slice/UserAuthSlice.ts";
import {useEffect} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {modalSliceActions} from "../../../redux/slices/modal-slice/ModalSlice.ts";

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
        const {data} = await loginUser({...formData,expiresInMins:30}).then(res => res);
        dispatch(userAuthSliceSliceActions.setLoginUser(data))
        dispatch(modalSliceActions.setIsActive(false));
        reset()
    }

    return (
        <div className={'flex flex-col justify-center items-center gap-3'}>
            <h2>Login</h2>
            <form className={'flex flex-col gap-2 w-60 h-50'} onSubmit={handleSubmit(submitAndLogin)}>
                <div>
                    <div className={'h-4'}>
                        {
                            errors.username  && <div className={'text-xs text-red-500'}>{errors.username.message}</div>
                        }
                    </div>
                    <label className={'flex justify-center flex-col gap-2 relative mt-3'}>
                        <span className={'block absolute -top-2 left-5 bg-white px-1 text-xs'}>Username</span>
                        <input type="text" {...register('username')}
                               className={'rounded-xl p-2 pl-4 outline-black-200 border-black border-opacity-25 border-2'}/>
                    </label>
                </div>
                <div>
                    <div className={'h-4'}>
                        {
                            errors.password  && <div className={'text-xs text-red-500'}>{errors.password.message}</div>
                        }
                    </div>
                    <label className={'flex justify-center flex-col gap-2 relative mt-3'}>
                        <span className={'block absolute -top-2 left-5 bg-white px-1 text-xs'}>Password</span>
                        <input type="text" {...register("password")}
                               className={'rounded-xl p-2 pl-4 outline-black-200 border-black border-opacity-25 border-2'}/>
                    </label>
                </div>
                <button
                    className={'border-2 border-black border-opacity-25 rounded-xl w-24 hover:border-black self-center mt-4'}>
                    Sign in
                </button>
            </form>
        </div>
    )
}

