import React, { useState } from 'react';
import { Button, Popover } from 'antd';
import { useNavigate } from 'react-router-dom';
import style from './style.module.scss'
const UserModal = () => {
    const [open, setOpen] = useState(false);
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    const navigate = useNavigate();
    const handleToLogin = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    }
    const handleToActorProfilePage = () => {
        navigate('/actor-profile');
    }
    const content = (
        <>
            <p className={style.profile} onClick={handleToActorProfilePage}>Profile</p>
            <p className={style.logout} onClick={handleToLogin}>Logout</p>
        </>
    )
    return (
        <Popover
            content={content}
            trigger="click"
            open={open}
            placement="bottom"
            onOpenChange={handleOpenChange}
        >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_372_292)">
                        <path d="M12 0C5.383 0 0 5.383 0 12C0 18.617 5.383 24 12 24C18.617 24 24 18.617 24 12C24 5.383 18.617 0 12 0ZM8 21.164V19C8 18.448 8.449 18 9 18H15C15.551 18 16 18.448 16 19V21.164C14.774 21.701 13.422 22 12 22C10.578 22 9.226 21.701 8 21.164ZM18 19.995V19C18 17.346 16.654 16 15 16H9C7.346 16 6 17.346 6 19V19.995C3.573 18.169 2 15.265 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 15.264 20.427 18.169 18 19.995ZM12 6C9.794 6 8 7.794 8 10C8 12.206 9.794 14 12 14C14.206 14 16 12.206 16 10C16 7.794 14.206 6 12 6ZM12 12C10.897 12 10 11.103 10 10C10 8.897 10.897 8 12 8C13.103 8 14 8.897 14 10C14 11.103 13.103 12 12 12Z" fill="#F9F1E4" />
                    </g>
                    <defs>
                        <clipPath id="clip0_372_292">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
        </Popover>
    );
};
export default UserModal;