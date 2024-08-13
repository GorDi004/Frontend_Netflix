import React from 'react'
import style from './style.module.scss'

const SignInPage = () => {
    return (
        <div className={style.body}>
            <div className={style.container}>
                <div className={style.netflix}>
                    <div className={style.netflixLogo}></div>
                </div>
                <h1 className={style.text}>Sign In</h1>
                <form className='row g-1'>
                    <div className="mb-3">
                        <label htmlFor="nameInput" className={`form-label ${style.text}`}>Name</label>
                        <input type="name" className={`form-control ${style.darkInput}`} id="nameInput" placeholder="Enter your name" />
                    </div>
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
            </div>
        </div >
    );
}

export default SignInPage;