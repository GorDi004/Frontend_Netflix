import React from 'react';
import { ConfigProvider, Tabs } from 'antd';
import style from './style.module.scss';

const CastingTabs = ({ activeTab, setActiveTab }) => {
    const items = [
        {
            key: '1',
            label: <p className={style.tabName}>Casting Calls</p>,
            children: (
                <>
                    <h1 className={style.tabContentName}>CASTING CALLS AND AUDITIONS</h1>
                    <p className={style.tabContent}>
                        We invite you to the world of possibilities on our casting website!
                        Here your talent will find its true expression and your dreams will come true.
                        Whether you're an actor, model, singer, or dancer, we have a variety of exciting projects waiting for you.
                        Register today, take an audition, and become a star of the future!
                        Your path to success starts here.
                    </p>
                </>
            ),
        },
        {
            key: '2',
            label: <p className={style.tabName}>Castings Directors</p>,
            children: (
                <>
                    <h1 className={style.tabContentName}>CASTING DIRECTORS AND AUDITIONS</h1>
                    <p className={style.tabContent}>
                        We invite you to the world of possibilities on our casting website!
                        Here your talent will find its true expression and your dreams will come true.
                        Whether you're an actor, model, singer, or dancer, we have a variety of exciting projects waiting for you.
                        Register today, take an audition, and become a star of the future!
                        Your path to success starts here.
                    </p>
                </>

            ),
        },

    ];

    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: '#800020',
                colorBgBase: '#1f1f1f',
            },
        }}>
            <Tabs activeKey={activeTab} onChange={setActiveTab} className={style.tabs}>
                {items.map(item => (
                    <Tabs.TabPane key={item.key} tab={item.label}>
                        {item.children}
                    </Tabs.TabPane>
                ))}
            </Tabs>
        </ConfigProvider>
    );
};

export default CastingTabs;
