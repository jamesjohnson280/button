import React from 'react';
import { ReactComponent as IconAddCart } from './assets/add-cart.svg';
import { ReactComponent as IconAnchor } from './assets/anchor.svg';
import { ReactComponent as IconCheck } from './assets/check.svg';
import { ReactComponent as IconDownload } from './assets/download.svg';
import { ReactComponent as IconSearch } from './assets/search.svg';
import './Icon.css';

const Icon = (props) => {
    let icon = undefined;
    switch (props.name) {
        case 'add-cart':
            icon = <IconAddCart />;
            break;
        case 'anchor':
            icon = <IconAnchor />;
            break;
        case 'check':
            icon = <IconCheck />;
            break;
        case 'download':
            icon = <IconDownload />;
            break;
        case 'search':
            icon = <IconSearch />;
            break;
        default:
            icon = <span />;
            break;
    }
    return icon;
};

export default Icon;