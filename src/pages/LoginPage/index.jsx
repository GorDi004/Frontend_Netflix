import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
import style from './style.module.scss'

const LoginPage = () => {
    const navigate = useNavigate(); 

    const handleSignIn = () => {
        navigate('/sign-in'); // Перенаправлення на SignInPage
    };
    return (
        <div className={style.body}>
            <div className={style.container}>
                <div className={style.netflix}>
                    <div className={style.netflixLogo}></div>
                </div>
                <h1 className={style.text}>Welcome back</h1>
                <p className={style.text} style={{ marginTop: '1rem' }}>The sooner you turn on Netflix, the sooner
                    you get a ticket to the world of entertainment!</p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="emailInput" className={`form-label ${style.text}`}>Email</label>
                        <input type="email" className={`form-control ${style.darkInput}`} id="emailInput" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordInput" className={`form-label ${style.text}`}>Password</label>
                        <input type="password" id="passwordInput" className={`form-control ${style.darkInput}`} aria-describedby="passwordHelpBlock" />
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
                    <div className="col-12">
                        <button type="submit" className={`btn ${style.button}`}>Sign In</button>
                    </div>
                    <div className="col-12">
                        <button type="submit" className={`btn ${style.button2}`}>
                            <div className={style.googleLogo}></div>
                            <p style={{ margin: 0 }}>Sign In with Google</p>
                        </button>
                    </div>
                </form>
                <div className={style.theString}>
                    <p className={style.string}>Don't have an account? <span className={style.link} onClick={handleSignIn}>Sign In</span> </p>
                </div>
            </div>
        </div >
    );
}

export default LoginPage;