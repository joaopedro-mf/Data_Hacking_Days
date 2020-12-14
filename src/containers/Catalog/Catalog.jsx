import React, { useContext, useState } from 'react'

import "./Catalog.scss";

import { CardCatalog } from "../../components"
import { Context } from '../../context/AuthContext';

const Catalog = ({ products }) => {
    var { items } = products
    return (
        <section className='catalog' data-testeid='catalog'>
            <div className='container'>
                <div className='catalog__content'>
                    {items.length &&
                        items.map((product, index) => (
                            < CardCatalog key={index} info={product} className='catalog__item' />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Catalog