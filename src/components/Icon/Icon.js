import React from 'react';
import {ReactComponent  as IconAddCart} from './assets/add-cart.svg';
import './Icon.css';

const Icon = (props) => {
    let icon = undefined;
    switch (props.name) {
        case 'add-cart':
            icon = <IconAddCart />;
            break;
        default: 
            icon = <span />
            break;
    }
    return icon;
};

export default Icon;