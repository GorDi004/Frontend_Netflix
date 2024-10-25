import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import { Checkbox, Tabs } from 'antd';
import BurgerMenu from '../../elements/BurgerMenu';
import UserModal from '../../elements/UserModal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CastingCard from '../../elements/CastingCard';
import CastingTabs from '../../elements/CastingTabs';

const CastingDirectorPage = () => {
    const navigate = useNavigate();
    const handleToLogin = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    const [activeTab, setActiveTab] = useState('1');
    const [castingCalls, setCastingCalls] = useState([]);
    const [locations, setLocations] = useState([]);
    const [projectTypes, setProjectTypes] = useState([]);
    const [roleTypes, setRoleTypes] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);
    const [selectedRoleTypes, setSelectedRoleTypes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('https://localhost:7118/api/CastingCalls/GetCastingCallsByAuthenticatedCastingDirectorId', {}, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                setCastingCalls(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('https://localhost:7118/api/Location/GetAllRegionNames');
                setLocations(response.data);
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        };
        fetchLocations();
    }, []);

    useEffect(() => {
        const fetchProjectTypes = async () => {
            try {
                const response = await axios.get('https://localhost:7118/api/ProjectType/GetAll');
                setProjectTypes(response.data);
            } catch (error) {
                console.error('Error fetching project types:', error);
            }
        };
        fetchProjectTypes();
    }, []);

    useEffect(() => {
        const fetchRoleTypes = async () => {
            try {
                const response = await axios.get('https://localhost:7118/api/RoleType/GetAll');
                setRoleTypes(response.data);
            } catch (error) {
                console.error('Error fetching role types:', error);
            }
        };
        fetchRoleTypes();
    }, []);

    const handleLocationChange = (e) => {
        const { value, checked } = e.target;
        setSelectedLocations((prev) =>
            checked ? [...prev, value] : prev.filter(location => location !== value)
        );
    };

    const handleProjectTypeChange = (e) => {
        const { value, checked } = e.target;
        setSelectedProjectTypes((prev) =>
            checked ? [...prev, value] : prev.filter(projectType => projectType !== value)
        );
    };

    const handleRoleTypeChange = (e) => {
        const { value, checked } = e.target;
        setSelectedRoleTypes((prev) =>
            checked ? [...prev, value] : prev.filter(roleType => roleType !== value)
        );
    };

    const filteredCastingCalls = castingCalls.filter(castingCall => {
        const locationMatch = selectedLocations.length === 0 || selectedLocations.every(selectedLocation =>
            castingCall.locations.some(location =>
                location.toLowerCase().includes(selectedLocation.toLowerCase())
            )
        );
        const projectTypeMatch = selectedProjectTypes.length === 0 || selectedProjectTypes.includes(castingCall.projectType);
        const roleTypeMatch = selectedRoleTypes.length === 0 || selectedRoleTypes.includes(castingCall.roleType);

        return locationMatch && projectTypeMatch && roleTypeMatch;
    });
    return (
        <>
            <div className={style.containerItem}>
                <BurgerMenu />
                <div className={style.header}>
                    <UserModal />
                </div>
                <div className={style.whiteBlock}>
                    <p className={style.textBlock1}>Search results for <b>All Locations</b></p>
                    <p className={style.textBlock2}>Working Location</p>
                    {locations.map((location) => (
                        <Checkbox key={location} onChange={handleLocationChange} value={location} style={{ marginLeft: '17px' }}>
                            {location}
                        </Checkbox>
                    ))}
                    <p className={style.textBlock2}>Project Type</p>
                    {projectTypes.map((projectType) => (
                        <Checkbox key={projectType.id} onChange={handleProjectTypeChange} value={projectType.projectTypeName} style={{ marginLeft: '17px' }}>
                            {projectType.projectTypeName}
                        </Checkbox>
                    ))}
                    <p className={style.textBlock2}>Role Type</p>
                    {roleTypes.map((roleType) => (
                        <Checkbox key={roleType.id} onChange={handleRoleTypeChange} value={roleType.roleTypeName} style={{ marginLeft: '17px' }}>
                            {roleType.roleTypeName}
                        </Checkbox>
                    ))}

                    {filteredCastingCalls.length > 0 ? (
                        filteredCastingCalls.map((card) => (
                            <CastingCard key={card.id} card={card} activeTab={activeTab} />
                        ))
                    ) : (
                        <p>Loading or no casting calls available</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default CastingDirectorPage;