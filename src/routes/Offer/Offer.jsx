import React from "react";
import { useParams } from "react-router-dom";
import "./Offer.scss";

import Logo from "../../assets/images/logo-atacad.png";

import { Topbar, Catalog } from "../../containers";

var products = {
    items: [
        {
            id: 1,
            name: "HotDog Full",
            Likes: "20",
            Valor: "12,00",
            ValorCashBack: "10,00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-AfGrJD5c_nF2hQ5vgwoyrMY46CzHWgHog&usqp=CAU"
        },
        {
            id: 2,
            name: "Bolo de Cenoura",
            Likes: "30",
            Valor: "25,00",
            ValorCashBack: "20,00",
            image: "https://simplelivingrecipes.com/wp-content/uploads/2020/03/bolo-de-cenoura.jpeg"
        },
        {
            id: 3,
            name: "HotDog da Moda",
            Likes: "10",
            Valor: "22,00",
            ValorCashBack: "20,00",
            image: "https://www.fabfood4all.co.uk/wp-content/uploads/2014/06/Hotdogs-4-Custom-500x500.jpg"
        },
        {
            id: 4,
            name: "Macarrão na Chapa",
            Likes: "50",
            Valor: "15,00",
            ValorCashBack: "12,00",
            image: "https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-2007-4204087721747e9c9f2c0f7e6e4b7676.jpg"
        }

    ]
}

const Offer = () => {

    const { id } = useParams();

    console.log(id)

    var AtualProduct;

    products.items.forEach(x => {
        if (x.id == id) {
            AtualProduct = x;
        }
    }
    )

    console.log(AtualProduct)

    return (
        <div className='Offer' data-testid='Offer'>
            <Topbar />
            <header className="banner" data-testid="banner">
                <div className='container'>
                    <div class='content__main'>
                        <div className='content__lists'>
                            <div className='Offer__image'>
                                <img src={AtualProduct.image} alt={AtualProduct.name} />

                            </div>
                            <div className='CardCatalog__AtualProduct'>
                                <div className='CardCatalog__header'>
                                    <p className='CardCatalog__title'>{AtualProduct.name}</p>

                                </div>
                                <div className='CardCatalog__promoValue'>
                                    <p className='CardCatalog__valueorigin'>R$ {AtualProduct.Valor}</p>
                                    <p className='CardCatalog__value'>R$ {AtualProduct.ValorCashBack}</p>
                                </div>
                                <div className='CardCatalog__footer'>
                                    <button>Eu Quero !</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Offer;