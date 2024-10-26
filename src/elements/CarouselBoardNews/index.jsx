import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import style from './style.module.scss'

const CarouselBoard = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const ids = [
        'e6634b8c-149b-45be-a266-475309fe3762',
        '1a1ba913-411e-4822-bc97-1f860a701c48',
        '8fa27a5c-8694-44a1-a896-07cbafb23c3b',
      ];

      try {
        const newsPromises = ids.map(id =>
          fetch(`https://localhost:7118/api/News/${id}`).then(response => response.json())
        );

        const newsData = await Promise.all(newsPromises);
        setNews(newsData);

      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <Carousel>
      {news.map((item, index) =>
        <div key={index}>
          <div style={{ backgroundImage: `url(${item.imageURL})` }} className={style.contentArea}>
            <h1 className={style.newsTitle}>{item.title}</h1>
            <p className={style.newsContext}>{item.description}</p>
          </div>
        </div>
      )}
    </Carousel>
  );
};

export default CarouselBoard;