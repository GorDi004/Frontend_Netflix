import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ConfigProvider, Form, Input, DatePicker, Select, Checkbox, Button } from 'antd';
import moment from 'moment';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

const { Option } = Select;

const EditCastingPage = () => {
    const navigate = useNavigate();
    const { castingId } = useParams();
    const [form] = Form.useForm();

    const [castingData, setCastingData] = useState({
        title: '',
        submissionDue: '',
        workingDateFrom: '',
        workingDateTo: '',
        projectTypeId: '',
        roleTypeId: '',
        playableAgeFrom: 0,
        playableAgeTo: 0,
        payment: '',
        unionDetails: '',
        roleDescription: '',
        rateDetails: '',
        workRequirements: '',
        workInformation: '',
        requestedMedia: '',
        instructionsForSubmissionNote: '',
        requestingSubmissionsFrom: '',
        isAnyEthnicAppearanceAccepted: false,
        isAnyGenderAccepted: false,
        locationIds: [],
        genderIds: [],
        ethnicAppearanceIds: [],
    });

    const [projectTypes, setProjectTypes] = useState([]);
    const [roleTypes, setRoleTypes] = useState([]);
    const [ethnicAppearances, setEthnicAppearances] = useState([]);
    const [genders, setGenders] = useState([]);
    const [regions, setRegions] = useState([]);
    const [locations, setLocations] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [projectTypesResponse, roleTypesResponse, ethnicAppearancesResponse, gendersResponse, regionsResponse] = await Promise.all([
                    axios.get('https://localhost:7118/api/ProjectType/GetAll'),
                    axios.get('https://localhost:7118/api/RoleType/GetAll'),
                    axios.get('https://localhost:7118/api/EthnicAppearance/GetAll'),
                    axios.get('https://localhost:7118/api/Gender/GetAll'),
                    axios.get('https://localhost:7118/api/Location/GetAllRegionNames')
                ]);

                setProjectTypes(projectTypesResponse.data);
                setRoleTypes(roleTypesResponse.data);
                setEthnicAppearances(ethnicAppearancesResponse.data);
                setGenders(gendersResponse.data);
                setRegions(regionsResponse.data);

                const castingResponse = await axios.get(`https://localhost:7118/api/CastingCalls/${castingId}`);
                setCastingData(castingResponse.data);
                form.setFieldsValue({
                    ...castingResponse.data,
                    submissionDue: castingResponse.data.submissionDue ? moment(castingResponse.data.submissionDue) : null,
                    workingDateFrom: castingResponse.data.workingDateFrom ? moment(castingResponse.data.workingDateFrom) : null,
                    workingDateTo: castingResponse.data.workingDateTo ? moment(castingResponse.data.workingDateTo) : null,
                });
            } catch (error) {
                console.error('Error fetching data:', error.response ? error.response.data : error.message);
            }
        };

        fetchData();
    }, [castingId, form]);

    const handleRegionChange = async (regionName) => {
        setSelectedRegion(regionName);
        try {
            const response = await axios.post(`https://localhost:7118/api/Location/GetLocations/${regionName}`, { regionName });
            setLocations(response.data);
        } catch (error) {
            console.error('Error fetching locations:', error);
        }
    };

    const handleLocationChange = (locationIds) => {
        setCastingData((prevData) => ({
            ...prevData,
            locationIds,
        }));
    };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            setCastingData((prevData) => ({
                ...prevData,
                [name]: checked,
            }));
        } else {
            setCastingData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }

        // Логіка для genderIds
        if (name === 'genderIds') {
            setCastingData((prevData) => {
                const currentValues = Array.isArray(prevData.genderIds) ? prevData.genderIds : [];
                if (currentValues.includes(value)) {
                    return {
                        ...prevData,
                        genderIds: currentValues.filter((id) => id !== value),
                    };
                } else {
                    return {
                        ...prevData,
                        genderIds: [...currentValues, value],
                    };
                }
            });
        }

        // Логіка для ethnicAppearanceIds
        if (name === 'ethnicAppearanceIds') {
            setCastingData((prevData) => {
                const currentValues = Array.isArray(prevData.ethnicAppearanceIds) ? prevData.ethnicAppearanceIds : [];
                if (currentValues.includes(value)) {
                    return {
                        ...prevData,
                        ethnicAppearanceIds: currentValues.filter((id) => id !== value),
                    };
                } else {
                    return {
                        ...prevData,
                        ethnicAppearanceIds: [...currentValues, value],
                    };
                }
            });
        }
    };

    const handleSubmit = async (values) => {
        const token = localStorage.getItem('authToken');
        try {
            const response = await axios.put(`https://localhost:7118/api/CastingCalls/Update/${castingId}`, values, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (response.status === 200) {
                console.log('Casting updated successfully.');
                navigate('/casting-director');
            }
        } catch (error) {
            console.error('Error updating casting:', error);
        }
    };

    const handleBack = () => {
        navigate('/casting-director');
    };

    return (
        <div className={style.container}>
            <IoIosArrowDropleftCircle
                className={style.arrowBack}
                onClick={handleBack}
            />
            <h2>Edit Casting Call</h2>
            <ConfigProvider theme={{
                token: {
                    colorPrimary: '#800020',
                    colorBgBase: '#1f1f1f',
                    colorTextBase: '#ffffff',
                },
            }}>
                <Form form={form} className={style.form} onFinish={handleSubmit} layout="vertical">
                    <Form.Item label="Title" name="title" rules={[{ required: true }]}>
                        <Input className={style.input} />
                    </Form.Item>


                    <Form.Item label="Submission Due" name="submissionDue" rules={[{ required: true }]}>
                        <DatePicker
                            style={{ width: '100%' }}
                            showTime
                        />
                    </Form.Item>

                    <Form.Item label="Working Date From" name="workingDateFrom" rules={[{ required: true }]}>
                        <DatePicker
                            style={{ width: '100%' }}
                            showTime
                        />
                    </Form.Item>

                    <Form.Item label="Working Date To" name="workingDateTo" rules={[{ required: true }]}>
                        <DatePicker
                            style={{ width: '100%' }}
                            showTime
                        />
                    </Form.Item>

                    <Form.Item label="Project Type" name="projectTypeId" rules={[{ required: true }]}>
                        <Select>
                            {projectTypes.map((type) => (
                                <Option key={type.id} value={type.id}>{type.projectTypeName}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Role Type" name="roleTypeId" rules={[{ required: true }]}>
                        <Select>
                            {roleTypes.map((type) => (
                                <Option key={type.id} value={type.id}>{type.roleTypeName}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Playable Age From" name="playableAgeFrom" rules={[{ required: true }]}>
                        <Input className={style.input}  type='number'/>
                    </Form.Item>

                    <Form.Item label="Playable Age To" name="playableAgeTo" rules={[{ required: true }]}>
                        <Input className={style.input}  type='number' />
                    </Form.Item>

                    <Form.Item label="Payment" name="payment" rules={[{ required: true }]}>
                        <Input className={style.input} />
                    </Form.Item>

                    <Form.Item label="Union Details" name="unionDetails" rules={[{ required: true }]}>
                        <Input className={style.input}  />
                    </Form.Item>

                    <Form.Item label="Role Description" name="roleDescription" rules={[{ required: true }]}>
                        <Input.TextArea value={castingData.roleDescription}  />
                    </Form.Item>

                    <Form.Item label="Rate Details" name="rateDetails" rules={[{ required: true }]}>
                        <Input.TextArea value={castingData.rateDetails} onChange={handleChange} />
                    </Form.Item>

                    <Form.Item label="Work Requirements" name="workRequirements" rules={[{ required: true }]}>
                        <Input.TextArea value={castingData.workRequirements} onChange={handleChange} />
                    </Form.Item>

                    <Form.Item label="Work Information" name="workInformation" rules={[{ required: true }]}>
                        <Input.TextArea value={castingData.workInformation} onChange={handleChange} />
                    </Form.Item>

                    <Form.Item label="Requested Media" name="requestedMedia" rules={[{ required: true }]}>
                        <Input className={style.input} value={castingData.requestedMedia} onChange={handleChange} />
                    </Form.Item>

                    <Form.Item label="Instructions for Submission Note" name="instructionsForSubmissionNote" rules={[{ required: true }]}>
                        <Input className={style.input} value={castingData.instructionsForSubmissionNote} onChange={handleChange} />
                    </Form.Item>

                    <Form.Item label="Requesting Submissions From" name="requestingSubmissionsFrom" rules={[{ required: true }]}>
                        <Input className={style.input} value={castingData.requestingSubmissionsFrom} onChange={handleChange} />
                    </Form.Item>

                    <Form.Item name="isAnyEthnicAppearanceAccepted" valuePropName="checked">
                        <Checkbox checked={castingData.isAnyEthnicAppearanceAccepted} onChange={handleChange}>
                            Is Any Ethnic Appearance Accepted
                        </Checkbox>
                    </Form.Item>

                    <Form.Item name="isAnyGenderAccepted" valuePropName="checked">
                        <Checkbox checked={castingData.isAnyGenderAccepted} onChange={handleChange}>
                            Is Any Gender Accepted
                        </Checkbox>
                    </Form.Item>

                    <Form.Item label="Region" name="region" rules={[{ required: true }]}>
                        <Select value={selectedRegion} onChange={handleRegionChange}>
                            <Option value="">Select Region</Option>
                            {regions.map((region) => (
                                <Option key={region} value={region}>{region}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Locations" name="locationIds" rules={[{ required: true }]}>
                        <Select
                            mode="multiple"
                            value={castingData.locationIds}
                            onChange={(values) => handleLocationChange(values)}
                        >
                            {locations.map((location) => (
                                <Option key={location.id} value={location.id}>{location.locationName}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Genders" name="genderIds">
                        <Select
                            mode="multiple"
                            value={castingData.genderIds}
                            onChange={(values) => handleChange({ target: { name: 'genderIds', value: values } })}
                        >
                            {genders.map((gender) => (
                                <Option key={gender.id} value={gender.id}>{gender.genderName}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Ethnic Appearances" name="ethnicAppearanceIds" rules={[{ required: true }]}>
                        <Select
                            mode="multiple"
                            value={castingData.ethnicAppearanceIds}
                            onChange={(values) => handleChange({ target: { name: 'ethnicAppearanceIds', value: values } })}
                        >
                            {ethnicAppearances.map((ethnicAppearance) => (
                                <Option key={ethnicAppearance.id} value={ethnicAppearance.id}>{ethnicAppearance.ethnicAppearanceName}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">Save</Button>
                    </Form.Item>
                </Form>
            </ConfigProvider>
        </div>
    );
};

export default EditCastingPage;
