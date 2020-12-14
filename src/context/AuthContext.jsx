import React, { createContext, useState, useEffect } from 'react'

import api from '../api'
import history from '../history'
import permissions from '../permissions'

const Context = createContext()

function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState('');
    const [itemsMenu, setItemsMenu] = useState([''])

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            api.defaults.headers.Authorization = `${JSON.parse(token)}`;
            setAuthenticated(true)
        }
        setLoading(false);
    }, [])


    async function handleLogin(email, password) {
        console.log(email)
        const { data: { token, infoResp } } = await api.post('/login', {
            "email": email,
            "password": password
        })

        //alerta usuario erro
        setUser(infoResp)
        localStorage.setItem('token', JSON.stringify(token));
        api.defaults.headers = {
            'x-access-token': `${token}`
        };
        setAuthenticated(true);

        setItemsMenu(permissions[infoResp.typeuser].pages)
        
        history.push('/dashboard');
        
    }

    function handleLogout() {
        setAuthenticated(false);
        setUser('')
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        history.push('/');

    }

    function checkPermissions(path) {
        path = path.charAt(0).toUpperCase() + path.slice(1);
        if (itemsMenu.includes(path)) {
            return true;
        }
        else return false;
    }

    return (
        <Context.Provider value={{ loading, authenticated, user, itemsMenu, handleLogin, handleLogout, checkPermissions }}>
            {children}
        </Context.Provider>
    )

}

export { Context, AuthProvider }