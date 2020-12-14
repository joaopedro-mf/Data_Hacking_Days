import React from 'react'

import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo-atacad.png";

import "./Topbar.scss"

const Topbar = () => {

    return (
        <nav className="topbar" data-testid="topbar">
            <div className='topbar__icon'>
                <Link to={``} >
                    <figure className='topbar__logo'>
                        <img src={Logo} alt={'hackaton'} />
                    </figure>
                </Link>
            </div>
            <div className='topbar__Buttons' >
                {/* <Link to={`offer`} className='topbar__loginButton'>
                    <div >
                        Ofertas
                    </div>
                </Link> */}
                <Link to={`login`} className='topbar__loginButton'>
                    <div>
                        Login
                </div>
                </Link>
            </div>

        </nav>
    )
}

export default Topbar