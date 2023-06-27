import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Header.module.css';
import { logOut } from '../store/AuthSlice';
const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth);
    console.log(isAuth)
    const logoutHandler = () => {
        dispatch(logOut());
    };
    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {isAuth && (
                <nav>
                    <ul>
                        <li>
                            <a href='/'>My Products</a>
                        </li>
                        <li>
                            <a href='/'>My Sales</a>
                        </li>
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    )
}

export default Header
