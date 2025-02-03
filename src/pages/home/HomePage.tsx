import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import './Home.scss'

const HomePage = () => {

    const {isUserAuth, authenticatedUser} = useAppSelector(({userAuthSlice}) => userAuthSlice)
    if (isUserAuth && authenticatedUser) {
        return (
            <div className={'home'}>
                <h2 className={'home__title'}>Authentication is successfully passed!</h2>
                <h2 className={'home__welcome-user'}>Welcome, {authenticatedUser.firstName}</h2>
            </div>
        );
    } else {
        return (
            <div className={'flex flex-col justify-center items-center h '}>
                <h2 className={'text-6xl w-4/5 text-center'}>Hey! To use the app authentication is required!</h2>
                <h2 className={'mt-6 text-4xl text-center text-amber-300'}>Tap Login in a menu</h2>
            </div>

        )
    }

};

export default HomePage;