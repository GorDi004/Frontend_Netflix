import React, { useState } from 'react';
import style from './style.module.scss';
import { IoIosClose } from "react-icons/io";
import BuyButtonThx from '../BuyButtonThx';

const BuyButton = ({ price, subscription, devices }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

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
                        <h2 className={style.title}>Make an order</h2>
                        <div className={style.stringData}>
                            <p className={style.dataTitle}>User name:</p>
                            <p className={style.data}>Kond_ve</p>
                        </div>
                        <div className={style.stringData}>
                            <p className={style.dataTitle}>Email:</p>
                            <p className={style.data}>Kond_ve68@gmail.com</p>
                        </div>
                        <div className={style.stringData}>
                            <p className={style.dataTitle}>Subscription:</p>
                            <p className={style.data}>{subscription}</p>
                        </div>
                        <div className={style.stringData}>
                            <p className={style.dataTitle}>Card number:</p>
                            <p className={style.data}>4563 6784 2407 4594</p>
                        </div>

                        <div className={style.space}>
                            <div className={style.betweenString}>
                                <p className={style.betweenTitle}>Total amount per position</p>
                                <p className={style.betweenData}>{price}</p>
                            </div>
                            <div className={style.betweenString}>
                                <p className={style.betweenTitle}>Discount for the position</p>
                                <p className={style.betweenData}>0</p>
                            </div>
                            <hr className={style.line} />
                            <div className={style.betweenString}>
                                <p className={style.betweenTitleSpecial}>Total</p>
                                <p className={style.betweenDataSpecial}>{price}</p>
                            </div>

                        </div>
                        <button onClick={toggleModal} className={style.closeButton}><IoIosClose className={style.closeMark} /></button>
                        <BuyButtonThx devices={devices} />
                    </div>
                </div>
            )}
        </>
    );
}

export default BuyButton;
