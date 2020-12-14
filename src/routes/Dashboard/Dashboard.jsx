import React from "react";

import "./Dashboard.scss";

import { Menu, Catalog } from "../../containers";
import { ContentHeaderPage } from "../../components"

const Dashboard = () => {
    //const token = localStorage.getItem('token')

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
                id: 3,
                name: "HotDog da Moda",
                Likes: "10",
                Valor: "22,00",
                ValorCashBack: "20,00",
                image: "https://www.fabfood4all.co.uk/wp-content/uploads/2014/06/Hotdogs-4-Custom-500x500.jpg"
            }
        ]
    }

    return (
        <div className='Dashboard' data-testid='Dashboard'>
            <Menu />
            <div className='content'>
                < ContentHeaderPage title={'Dashboard'} />
                <div className='content__lists'>
                    <Catalog products={products} />
                </div>
            </div>

        </div>
    );
};

export default Dashboard;