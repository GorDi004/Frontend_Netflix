import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import Card from '../Card';
import { Link } from 'react-router-dom';

const SortedFilms = ({ films, selectedGenres }) => {
    const [theContent, setTheContent] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const genreArray = selectedGenres.length > 0 ? selectedGenres : [];

            // Спроба отримати кешовані дані з localStorage
            const cacheKey = `${films}_${selectedGenres.join('_')}`;
            const cachedData = localStorage.getItem(cacheKey);

            if (cachedData) {
                // Якщо дані є в кеші, встановлюємо їх в стан
                setTheContent(JSON.parse(cachedData));
                console.log("Loaded from cache:", cacheKey);
                return;
            }

            try {
                // Якщо немає кешу, робимо запит до API
                const rawResponse = await fetch(`https://localhost:7118/api/${films}/GetAll?take=40`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ genre: genreArray })
                });

                const text = await rawResponse.text();
                const data = JSON.parse(text);
                const fetchedFilms = films === 'Film' || films === 'Series' ? data.content : data;

                const filmsWithGenres = await Promise.all(
                    fetchedFilms.map(async (film) => {
                        const genreResponse = await fetch(`https://localhost:7118/api/${films}/${film.id}`);
                        const genreData = await genreResponse.json();
                        return { ...film, genres: genreData.genres };
                    })
                );

                const filteredFilms = selectedGenres.length > 0
                    ? filmsWithGenres.filter(film =>
                        film.genres.some(genre => selectedGenres.includes(genre))
                    )
                    : filmsWithGenres;

                // Зберігаємо отримані дані в кеш
                localStorage.setItem(cacheKey, JSON.stringify(filteredFilms));
                console.log("Saved to cache:", cacheKey);

                // Оновлюємо стан компоненту
                setTheContent(filteredFilms);

            } catch (error) {
                console.error("Error fetching or parsing data:", error);
            }

            console.log("Selected Genres in sortedFilms: ", selectedGenres);
        };

        fetchData();
    }, [films, selectedGenres]);

    return (
        <div className={style.container}>
            {theContent.map((item) => (
                <Link to={`/${films}/${item.id}`} key={item.id} className={style.link}>
                    <Card films={films} title={item.name} picture={item.pictureUrl} year={item.releaseYear} rating={item.rating} />
                </Link>
            ))}
        </div>
    );
};

export default SortedFilms;
