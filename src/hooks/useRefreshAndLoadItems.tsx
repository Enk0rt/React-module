// import {refresh} from "../api/auth/loginUser.ts";
// import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
// import {AsyncThunkAction} from "@reduxjs/toolkit";
// import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
// import {errorSliceActions} from "../redux/slices/error-slice/ErrorSlice.ts";
//
// export const useRefreshAndLoadItems = <T,>(
//     loadItems: (skip: number) => AsyncThunkAction<{ users: T[], total: number }, number, any>
// ) => {
//     const { total } = useAppSelector(({ userSlice }) => userSlice);
//     const { error } = useAppSelector(({ errorSlice }) => errorSlice);
//     const dispatch = useAppDispatch();
//
//     const fetchItems = async (skip: number): Promise<{ users: T[], total: number } | void> => {
//         try {
//             return await dispatch(loadItems(skip)).unwrap();
//         } catch (e: any) {
//             dispatch(errorSliceActions.setError(e.message));
//             if (e.message === "Unauthorized") {
//                 console.log("Refreshing token...");
//                 await refresh();
//                 return await dispatch(loadItems(skip)).unwrap();
//             }
//         }
//     };
//
//     return { fetchItems, error, total };
// };

