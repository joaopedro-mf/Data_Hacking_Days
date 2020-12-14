import React from "react";

import "./ContentHeaderPage.scss";

import Logo from "../../assets/images/logo-atacad.png";

const ContentHeaderPage = ({ title }) => {
    return (
        <div className='ContentHeaderPage' data-testid='ContentHeaderPage'>
            <h1 className='ContentHeaderPage__title'>{title}</h1>
            <div className='ContentHeaderPage__icon'>
                <figure className='ContentHeaderPage__logo'>
                    <img src={Logo} alt={'hackaton'} />
                </figure>
            </div>
        </div>
    );
};

export default ContentHeaderPage;