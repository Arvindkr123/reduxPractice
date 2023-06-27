import React from 'react'
import { useSelector } from 'react-redux'
import Counter from './components/Counter.jsx';
import Header from './components/Header.jsx';
import Auth from './components/Auth.jsx';
import UserProfile from './components/UserProfile.jsx';
const App = () => {
    const isAuth = useSelector(state => state.auth)
    console.log(isAuth)
    return (
        <>
            <Header />
            {!isAuth && <Auth />}
            {isAuth && <UserProfile />}
            <Counter />
        </>
    )
}

export default App;
