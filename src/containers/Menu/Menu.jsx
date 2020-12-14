import React, { useContext, useState } from 'react'

import "./Menu.scss";

import { ItemProductMenu } from "../../components"
import { Context } from '../../context/AuthContext';

const Menu = () => {
    const { handleLogout, user, itemsMenu } = useContext(Context);

    var menuItems = []
    menuItems = itemsMenu.length > 0 ? itemsMenu : []

    return (
        <div className="Menu" data-testid="Menu">
            <div className='Menu__header'>
                Bem Vindo {user.nome}
            </div>

            <div className='Menu__itens'>
                {
                    menuItems.map((element) =>
                        (<ItemProductMenu item={element} />)
                    )
                }
            </div>

            <div className='Menu__footer'>
                <button onClick={() => { handleLogout() }}>
                    <ItemProductMenu item={'Sair'} />
                </button>
            </div>
        </div>
    )
}

export default Menu