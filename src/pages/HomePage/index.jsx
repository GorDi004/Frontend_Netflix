import React, { useState } from 'react'
import style from './style.module.scss'
import 'bootstrap/dist/css/bootstrap.css';
import CarouselBoard from '../../elements/CarouselBoard';
import Card from '../../elements/Card';
import SortedFilms from '../../elements/SortedFilms';
import GenreTabs from '../../elements/GenreTabs';
import CarouselGenres from '../../elements/CarouselGenres';
import Header from '../../elements/Header';
import MoviePage from '../MoviePage';



const HomePage = () => {

    return (
        <>
            <div className={` d-flex`}>
                <div>
                    <Header />
                </div>
                <div className={` ${style.content}`}>
                    <CarouselBoard />
                    <GenreTabs />
                    {/* <CarouselGenres/> */}
                    {/* <SortedFilms /> */}
                    {/* <MoviePage/> */}
                </div>
            </div>
        </>
    );
}

export default HomePage;