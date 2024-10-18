import React from 'react'
import style from './style.module.scss'
import { Tabs } from 'antd';
import BurgerMenu from '../../elements/BurgerMenu';

const CastingPage = () => {

    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: <p className={style.tabName}>Casting Calls</p>,
            children: <>
                <h1 className={style.tabContentName}>CASTING CALLS AND AUDITIONS</h1>
                <p className={style.tabContent}>We invite you to the world of posibilities on our casting website!
                    Here your talent will finds its true exppression and your dreams will come true.
                    Whether you're an actor, model, singer or dancer, we have a variety of exciting projects waiting for you.
                    Register today, take an audition and became a star of the future!
                    Your path to success starts here.
                </p>
            </>,
        },
        {
            key: '2',
            label: <p className={style.tabName}>Casting Directors</p>,
            children: <>
                <h1 className={style.tabContentName}>CASTING DIRECTORS AND AUDITIONS</h1>
                <p className={style.tabContent}>We invite you to the world of posibilities on our casting website!
                    Here your talent will finds its true exppression and your dreams will come true.
                    Whether you're an actor, model, singer or dancer, we have a variety of exciting projects waiting for you.
                    Register today, take an audition and became a star of the future!
                    Your path to success starts here.
                </p>
            </>,
        },
    ];

    return (
        <>
            <BurgerMenu />

            <Tabs defaultActiveKey="1" items={items} className={style.tabs} onChange={onChange} />
            <div className={style.whiteBlock}>
                <p className={style.textBlock1}>Search results for <b>All Locations</b></p>
                <div className={style.card}>
                    <div className={style.title}>
                        <p className={style.cardTitle}>Talents Who Speak Dutch For A Popular Meal Prep Brand!</p>
                        <button type="submit" className={style.btnSubmit}>SUBMIT</button>
                    </div>
                    <div className={style.columns}>
                        <div className={style.firstColumn}>
                            <p className={style.subTitle}>Dutch Speakers For A Popular Meal Prep Brand</p>
                            <p className={style.commercial}>Internet Commercial</p>
                            <p className={style.label}>Submission Due Date</p>
                            <p className={style.info} style={{marginLeft:'0'}}>12-31-2024</p>
                        </div>
                        <div className={style.secondColumn}>
                            <div className={style.row}>
                                <p className={style.label}>Gender:</p>
                                <p className={style.info}>Man, Woman, Non-Binary Person, Trans Man, Trans Women</p>
                            </div>
                            <div className={style.row}>
                                <p className={style.label}>Location:</p>
                                <p className={style.info}>Multiple Locations</p>
                            </div>
                            <div className={style.row}>
                                <p className={style.label}>Age:</p>
                                <p className={style.info}>18-50</p>
                            </div>
                        </div>
                        <div className={style.thirdColumn}>
                            <div className={style.row}>
                                <p className={style.label}>Payment:</p>
                                <p className={style.info}>$200 flat</p>
                            </div>
                            <div className={style.row}>
                                <p className={style.label}>Union:</p>
                                <p className={style.info}>Non Union</p>
                            </div>
                            <div className={style.row}>
                                <p className={style.label}>Role Type:</p>
                                <p className={style.info}>Principal</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.title}>
                        <p className={style.cardTitle}>Talents Who Speak Dutch For A Popular Meal Prep Brand!</p>
                        <button type="submit" className={style.btnSubmit}>SUBMIT</button>
                    </div>
                    <div className={style.columns}>
                        <div className={style.firstColumn}>
                            <p className={style.subTitle}>Dutch Speakers For A Popular Meal Prep Brand</p>
                            <p className={style.commercial}>Internet Commercial</p>
                            <p className={style.label}>Submission Due Date</p>
                            <p className={style.info} style={{marginLeft:'0'}}>12-31-2024</p>
                        </div>
                        <div className={style.secondColumn}>
                            <div className={style.row}>
                                <p className={style.label}>Gender:</p>
                                <p className={style.info}>Man, Woman, Non-Binary Person, Trans Man, Trans Women</p>
                            </div>
                            <div className={style.row}>
                                <p className={style.label}>Location:</p>
                                <p className={style.info}>Multiple Locations</p>
                            </div>
                            <div className={style.row}>
                                <p className={style.label}>Age:</p>
                                <p className={style.info}>18-50</p>
                            </div>
                        </div>
                        <div className={style.thirdColumn}>
                            <div className={style.row}>
                                <p className={style.label}>Payment:</p>
                                <p className={style.info}>$200 flat</p>
                            </div>
                            <div className={style.row}>
                                <p className={style.label}>Union:</p>
                                <p className={style.info}>Non Union</p>
                            </div>
                            <div className={style.row}>
                                <p className={style.label}>Role Type:</p>
                                <p className={style.info}>Principal</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.title}>
                        <p className={style.cardTitle}>Talents Who Speak Dutch For A Popular Meal Prep Brand!</p>
                        <button type="submit" className={style.btnSubmit}>SUBMIT</button>
                    </div>
                    <div className={style.columns}>
                        <div className={style.firstColumn}>
                            <p className={style.subTitle}>Dutch Speakers For A Popular Meal Prep Brand</p>
                            <p className={style.commercial}>Internet Commercial</p>
                            <p className={style.label}>Submission Due Date</p>
                            <p className={style.info} style={{marginLeft:'0'}}>12-31-2024</p>
                        </div>
                        <div className={style.secondColumn}>
                            <div className={style.row}>
                                <p className={style.label}>Gender:</p>
                                <p className={style.info}>Man, Woman, Non-Binary Person, Trans Man, Trans Women</p>
                            </div>
                            <div className={style.row}>
                                <p className={style.label}>Location:</p>
                                <p className={style.info}>Multiple Locations</p>
                            </div>
                            <div className={style.row}>
                                <p className={style.label}>Age:</p>
                                <p className={style.info}>18-50</p>
                            </div>
                        </div>
                        <div className={style.thirdColumn}>
                            <div className={style.row}>
                                <p className={style.label}>Payment:</p>
                                <p className={style.info}>$200 flat</p>
                            </div>
                            <div className={style.row}>
                                <p className={style.label}>Union:</p>
                                <p className={style.info}>Non Union</p>
                            </div>
                            <div className={style.row}>
                                <p className={style.label}>Role Type:</p>
                                <p className={style.info}>Principal</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.title}>
                        <p className={style.cardTitle}>Talents Who Speak Dutch For A Popular Meal Prep Brand!</p>
                        <button type="submit" className={style.btnSubmit}>SUBMIT</button>
                    </div>
                    <div className={style.columns}>
                        <div className={style.firstColumn}>
                            <p className={style.subTitle}>Dutch Speakers For A Popular Meal Prep Brand</p>
                            <p className={style.commercial}>Internet Commercial</p>
                            <p className={style.label}>Submission Due Date</p>
                            <p className={style.info} style={{marginLeft:'0'}}>12-31-2024</p>
                        </div>
                        <div className={style.secondColumn}>
                            <div className={style.row}>
                                <p className={style.label}>Gender:</p>
                                <p className={style.info}>Man, Woman, Non-Binary Person, Trans Man, Trans Women</p>
                            </div>
                            <div className={style.row}>
                                <p className={style.label}>Location:</p>
                                <p className={style.info}>Multiple Locations</p>
                            </div>
                            <div className={style.row}>
                                <p className={style.label}>Age:</p>
                                <p className={style.info}>18-50</p>
                            </div>
                        </div>
                        <div className={style.thirdColumn}>
                            <div className={style.row}>
                                <p className={style.label}>Payment:</p>
                                <p className={style.info}>$200 flat</p>
                            </div>
                            <div className={style.row}>
                                <p className={style.label}>Union:</p>
                                <p className={style.info}>Non Union</p>
                            </div>
                            <div className={style.row}>
                                <p className={style.label}>Role Type:</p>
                                <p className={style.info}>Principal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CastingPage;