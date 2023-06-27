import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Header.module.css';
import { logOut } from '../store/AuthSlice';
const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth);
    const [auth, setIsAuth] = useState(isAuth);
    console.log(isAuth)
    console.log(isAuth)
    const logoutHandler = () => {
        dispatch(logOut());
        setIsAuth(!auth);
    };
    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            <nav>
                <ul>
                    {auth && <>
                        <li>
                            <a href='/'>My Products</a>
                        </li>
                        <li>
                            <a href='/'>My Sales</a>
                        </li>
                    </>
                    }
                    <li>
                        <button onClick={logoutHandler}>{`${auth ? 'login':'Logout'}`}</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
