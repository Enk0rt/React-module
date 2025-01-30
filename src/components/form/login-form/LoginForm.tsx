import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {IForm} from "../../../models/form/IForm.ts";
import {loginValidator} from "../../../validator/LoginValidator.ts";
import {loginUser} from "../../../api/auth/loginUser.ts";

interface LoginFormProps {
    setActive: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

export const LoginForm = ({setActive}: LoginFormProps) => {
    const {handleSubmit, register, formState: {errors}, reset} = useForm<IForm>({
        mode: "all",
        resolver: joiResolver(loginValidator)
    })

    const submitAndLogin = async (formData: IForm) => {
       localStorage.setItem('user',JSON.stringify(await loginUser(formData).then(res => res.data)));
        setActive(false);
        reset()
    }

    return (
        <div className={'flex flex-col justify-center items-center gap-6'}>
            <h2>Login</h2>
            <form className={'flex flex-col gap-6 '}>
                {
                    errors.username && <div>
                        {errors.username.message}
                    </div>
                }
                <label className={'flex justify-center flex-col gap-2 relative'}>
                    <span className={'block absolute -top-2 left-5 bg-white px-1 text-xs'}>Username</span>
                    <input type="text" {...register('username')}
                           className={'rounded-xl p-2 pl-4 outline-black-200 border-black border-opacity-25 border-2'}/>
                </label>
                {
                    errors.password && <div>
                        {errors.password.message}
                    </div>
                }
                <label className={'flex justify-center flex-col gap-2 relative'}>
                    <span className={'block absolute -top-2 left-5 bg-white px-1 text-xs'}>Password</span>
                    <input type="text" {...register("password")}
                           className={'rounded-xl p-2 pl-4 outline-black-200 border-black border-opacity-25 border-2'}/>
                </label>
            </form>
            <button className={'border-2 border-black border-opacity-25 rounded-xl w-24 hover:border-black'}
                    onClick={handleSubmit(submitAndLogin)}>Sign in
            </button>
        </div>
    );
};

