import React from "react";

import "./CardCatalog.scss";


import { Link } from "react-router-dom";

const CardCatalog = ({ key, info }) => {
    console.log(info)
    return (
        <div className='CardCatalog' data-testid='CardCatalog'>
            <div className='CardCatalog__image'>
                <Link to={`offer/${info.id}`} className='content__link' >
                    {info.image === "" ?
                        <img src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+indisponível" alt={info.name} />
                        :
                        <img src={info.image} alt={info.name} />
                    }
                </Link>
            </div>
            <div className='CardCatalog__info'>
                <div className='CardCatalog__header'>
                    <p className='CardCatalog__title'>{info.name}</p>

                </div>
                <div className='CardCatalog__promoValue'>
                    <p className='CardCatalog__valueorigin'>R$ {info.Valor}</p>
                    <p className='CardCatalog__value'>R$ {info.ValorCashBack}</p>
                </div>
                <Link to={`offer/${info.id}`} className='content__link' >
                    <div className='CardCatalog__footer'>
                        <button>Eu Quero !</button>
                    </div>
                </Link>


            </div>

        </div>
    );
};

export default CardCatalog;