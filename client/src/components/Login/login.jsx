import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import './login.css';


export default function Register () {

    const history = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {isLoginLoading, hasLoginError, login, isLogged} = useUser();

    useEffect(() => {
        if(isLogged) {
            history('/');
        }
    }, [isLogged, history]);



    const handleSubmit = (e) => {
        e.preventDefault();
        // alert( `${username}`,`${password}`)
        login({username, password})
        history('/home')
    }



    return (

        <div className='form'>
            <h1>Login</h1>
            {
                isLoginLoading && <p>Loading...</p>
            }
            {
                !isLoginLoading &&

                    <form onSubmit={handleSubmit} className='formRegister'>
                        <div>
                            <label>Username </label>
                            <input 
                                type="text" 
                                placeholder='Username'
                                value={username}
                                onChange={e => setUsername(e.target.value)}/>
                        </div>
                        <div>
                            <label>Password </label>
                            <input 
                                type="password"
                                placeholder='Password'
                                value={password}
                                onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button>Login!</button>
                    </form>

            }
            {
                hasLoginError && <p>Error</p>
            }

        </div>

    )


}