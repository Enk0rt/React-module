import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../../models/user/IUser.ts";
import {getData} from "../../../api/data-from-api/getData.ts";
import {urls} from "../../../constants/urls.ts";
import {IUserResponse} from "../../../models/user/IUserResponse.ts";

type UserSliceType = {
    users: IUser[],
}
const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkApi) => {
        return (thunkApi.fulfillWithValue(await getData<IUserResponse>(urls.users).then(({users}): IUser[] => users)))
    })

const userInitialState: UserSliceType = {users: []}
export const userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
})

export const userSliceActions = {
    ...userSlice.actions, loadUsers
}