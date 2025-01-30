import axios from "axios";
import {baseUrl} from "../../constants/urls.ts";
import {IUserWithTokens} from "../../models/auth/IUserWithTokens.ts";

export const axiosInstanceLogin = axios.create({
    baseURL:baseUrl+'/auth',
    headers:{},
})

type LoginType = {
    username:string,
    password:string,
    expiresInMins:number,
}

export const loginUser = async ({username,password,expiresInMins}:LoginType) =>{
    return await axiosInstanceLogin.post<IUserWithTokens>('/login',{username,password,expiresInMins});
}