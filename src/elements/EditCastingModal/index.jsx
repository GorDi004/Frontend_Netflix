import { Modal, Button, Input, Form, DatePicker, Checkbox } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import dayjs from 'dayjs';

const EditCastingModal = ({ visible, onClose, castingId, onUpdate }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [castingData, setCastingData] = useState(null);


    useEffect(() => {
        if (castingId) {
            setLoading(true);
            axios.get(`https://localhost:7118/api/CastingCalls/${castingId}`)
                .then((response) => {
                    setCastingData(response.data);
                    form.setFieldsValue(response.data); // Заповнюємо форму даними
                    // console.log('Casting Data:', response.data); // Виводимо всі дані в консоль
                })
                .catch((error) => console.error('Error fetching casting data:', error))
                .finally(() => setLoading(false));
        }
    }, [castingId, form]);

    const isValidDate = (date) => {
        return date instanceof Date && !isNaN(date);
    };

    const handleSave = async () => {
        try {
            setLoading(true);
            const updatedData = form.getFieldsValue();

            // Якщо користувач не обрав нову дату, використовуємо ті, що прийшли з сервера
            updatedData.submissionDue = updatedData.submissionDue || castingData.submissionDue;
            updatedData.workingDateFrom = updatedData.workingDateFrom || castingData.workingDateFrom;
            updatedData.workingDateTo = updatedData.workingDateTo || castingData.workingDateTo;

            // Відправляємо ці дані без змін
            await axios.put(`https://localhost:7118/api/CastingCalls/Update/${castingId}`, updatedData);
            onUpdate(updatedData);
            onClose();
        } catch (error) {
            console.error('Error updating casting call:', error);
        } finally {
            setLoading(false);
        }
    };




    return (
        <Modal
            visible={visible}
            title="Edit Casting Call"
            onCancel={onClose}
            footer={[
                <Button key="back" onClick={onClose}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={handleSave}>
                    Save
                </Button>,
            ]}
        >
            {castingData ? (
                <Form form={form} layout="vertical">
                    <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="submissionDue" label="Submission Due Date">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name="workingDateFrom" label="Working Date From">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name="workingDateTo" label="Working Date To">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name="payment" label="Payment">
                        <Input />
                    </Form.Item>
                    <Form.Item name="unionDetails" label="Union Details">
                        <Input />
                    </Form.Item>
                    <Form.Item name="roleDescription" label="Role Description">
                        <Input.TextArea />
                    </Form.Item>
                    {/* Інші поля форми */}
                    <Form.Item name="isAnyEthnicAppearanceAccepted" valuePropName="checked">
                        <Checkbox>Any Ethnic Appearance Accepted</Checkbox>
                    </Form.Item>
                    <Form.Item name="isAnyGenderAccepted" valuePropName="checked">
                        <Checkbox>Any Gender Accepted</Checkbox>
                    </Form.Item>
                </Form>
            ) : (
                <p>Loading...</p>
            )}
        </Modal>
    );
};

export default EditCastingModal;
