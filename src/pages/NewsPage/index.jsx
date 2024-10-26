import style from '../NewsPage/style.module.scss';
import 'bootstrap/dist/css/bootstrap.css';
import NewsCard from '../../elements/NewsCard';
import CarouselBoardNews from '../../elements/CarouselBoardNews';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Card, Spin, Alert, ConfigProvider } from 'antd';
import Header from '../../elements/Header';

const NewsPage = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortByLatest, setSortByLatest] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.post('https://localhost:7118/api/News/GetAll', {
                    sortByLatest: sortByLatest,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                setNews(response.data);
            } catch (err) {
                if (err.response) {
                    setError(err.response.data);
                } else if (err.request) {
                    setError("No response received from the server.");
                } else {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [sortByLatest]);

    const handleToggleSort = () => {
        setSortByLatest(prev => !prev);
    };

    if (loading) {
        return <Spin size="large" />; // Використовуємо Spinner з Ant Design
    }
    console.log(news[0]);

    return (
        <div className={`d-flex`}>
            <Header />
            <div className={style.content}>
                <CarouselBoardNews news1={news[1]} news2={news[3]} news3={news[5]}/>
                <div className={style.contentBlock}>
                    <h1 className={style.newsTitle}>News</h1>
                    <ConfigProvider theme={{
                        token: {
                            colorPrimary: '#800020',
                            colorBgBase: '#1f1f1f',
                            colorTextBase: '#ffffff',
                        },
                    }}>

                        <Checkbox
                            checked={sortByLatest}
                            onChange={handleToggleSort}
                            style={{ marginBottom: '16px' }}
                        >
                            Sort by latest
                        </Checkbox>
                    </ConfigProvider>
                    <div className={style.newsGrid}>
                        {news.map((item) => (
                            <Link to={`/news-details/${item.id}`} key={item.id} className={style.link}>
                                <NewsCard
                                    hoverable
                                    picture={item.imageURL}
                                    content={item.description}
                                    title={item.title}
                                >
                                    <p>{item.description}</p>
                                </NewsCard>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
