import React, { useEffect, useState } from 'react';
import style from './style.module.scss';

const CarouselGenres = ({ onGenreChange }) => {
    const [genres, setGenres] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 10; // Кількість жанрів, що показуються одночасно
    const [selectedGenres, setSelectedGenres] = useState([]);

    const nextSlide = () => {
        console.log("Current Index (next):", currentIndex);
        if (currentIndex < genres.length - itemsToShow) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
            console.log("Reached the end of the list.");
        }
    };

    const prevSlide = () => {
        console.log("Current Index (prev):", currentIndex);
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
            console.log("Reached the beginning of the list.");
        }
    };


    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await fetch(`https://localhost:7118/api/Genre/GetAll`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ /* дані для POST, якщо потрібні */ }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Response from API:', data);

                // Перевірка, чи є data масивом
                if (Array.isArray(data.content)) {
                    setGenres(data.content);
                } else {
                    console.error('Expected an array but got:', data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchGenres();
    }, []);

    console.log("Genres:", genres);
    const handleSelectGenre = (genreName) => {
        if (selectedGenres.includes(genreName)) {
            // Якщо жанр вже вибрано, видаляємо його
            setSelectedGenres(selectedGenres.filter((g) => g !== genreName));
        } else {
            // Інакше додаємо жанр до вибраних
            setSelectedGenres([...selectedGenres, genreName]);
        }
    };

    console.log("Selected Genres in Carousel:", selectedGenres);

    const toggleGenre = (genre) => {
        setSelectedGenres((prev) => {
            const newGenres = prev.includes(genre)
                ? prev.filter((g) => g !== genre)
                : [...prev, genre];
            onGenreChange(newGenres); // Передаємо обрані жанри в батьківський компонент
            return newGenres;
        });
    };

    return (
        <div className={style.carouselContainer}>
            <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={style.arrow}
            >
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_76_1584)">
                        <path d="M13.4997 0.937379C13.4997 1.06056 13.4705 1.18252 13.4139 1.29631C13.3573 1.41009 13.2743 1.51346 13.1697 1.60051L7.41646 6.39488C7.2423 6.53998 7.10414 6.71224 7.00988 6.90184C6.91562 7.09144 6.86711 7.29465 6.86711 7.49988C6.86711 7.7051 6.91562 7.90832 7.00988 8.09792C7.10414 8.28752 7.2423 8.45978 7.41646 8.60488L13.163 13.3936C13.3679 13.5704 13.4813 13.8073 13.4787 14.0531C13.4762 14.2989 13.3578 14.534 13.1493 14.7078C12.9407 14.8817 12.6585 14.9803 12.3635 14.9824C12.0686 14.9845 11.7844 14.89 11.5722 14.7193L5.82571 9.9305C5.05308 9.28545 4.61914 8.41128 4.61914 7.49988C4.61914 6.58848 5.05308 5.71431 5.82571 5.06925L11.5797 0.274254C11.7371 0.143271 11.9375 0.0541026 12.1557 0.0180174C12.3739 -0.0180677 12.6 0.000549921 12.8054 0.0715157C13.0109 0.142482 13.1865 0.262615 13.3101 0.41673C13.4337 0.570844 13.4997 0.752026 13.4997 0.937379Z" fill="#F9F1E4" />
                    </g>
                    <defs>
                        <clipPath id="clip0_76_1584">
                            <rect width="15" height="18" fill="white" transform="translate(0 15) rotate(-90)" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <div className={style.carousel}>
                {Array.isArray(genres) ? (
                    genres.slice(currentIndex, currentIndex + itemsToShow).map((genre) => (
                        <div
                            key={genre.id}
                            className={`${style.carouselItem} ${selectedGenres.includes(genre.genreName) ? style.selected : ''}`} // Додамо клас, якщо жанр вибрано
                            onClick={() => toggleGenre(genre.genreName)} // Обробка вибору жанру
                        >
                            <p className={style.carouselItemTitle}>{genre.genreName}</p>
                        </div>
                    ))
                ) : (
                    <p>No genres available</p>
                )}
            </div>
            <button
                onClick={nextSlide}
                disabled={currentIndex >= genres.length - itemsToShow}
                className={style.arrow}
            >
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.50029 14.0626C4.50032 13.9394 4.52948 13.8175 4.5861 13.7037C4.64273 13.5899 4.7257 13.4865 4.83029 13.3995L10.5835 8.60512C10.7577 8.46002 10.8959 8.28776 10.9901 8.09816C11.0844 7.90856 11.1329 7.70535 11.1329 7.50012C11.1329 7.2949 11.0844 7.09168 10.9901 6.90208C10.8959 6.71248 10.7577 6.54022 10.5835 6.39512L4.83704 1.60637C4.63211 1.42956 4.51872 1.19274 4.52128 0.946931C4.52384 0.701122 4.64216 0.465985 4.85074 0.292165C5.05933 0.118345 5.34149 0.0197492 5.63646 0.0176132C5.93144 0.0154772 6.21561 0.109972 6.42779 0.280745L12.1743 5.0695C12.9469 5.71455 13.3809 6.58872 13.3809 7.50012C13.3809 8.41152 12.9469 9.28569 12.1743 9.93075L6.42029 14.7257C6.26291 14.8567 6.06248 14.9459 5.84431 14.982C5.62614 15.0181 5.40003 14.9994 5.19456 14.9285C4.98908 14.8575 4.81346 14.7374 4.68989 14.5833C4.56632 14.4292 4.50034 14.248 4.50029 14.0626Z" fill="#F9F1E4" />
                </svg>
            </button>
        </div>
    );
};

export default CarouselGenres;
