import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Додаємо axios для запитів
import style from './style.module.scss';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Для зберігання повідомлень про помилки

    const handleSignIn = async (e) => {
        e.preventDefault(); // Запобігаємо перезавантаженню сторінки

        try {
            const response = await axios.post('https://localhost:7118/auth/login', {
                email,
                password,
            });

            if (response.status === 200) {
                // Успішний логін, перенаправляємо користувача на PlanPage
                console.log('Login successful');
                navigate('/plan');
            }
        } catch (error) {
            // Якщо помилка, показуємо повідомлення користувачу
            setErrorMessage('Login failed. Please check your credentials.');
            console.error('Login error:', error);
        }
    };
    const handleSignUp = () => {
        navigate('/sign-in');
    };

    return (
        <div className={style.page}>
            <div className={style.body}>
                <div className={style.container}>
                    <div className={style.netflix}>
                        <div className={style.netflixLogo}></div>
                    </div>
                    <h1 className={style.text}>Welcome back</h1>
                    <p className={style.text} style={{ marginTop: '1rem' }}>
                        The sooner you turn on Netflix, the sooner you get a ticket to the world of entertainment!
                    </p>

                    <form onSubmit={handleSignIn}> {/* Вказуємо handleSignIn на submit форми */}
                        <div className="mb-3">
                            <label htmlFor="emailInput" className={`form-label ${style.text}`}>Email</label>
                            <input
                                type="email"
                                className={`form-control ${style.darkInput}`}
                                id="emailInput"
                                placeholder="Enter your email"
                                value={email} // Зв'язуємо з email state
                                onChange={(e) => setEmail(e.target.value)} // Оновлюємо state
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="passwordInput" className={`form-label ${style.text}`}>Password</label>
                            <input
                                type="password"
                                id="passwordInput"
                                className={`form-control ${style.darkInput}`}
                                aria-describedby="passwordHelpBlock"
                                value={password} // Зв'язуємо з password state
                                onChange={(e) => setPassword(e.target.value)} // Оновлюємо state
                            />
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className={`form-check-input ${style.darkInput}`} type="checkbox" id="gridCheck" />
                                <label className={`form-check-label ${style.box}`} htmlFor="gridCheck">
                                    <p>Remember me</p>
                                    <p>Forgot Password?</p>
                                </label>
                            </div>
                        </div>

                        {/* Виведення повідомлення про помилку логіну */}
                        {errorMessage && <p className={style.error}>{errorMessage}</p>}

                        <div className="col-12">
                            <button type="submit" className={`btn ${style.button}`}>Sign In</button>
                        </div>
                        <div className="col-12">
                            <button type="button" className={`btn ${style.button2}`}>
                                <div className={style.googleLogo}></div>
                                <p style={{ margin: 0 }}>Sign In with Google</p>
                            </button>
                        </div>
                    </form>

                    <div className={style.theString}>
                        <p className={style.string}>Don't have an account? <span className={style.link} onClick={handleSignUp}>Sign In</span> </p>
                    </div>
                </div>
            </div>
            <img src="https://deadline.com/wp-content/uploads/2023/12/BRIDGERTON_304_Unit_00626R.jpg" className={style.image} alt="netflix" />
        </div>
    );
};

export default LoginPage;
