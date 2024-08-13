import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Використовуємо useNavigate для навігації
import style from './style.module.scss';

const BuyButtonThx = ({devices}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [timer, setTimer] = useState(2); // Таймер на 2 секунди
    const navigate = useNavigate();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        let countdown;
        if (isModalOpen && timer > 0) {
            countdown = setTimeout(() => setTimer(timer - 1), 1000);
        } else if (timer === 0) {
            navigate('/device', { state: { devices } }); // Перенаправлення на ChooseDevicePage
        }
        return () => clearTimeout(countdown); // Очищення таймера
    }, [isModalOpen, timer, navigate]);

    return (
        <>
            <button
                type="button"
                className={style.button}
                onClick={toggleModal}
            >
                Buy
            </button>

            {isModalOpen && (
                <div className={style.modalOverlay}>
                    <div className={style.modalContent}>
                        <h2 className={style.title}>THANK YOU!</h2>
                        <p className={style.text}>We sent you confirmation message.<br />Check your email.</p>

                        {/* <p>Redirecting in {timer} seconds...</p> */}
                    </div>
                </div>
            )}
        </>
    );
}

export default BuyButtonThx;
