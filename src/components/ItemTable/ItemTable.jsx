import React from "react";

import { Link } from "react-router-dom";

import "./ItemTable.scss";
import { Button } from "../../components"


const ItemTable = ({ id, name, descr, local }) => {

    return (
        <Link to={`${local}/${id}`} className='Redirect' >
            <div className='itemtable' data-testid='itemtable'>
                <div className='itemtable__id'> {id}</div>
                <div className='itemtable__name'>{name}</div>
                <div className='itemtable__descr'>{descr}</div>
                {/* <Link to={`${local}/edit/{id}`} className='Redirect' >
                    <Button type={'edit'} size={'small'} />
                </Link> */}
            </div >
        </Link >

    );
};

export default ItemTable;