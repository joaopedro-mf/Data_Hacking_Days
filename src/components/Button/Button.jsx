import React from "react";

import "./Button.scss";

import { ReactComponent as Edit } from "../../assets/icons/button/edit.svg";
import { ReactComponent as Delete } from "../../assets/icons/button/delete.svg";
import { ReactComponent as New } from "../../assets/icons/button/new.svg";

const Button = ({ type, title, size }) => {
    return (
        <div className='Button' data-testid='Button'>
            <button className='Button__item'>
                <p className='Button__title' >{title}</p>
                <div className='Button__icon' id={size} >
                    {{
                        'edit': <Edit />,
                        'new': <New />,
                        'delete': <Delete />
                    }[type]}
                </div>
            </button>
        </div>
    );
};

export default Button;