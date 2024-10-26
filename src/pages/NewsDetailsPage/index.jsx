import style from './style.module.scss';
import Header from '../../elements/Header';
import TopNewsItem from '../../elements/TopNewsItem';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

const NewsDetailsPage = () => {
    const { id } = useParams();
    const [newsItem, setNewsItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [responseData, setResponseData] = useState(null);
    const [error2, setError2] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNewsDetails = async () => {
            try {
                const response = await axios.get(`https://localhost:7118/api/News/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setNewsItem(response.data);
            } catch (err) {
                console.error("Request failed:", err);
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

        fetchNewsDetails();
    }, [id]);

    useEffect(() => {
        const postData = async () => {
            try {
                const response = await axios.post('https://localhost:7118/api/News/GetAllShortDto', {}, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setResponseData(response.data);
            } catch (err) {
                console.error("Request failed:", err);
                if (err.response) {
                    setError2(err.response.data);
                } else if (err.request) {
                    setError2("No response received from the server.");
                } else {
                    setError2(err.message);
                }
            }
        };

        postData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const formatDate = (isoDateString) => {
        const date = new Date(isoDateString);

        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${month} ${day}, ${year}`;
    };

    const handleBack = () => {
        navigate('/news'); // Перенаправлення на NewsPage
    };

    return (
        <>
            <div className={`d-flex`}>
                <div>
                    <Header />
                </div>
                <div className={` ${style.content}`}>
                    <IoIosArrowDropleftCircle
                        className={style.arrowBack}
                        onClick={handleBack}
                    />
                    <div className={style.container}>
                        <div className={style.newsDetails}>
                            <h1 className={style.title}>{newsItem.title}</h1>
                            <div className={style.publishingInfo}>
                                <p className={style.author}>By {newsItem.author}</p>
                                <p className={style.dateOfPublishing}>Published on {formatDate(newsItem.publishedDate)}</p>
                            </div>
                            <img src={newsItem.imageURL} alt="image" className={style.img} />
                            <div className={style.content}>{newsItem.articleText}</div>
                        </div>

                        <div className={style.topNewsContainer}>
                            <h2>Top News</h2>
                            <div className={style.topNews}>
                                {responseData && responseData.map((item) => (
                                    <TopNewsItem key={item.id} title={item.title} author={item.author} publishedDate={formatDate(item.publishedDate)} imageURL={item.imageURL} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsDetailsPage;








