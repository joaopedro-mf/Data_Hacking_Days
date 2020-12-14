import React, { useContext, useState } from "react";

import { Context } from '../../context/AuthContext';
import { Link } from "react-router-dom";

import { Topbar } from "../../containers";

import "./Login.scss";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin } = useContext(Context);

    function handleChangeEmail(event) {
        const email = event.target.value;
        if (email !== '') {
            setEmail(email)
        }
    }
    function handleChangePassword(event) {
        const pass = event.target.value;
        if (pass !== '') {
            setPassword(pass)
        }

    }

    return (
        <div className='Login' data-testid='Login'>
            <Topbar />
            <header className="banner" data-testid="banner">
                <div className='container'>

                </div>
            </header>
            <div className='Login__information'>
                <div>
                    <p>Login</p>
                    <input type="text" onChange={handleChangeEmail} />
                </div>
                <div>
                    <p>Senha</p>
                    <input type="password" onChange={handleChangePassword} />
                </div>
                {/* <button type="button" onClick={() => { handleLogin(email, password) }}>Entrar</button> */}
                <Link to={`dashboard`} className='topbar__loginButton'>
                    <button type="button" >Entrar</button>
                </Link>
            </div>
        </div>
    );
};

export default Login;