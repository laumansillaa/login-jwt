import React from 'react';
import { Link } from 'react-router-dom';

import useUser from '../../hooks/useUser';

export default function Header () {

    const {isLogged, logout} = useUser();

    const handleClick = (e) => {
        e.preventDefault()
        logout()
    }

    return (
        <header>
            {
                isLogged ? 
                    <Link to='#' onClick={handleClick}>
                        Logout
                    </Link>
                : 
                    <Link to='/login'>
                        Login
                    </Link>
            }
        </header>
    )
}