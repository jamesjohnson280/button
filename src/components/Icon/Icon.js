import React from 'react';
import { ReactComponent as IconAddCart } from './assets/add-cart.svg';
import { ReactComponent as IconAnchor } from './assets/anchor.svg';
import { ReactComponent as IconCheck } from './assets/check.svg';
import { ReactComponent as IconDownload } from './assets/download.svg';
import { ReactComponent as IconSearch } from './assets/search.svg';
import './Icon.css';

const Icon = (props) => {
    let icon = undefined;
    const style = props.align === 'right' ? 'icon--right' : null;
    switch (props.name) {
        case 'add-cart':
            icon = <IconAddCart className={style} />;
            break;
        case 'anchor':
            icon = <IconAnchor className={style} />;
            break;
        case 'check':
            icon = <IconCheck className={style} />;
            break;
        case 'download':
            icon = <IconDownload className={style} />;
            break;
        case 'search':
            icon = <IconSearch className={style} />;
            break;
        default:
            icon = <span />;
            break;
    }
    return icon;
};

export default Icon;