import React from "react";

import { Link } from "react-router-dom";

import "./ItemProductMenu.scss";

import { ReactComponent as Dashboard } from '../../assets/icons/resultado.svg'
import { ReactComponent as Sair } from '../../assets/icons/sair.svg'


const ItemProductMenu = ({ item }) => {

    return (
        <Link to={`${item.toLowerCase()}`} className='Redirect' >
            <div className='ItemProductMenu' data-testid='ItemProductMenu'>

                <div className='ItemProductMenu__icon' >
                    {{
                        'Dashboard': <Dashboard />,
                        'Sair': <Sair />
                    }[item]}
                </div>
                <div className='ItemProductMenu__item'>
                    {item}
                </div>
            </div >
        </Link >

    );
};

export default ItemProductMenu;