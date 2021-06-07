import React from 'react';

import './styles/style.scss';
import iconMenu from './images/iconMenu.svg';

const Header = () => {
    return ( 
        <header>
            <h1 id="titleMerqueo">Merqueo Test</h1>
            <img src={iconMenu} alt="icon Menu" />
        </header>
     );
}
 
export default Header;