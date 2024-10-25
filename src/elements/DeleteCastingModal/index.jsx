import React from 'react';
import { Modal, Button, message } from 'antd';
import axios from 'axios';

const DeleteCastingModal = ({ isVisible, onCancel, castingId }) => {
    console.log(castingId);
    const handleDeleteCasting = async () => {
        const token = localStorage.getItem('authToken');
        try {
            const response = await axios.delete(`https://localhost:7118/api/CastingCalls/Remove/${castingId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                });

            if (response.status === 200) {
                message.success('Casting deleted successfully');
                // Оновити сторінку або перенаправити
                window.location.reload();
            } else {
                message.error('Failed to delete casting');
            }
        } catch (error) {
            message.error('An error occurred while deleting the casting');
            console.error('Delete casting error:', error);
        }
    };

    return (
        <Modal
            title="Confirm Deletion"
            visible={isVisible}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>
                    CANCEL
                </Button>,
                <Button key="confirm" type="primary" onClick={async () => {
                    await handleDeleteCasting(); // Додайте await
                    onCancel(); // Закриваємо модальне вікно тільки після обробки
                }}>
                    DELETE
                </Button>
            ]}
        >
            <p>Are you sure you want to delete this casting?</p>
        </Modal>
    );
};

export default DeleteCastingModal;
