import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import style from './style.module.scss';

const UploadButton = ({ value, onChange, name }) => {
    const handleUploadChange = (info) => {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }

        // Передаємо вибрані файли до батьківського компонента через onChange
        onChange(info.fileList.map(file => file.originFileObj || file));
    };

    return (
        <Upload
            name={name}
            fileList={value} // Використовуємо value для збереження файлів
            onChange={handleUploadChange}
            beforeUpload={() => false} // Відключаємо автоматичний аплоад
            multiple
        >
            <button className={style.submitButton}>Add {name}</button>
        </Upload>
    );
};

export default UploadButton;
