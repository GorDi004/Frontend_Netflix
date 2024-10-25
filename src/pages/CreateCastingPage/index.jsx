import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateCastingPage = () => {
    const navigate = useNavigate();

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

    // useEffect(() => {
    //     const fetchProjectTypes = async () => {
    //         try {
    //             const response = await axios.get('https://localhost:7118/api/ProjectType/GetAll');
    //             setProjectTypes(response.data);
    //         } catch (error) {
    //             console.error('Error fetching project types:', error.response ? error.response.data : error.message);
    //         }
    //     };

    //     fetchProjectTypes();
    // }, []);

    // useEffect(() => {
    //     const fetchRoleTypes = async () => {
    //         try {
    //             const response = await axios.get('https://localhost:7118/api/RoleType/GetAll');
    //             setRoleTypes(response.data);
    //         } catch (error) {
    //             console.error('Error fetching role types:', error);
    //         }
    //     };

    //     fetchRoleTypes();
    // }, []);

    // useEffect(() => {
    //     const fetchEthnicAppearances = async () => {
    //         try {
    //             const response = await axios.get('https://localhost:7118/api/EthnicAppearance/GetAll');
    //             setEthnicAppearances(response.data);
    //         } catch (error) {
    //             console.error('Error fetching ethnic appearance:', error);
    //         }
    //     };

    //     fetchEthnicAppearances();
    // }, []);

    // useEffect(() => {
    //     const fetchGenders = async () => {
    //         try {
    //             const response = await axios.get('https://localhost:7118/api/Gender/GetAll');
    //             setGenders(response.data);
    //         } catch (error) {
    //             console.error('Error fetching genders:', error);
    //         }
    //     };

    //     fetchGenders();
    // }, []);

    // useEffect(() => {
    //     const fetchRegions = async () => {
    //         try {
    //             const response = await axios.get('https://localhost:7118/api/Location/GetAllRegionNames');
    //             setRegions(response.data);
    //         } catch (error) {
    //             console.error('Error fetching regions:', error);
    //         }
    //     };

    //     fetchRegions();
    // }, []);

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
            } catch (error) {
                console.error('Error fetching data:', error.response ? error.response.data : error.message);
            }
        };

        fetchData();
    }, []);

    const handleRegionChange = async (e) => {
        const regionName = e.target.value;
        setSelectedRegion(regionName);

        try {
            const response = await axios.post(`https://localhost:7118/api/Location/GetLocations/${regionName}`, { regionName });
            setLocations(response.data);
        } catch (error) {
            console.error('Error fetching locations:', error);
        }
    };

    const handleLocationChange = (e) => {
        const locationId = e.target.value;
        setCastingData((prevData) => ({
            ...prevData,
            locationIds: prevData.locationIds.includes(locationId)
                ? prevData.locationIds.filter((id) => id !== locationId)
                : [...prevData.locationIds, locationId],
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
                const currentValues = Array.isArray(prevData.genderIds) ? prevData.genderIds : []; // Переконайтеся, що це масив
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
                const currentValues = Array.isArray(prevData.ethnicAppearanceIds) ? prevData.ethnicAppearanceIds : []; // Переконайтеся, що це масив
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


    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('authToken');
        try {
            const response = await axios.post('https://localhost:7118/api/CastingCalls/Create', castingData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Додаємо токен до заголовків
                },
            });
            if (response.status === 200) {
                console.error('Casting created successfully.');
                navigate('/casting');
            }
        } catch (error) {
            console.error('Error creating casting:', error);
        }
    };

    return (
        <div className={style.container}>
            <h2>Create Casting Call</h2>
            <form onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label>Title</label>
                    <input type="text" name="title" value={castingData.title} onChange={handleChange} required />
                </div>

                <div className={style.formGroup}>
                    <label>Submission Due</label>
                    <input type="datetime-local" name="submissionDue" value={castingData.submissionDue} onChange={handleChange} required />
                </div>

                <div className={style.formGroup}>
                    <label>Working Date From</label>
                    <input type="datetime-local" name="workingDateFrom" value={castingData.workingDateFrom} onChange={handleChange} required />
                </div>

                <div className={style.formGroup}>
                    <label>Working Date To</label>
                    <input type="datetime-local" name="workingDateTo" value={castingData.workingDateTo} onChange={handleChange} required />
                </div>

                <div className={style.formGroup}>
                    <label>Project Type</label>
                    <select name="projectTypeId" value={castingData.projectTypeId} onChange={handleChange} required>
                        <option value="">Select Project Type</option>
                        {projectTypes.map((type) => (
                            <option key={type.id} value={type.id}>{type.projectTypeName}</option>
                        ))}
                    </select>
                </div>

                <div className={style.formGroup}>
                    <label>Role Type</label>
                    <select name="roleTypeId" value={castingData.roleTypeId} onChange={handleChange} required>
                        <option value="">Select Role Type</option>
                        {roleTypes.map((type) => (
                            <option key={type.id} value={type.id}>{type.roleTypeName}</option>
                        ))}
                    </select>
                </div>

                <div className={style.formGroup}>
                    <label>Playable Age From</label>
                    <input type="number" name="playableAgeFrom" value={castingData.playableAgeFrom} onChange={handleChange} required />
                </div>

                <div className={style.formGroup}>
                    <label>Playable Age To</label>
                    <input type="number" name="playableAgeTo" value={castingData.playableAgeTo} onChange={handleChange} required />
                </div>

                <div className={style.formGroup}>
                    <label>Payment</label>
                    <input type="text" name="payment" value={castingData.payment} onChange={handleChange} required />
                </div>

                <div className={style.formGroup}>
                    <label>Union Details</label>
                    <input type="text" name="unionDetails" value={castingData.unionDetails} onChange={handleChange} required />
                </div>

                <div className={style.formGroup}>
                    <label>Role Description</label>
                    <textarea name="roleDescription" value={castingData.roleDescription} onChange={handleChange} required />
                </div>

                <div className={style.formGroup}>
                    <label>Rate Details</label>
                    <textarea name="rateDetails" value={castingData.rateDetails} onChange={handleChange} required />
                </div>

                <div className={style.formGroup}>
                    <label>Work Requirements</label>
                    <textarea name="workRequirements" value={castingData.workRequirements} onChange={handleChange} required />
                </div>

                <div className={style.formGroup}>
                    <label>Work Information</label>
                    <textarea name="workInformation" value={castingData.workInformation} onChange={handleChange} required />
                </div>

                <div className={style.formGroup}>
                    <label>Requested Media</label>
                    <input type="text" name="requestedMedia" value={castingData.requestedMedia} onChange={handleChange} required />
                </div>

                <div className={style.formGroup}>
                    <label>Instructions for Submission Note</label>
                    <input type="text" name="instructionsForSubmissionNote" value={castingData.instructionsForSubmissionNote} onChange={handleChange} required />
                </div>

                <div className={style.formGroup}>
                    <label>Requesting Submissions From</label>
                    <input type="text" name="requestingSubmissionsFrom" value={castingData.requestingSubmissionsFrom} onChange={handleChange} required />
                </div>

                <div className={style.formGroup}>
                    <label>Is Any Ethnic Appearance Accepted</label>
                    <input type="checkbox" name="isAnyEthnicAppearanceAccepted" checked={castingData.isAnyEthnicAppearanceAccepted} onChange={handleChange} />
                </div>

                <div className={style.formGroup}>
                    <label>Is Any Gender Accepted</label>
                    <input type="checkbox" name="isAnyGenderAccepted" checked={castingData.isAnyGenderAccepted} onChange={handleChange} />
                </div>

                <div className={style.formGroup}>
                    <label>Region</label>
                    <select value={selectedRegion} onChange={handleRegionChange} required>
                        <option value="">Select Region</option>
                        {regions.map((region) => (
                            <option key={region} value={region}>{region}</option>
                        ))}
                    </select>
                </div>

                <div className={style.formGroup}>
                    <label>Locations</label>
                    <select multiple value={castingData.locationIds} onChange={handleLocationChange} required>
                        {locations.map((location) => (
                            <option key={location.id} value={location.id}>{location.locationName}</option>
                        ))}
                    </select>
                </div>

                <div className={style.formGroup}>
                    <label>Genders</label>
                    <select name="genderIds" value={castingData.genderIds} onChange={handleChange} multiple>
                        {genders.map((gender) => (
                            <option key={gender.id} value={gender.id}>{gender.genderName}</option>
                        ))}
                    </select>
                </div>

                <div className={style.formGroup}>
                    <label>Ethnic Appearances</label>
                    <select name="ethnicAppearanceIds" value={castingData.ethnicAppearanceIds} onChange={handleChange} required multiple>
                        {ethnicAppearances.map((ethnicAppearance) => (
                            <option key={ethnicAppearance.id} value={ethnicAppearance.id}>{ethnicAppearance.ethnicAppearanceName}</option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Create Casting Call</button>
            </form>
        </div>
    );
};

export default CreateCastingPage;
