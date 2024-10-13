import React, { useState } from 'react'
import style from './style.module.scss'
import 'bootstrap/dist/css/bootstrap.css';
import BurgerMenu from '../../elements/BurgerMenu';
import CarouselBoard from '../../elements/Carousel';
import SearchBar from '../../elements/SearchBar';



const HomePage = () => {




    return (
        <>
            <div className={` d-flex`}>
                <div>
                    <BurgerMenu />
                    <SearchBar className={style.searchBar} />
                </div>
                <div className={` ${style.content}`}>
                    <CarouselBoard />
                </div>
            </div>
        </>
    );
}

export default HomePage;