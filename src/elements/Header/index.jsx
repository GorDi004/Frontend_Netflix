import React from 'react'
import style from './style.module.scss'
import BurgerMenu from '../BurgerMenu';
import SearchBar from '../SearchBar';

const Header = () => {
    return (
        <div className={style.header}>
            <BurgerMenu />
            <SearchBar className={style.searchBar} />
        </div>
    );
}

export default Header;