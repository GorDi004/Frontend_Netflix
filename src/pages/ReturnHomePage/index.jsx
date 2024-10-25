import React from 'react'
import style from './style.module.scss'
import { useNavigate } from 'react-router-dom';

const ReturnHomePage = () => {
    const navigate = useNavigate();

    return (
        <div className={style.container}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" className={style.logo}/>
                <p className={style.text}>Your request has been submitted for approval and representative<br/>will contact you shortly</p>
                <button className={style.button} onClick={() => navigate('/home')}>Return to Homepage</button>
        </div>
    );
}

export default ReturnHomePage;