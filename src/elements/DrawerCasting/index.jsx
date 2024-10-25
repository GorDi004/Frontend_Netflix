import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { useNavigate } from 'react-router-dom';
import style from './style.module.scss';
import EditCastingModal from '../EditCastingModal'; // Імпорт модалки
import DeleteCastingModal from '../DeleteCastingModal';

const DrawerCasting = ({ castingId, tabCasting = '1' }) => {
    const [open, setOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const handleCreateActorProfilePage = () => {
        navigate(`/create-actor-profile/${castingId}`);
    };

    const handleGetStartedPage = () => {
        navigate('/get-started');
    };

    const handleEditCastingPage = () => {
        navigate(`/edit-casting/${castingId}`);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            {tabCasting === '1' ? (
                <button type="submit" onClick={showDrawer} className={style.btnSubmit}>SUBMIT</button>
            ) : (
                <div className={style.buttons}>
                    <button type="button" onClick={handleEditCastingPage} className={style.btnSubmit}>EDIT</button>
                    <button type="button" onClick={showModal} className={style.btnSubmit}>DELETE</button>
                </div>
            )}
            <DeleteCastingModal
                isVisible={isModalVisible}
                onCancel={handleCancel}
                castingId={castingId}
            />

            <Drawer className={style.drawer} title={<img className={style.logo} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />} onClose={onClose} open={open}>
                <h1 className={style.tabContentName}>Ready to submit to this role?</h1>
                <p>Log in or sign up today and get access to thousands of high-quality <b>acting jobs</b>.</p>
                <p className={style.question}>Ready to get started as an Actor?</p>
                <Button className={style.buttonYes} onClick={handleCreateActorProfilePage}>YES</Button>
                <p className={style.question}>Ready to get started as a Director?</p>
                <Button className={style.buttonYes} onClick={handleGetStartedPage}>YES</Button>
            </Drawer>
        </>
    );
};

export default DrawerCasting;
