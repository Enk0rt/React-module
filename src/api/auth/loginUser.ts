import axios from "axios";
import {baseUrl} from "../../constants/urls.ts";
import {IUserWithTokens} from "../../models/auth/IUserWithTokens.ts";
import {retrieveLocalStorage} from "../data-from-api/helpers/helpersApi.ts";
import {ITokens} from "../../models/auth/ITokens.ts";

export const axiosInstanceAuth = axios.create({
    baseURL:baseUrl+'/auth',
    headers:{},
})

type LoginType = {
    username:string,
    password:string,
    expiresInMins:number,
}

export const loginUser = async ({username,password,expiresInMins}:LoginType) =>{
    return await axiosInstanceAuth.post<IUserWithTokens>('/login',{username,password,expiresInMins});
}

export const refresh = async() => {
    const userWithToken = retrieveLocalStorage<IUserWithTokens>('user')
    const  {data:{accessToken,refreshToken}}= await axiosInstanceAuth.post<ITokens>('/refresh',{
        refreshToken:userWithToken.refreshToken,
        expiresInMins:1,
    })
    userWithToken.accessToken = accessToken
    userWithToken.refreshToken = refreshToken
    localStorage.setItem('user',JSON.stringify(userWithToken))
}