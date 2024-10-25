import React from 'react'
import style from './style.module.scss'
import { useNavigate } from 'react-router-dom';

const GetSartedPage = () => {
    const navigate = useNavigate();
    const handleDirectorProfilePage = () => {
        navigate('/director-profile');
    }
    return (
        <div class="container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" className={style.logo} />
            <h1 className={style.title}>We're excited to meet you!</h1>
            <p className={style.text}>To request a professional casting director or talent representative account,<br />
                please use this form.</p>
            <p className={style.text}>If you're an actor/performer click here.</p>
            <div className={style.buttonContainer} >
                <button onClick={handleDirectorProfilePage} className={style.button}>Get Started</button>
            </div>
        </div>
    );
}

export default GetSartedPage;