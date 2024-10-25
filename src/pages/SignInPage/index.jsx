import React, { useState } from 'react';
import axios from 'axios';
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const navigate = useNavigate();

    // Стани для зберігання даних форми
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthDate: '',
        isActor: false,
        isCastingDirector: false
    });

    // Обробник для оновлення стану при введенні даних
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Обробник для відправки форми
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://localhost:7118/auth/register', formData);
            console.log('Registration successful', response.data);
            navigate('/plan');
        } catch (error) {
            console.error('Registration failed', error.response?.data);
        }
    };

    return (
        <div className={style.page}>
            <div className={style.body}>
                <div className={style.container}>
                    <div className={style.netflix}>
                        <div className={style.netflixLogo}></div>
                    </div>
                    <h1 className={style.textMain}>Sign In</h1>
                    <form className='row g-1 need-validation' onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="firstNameInput" className={`form-label ${style.text}`}>First name</label>
                            <input type="text" className={`form-control ${style.darkInput}`} id="firstNameInput" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastNameInput" className={`form-label ${style.text}`}>Last name</label>
                            <input type="text" className={`form-control ${style.darkInput}`} id="lastNameInput" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="emailInput" className={`form-label ${style.text}`}>Email</label>
                            <input type="email" className={`form-control ${style.darkInput}`} id="emailInput" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="passwordInput" className={`form-label ${style.text}`}>Password</label>
                            <input type="password" className={`form-control ${style.darkInput}`} id="passwordInput" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="birthDateInput" className={`form-label ${style.text}`}>Birth date</label>
                            <input type="date" className={`form-control ${style.darkInput}`} id="birthDateInput" name="birthDate" value={formData.birthDate} onChange={handleChange} />
                        </div>
                        <label htmlFor="ActorOrDirector" className={`form-label ${style.textActorOrDirector}`}>Choose your role (optional)</label>
                        <div className="btn-group mb-3" role="group">

                            <input type="checkbox" className={`btn-check ${style.darkInput}`} id="btncheck1" name="isActor" checked={formData.isActor} onChange={handleChange} />
                            <label className={`btn btn-outline-light ${style.text}`} htmlFor="btncheck1">Actor</label>

                            <input type="checkbox" className={`btn-check ${style.darkInput}`} id="btncheck2" name="isCastingDirector" checked={formData.isCastingDirector} onChange={handleChange} />
                            <label className={`btn btn-outline-light ${style.text}`} htmlFor="btncheck2">Director</label>
                        </div>
                        <div className="col-12">
                            <button type="submit" className={`btn ${style.button}`}>Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
            <img src="https://deadline.com/wp-content/uploads/2023/12/BRIDGERTON_304_Unit_00626R.jpg" className={style.image} alt="netflix" />
        </div>
    );
}

export default SignInPage;
