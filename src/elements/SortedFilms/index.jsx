import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import Card from '../Card';
import { Link } from 'react-router-dom';

const SortedFilms = ({ films, selectedGenres }) => {
    const [theContent, setTheContent] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const genreArray = selectedGenres.length > 0 ? selectedGenres : [];

            try {
                const rawResponse = await fetch(`https://localhost:7118/api/${films}/GetAll?take=10`, {
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
                        console.log("URL id: ", `https://localhost:7118/api/${films}/${film.id}`);
                        return { ...film, genres: genreData.genres };

                    })
                );

                const filteredFilms = selectedGenres.length > 0
                    ? filmsWithGenres.filter(film =>
                        film.genres.some(genre => selectedGenres.includes(genre))
                    )
                    : filmsWithGenres;

                setTheContent(filteredFilms);

            } catch (error) {
                console.error("Error fetching or parsing data:", error);
            }

            console.log("Selected Genres in sortedFilms: ", selectedGenres);
        };

        fetchData();
    }, [films, selectedGenres]);

    console.log("Films: ", films);
    console.log("Content2: ", theContent);
    console.log("URL film: ", `https://localhost:7118/api/${films}/GetAll?take=40`)

    return (
        <div className={style.container}>
            {theContent.map((item) => (
                <Link to={`/${films}/${item.id}`} key={item.id} className={style.link}> {/* Додайте Link */}
                    <Card films={films} title={item.name} picture={item.pictureUrl} year={item.releaseYear} rating={item.rating} />
                </Link>
            ))}
        </div>
    );
};

export default SortedFilms;
