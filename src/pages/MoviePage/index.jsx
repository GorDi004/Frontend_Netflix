import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../elements/Header';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


const MoviePage = () => {
    const { type, id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [minutes, setMinutes] = useState(0);
    const navigate = useNavigate();

    const convertToMinutes = (time) => {
        if (!time || typeof time !== "string") {
            return 0;
        }
        const timeParts = time.split(":").map(Number);
        let totalMinutes = 0;

        if (timeParts.length === 3) {
            const [hours, mins] = timeParts;
            totalMinutes = (hours * 60) + mins;
        } else if (timeParts.length === 2) {
            const [mins] = timeParts;
            totalMinutes = mins;
        }
        return totalMinutes;
    };

    console.log("FILMS: ", type)
    console.log("UUUURRRRLLLL:", `https://localhost:7118/api/${type}/${id}`)

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await fetch(`https://localhost:7118/api/${type}/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch movie data');
                }
                const data = await response.json();

                // Адаптація для обробки різних форматів
                let movieData;
                if (data.type === 'film') {
                    movieData = data.film;  // Використовуємо film з першого JSON
                } else {
                    movieData = data; // Для другого JSON (film, series)
                }

                setMovie(movieData);
                setMinutes(convertToMinutes(movieData.duration)); // виклик функції для перетворення тривалості
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchMovieData();
    }, [id, type]);
    if (loading) {
        return <Spin indicator={<LoadingOutlined spin />} size="large" />;
    }

    if (error) {
        return <p>{error}</p>;
    }


    const formatReleaseDate = (releaseDate) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(releaseDate).toLocaleDateString('en-US', options);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Плавна прокрутка
        }
    };

    const handleBack = () => {
        navigate('/home'); // Перенаправлення на HomePage
    };

    return (
        <>
            <Header />
            <div className={style.backAndTitle}>
                <svg className={style.arrowBack}
                    onClick={handleBack} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.6667 18.3332H15L20.4833 12.8499C20.6395 12.6949 20.7635 12.5106 20.8482 12.3075C20.9328 12.1044 20.9763 11.8865 20.9763 11.6665C20.9763 11.4465 20.9328 11.2287 20.8482 11.0256C20.7635 10.8225 20.6395 10.6381 20.4833 10.4832C20.1711 10.1728 19.7486 9.99854 19.3083 9.99854C18.868 9.99854 18.4456 10.1728 18.1333 10.4832L10.9833 17.6499C10.3574 18.2721 10.0037 19.1172 10 19.9999C10.0081 20.8767 10.3614 21.715 10.9833 22.3332L18.1333 29.4999C18.2887 29.6542 18.473 29.7763 18.6756 29.8594C18.8782 29.9425 19.0952 29.9849 19.3142 29.9841C19.5332 29.9833 19.7499 29.9394 19.9519 29.8549C20.154 29.7704 20.3374 29.6469 20.4917 29.4915C20.646 29.3361 20.7682 29.1519 20.8512 28.9492C20.9343 28.7466 20.9767 28.5296 20.9759 28.3106C20.9752 28.0916 20.9313 27.8749 20.8467 27.6729C20.7622 27.4709 20.6387 27.2875 20.4833 27.1332L15 21.6665H31.6667C32.1087 21.6665 32.5326 21.4909 32.8452 21.1784C33.1577 20.8658 33.3333 20.4419 33.3333 19.9999C33.3333 19.5578 33.1577 19.1339 32.8452 18.8213C32.5326 18.5088 32.1087 18.3332 31.6667 18.3332Z" fill="#F9F1E4" />
                </svg>
                <h1 className={style.title}>{movie.name}</h1>
            </div>
            <div className={style.container}>
                <div className={style.box}>
                    <img src={movie.pictureUrl} alt="image" className={style.img} />
                    <div className={style.content}>
                        <div className={style.blocks}>
                            <div className={style.firstColon}>
                                <div className={style.infoBlock}>
                                    <h3 className={style.nameOfBlock}>Rating:</h3>
                                    <p className={style.textOfBlock}>{movie.rating}</p>
                                </div>
                                <div className={style.infoBlock}>
                                    <h3 className={style.nameOfBlock}>Release date:</h3>
                                    <p className={style.textOfBlock}>{formatReleaseDate(movie.releaseDate)}</p>
                                </div>
                                <div className={style.infoBlock}>
                                    <h3 className={style.nameOfBlock}>Voiceover:</h3>
                                    <p className={style.textOfBlock}>Netflix</p>
                                </div>
                                <div className={style.infoBlock}>
                                    <h3 className={style.nameOfBlock}>Genres:</h3>
                                    <p className={style.textOfBlock}>{movie.genres.join(', ')}</p>
                                </div>
                                <div className={style.infoBlock}>
                                    <h3 className={style.nameOfBlock}>Country:</h3>
                                    <p className={style.textOfBlock}>{movie.country}</p>
                                </div>
                            </div>
                            <div className={style.secondColon}>
                                <div className={style.infoBlock}>
                                    <h3 className={style.nameOfBlock}>Duration:</h3>
                                    <p className={style.textOfBlock}>{minutes} minutes</p>
                                </div>
                                <div className={style.infoBlock}>
                                    <h3 className={style.nameOfBlock}>Director:</h3>
                                    <p className={style.textOfBlock}>{movie.director}</p>
                                </div>
                                <div className={style.infoBlock}>
                                    <h3 className={style.nameOfBlock}>Production companies:</h3>
                                    <p className={style.textOfBlock}>{movie.productionCompanies}</p>
                                </div>
                                <div className={style.infoBlock}>
                                    <h3 className={style.nameOfBlock}>Actors:</h3>
                                    <p className={style.textOfBlock}>
                                        {movie.actors.join(', ')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h3 className={style.description}>
                            {movie.director} lives in New York with her sister and her lover,
                            attends auctions all the time, and trains as an artist for a prestigious company.
                            Her only goal is to please Claire Dupont and get her recommendation,
                            which means a lot in the art world. She has nothing but failures until an influential
                            company executive offers her a job as her assistant and arranges a working trip to
                            London. She flies first class on the plane, where she meets the attractive and
                            wealthy William. {movie.director} lies to William about being a company director.
                            <br />In London, they begin to cross paths, and {movie.director} realises that her legend is starting
                            to come apart at the seams. She tries to impress the boyfriend and maintain her
                            complex role, so she continues to constantly lie to him and his mother,
                            whom she meets in London. The key is to keep the secret and live up to her
                            sudden promotion until it's real.
                        </h3>
                    </div>
                </div>
                <div className={style.buttons} onClick={() => scrollToSection('targetSection')}>
                    <button className={style.buttonWatch}>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 6.63397C14.1667 7.01887 14.1667 7.98112 13.5 8.36602L2.25 14.8612C1.58333 15.2461 0.749999 14.765 0.749999 13.9952L0.75 1.00481C0.75 0.23501 1.58333 -0.246117 2.25 0.138783L13.5 6.63397Z" fill="#262425" />
                        </svg>
                        <p>Watch</p>
                    </button>
                    <button className={style.buttonAddList}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.125 5.625H9.375V1.875C9.375 1.37772 9.17746 0.900805 8.82583 0.549175C8.47419 0.197544 7.99728 0 7.5 0C7.00272 0 6.52581 0.197544 6.17417 0.549175C5.82254 0.900805 5.625 1.37772 5.625 1.875V5.625H1.875C1.37772 5.625 0.900805 5.82254 0.549175 6.17417C0.197544 6.52581 0 7.00272 0 7.5C0 7.99728 0.197544 8.47419 0.549175 8.82583C0.900805 9.17746 1.37772 9.375 1.875 9.375H5.625V13.125C5.625 13.6223 5.82254 14.0992 6.17417 14.4508C6.52581 14.8025 7.00272 15 7.5 15C7.99728 15 8.47419 14.8025 8.82583 14.4508C9.17746 14.0992 9.375 13.6223 9.375 13.125V9.375H13.125C13.6223 9.375 14.0992 9.17746 14.4508 8.82583C14.8025 8.47419 15 7.99728 15 7.5C15 7.00272 14.8025 6.52581 14.4508 6.17417C14.0992 5.82254 13.6223 5.625 13.125 5.625Z" fill="#F9F1E4" />
                        </svg>
                        <p>Add List</p>
                    </button>
                </div>
            </div>
            <video id="targetSection" className={style.videoBlock} controls>
                <source src={movie.videoUrl} type="video/mp4" />
            </video>
        </>
    );
}

export default MoviePage;