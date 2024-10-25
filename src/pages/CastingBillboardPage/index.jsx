import React from 'react'
import style from './style.module.scss'
import { useNavigate, useParams } from 'react-router-dom';

const CastingBillboardPage = () => {
    const { castingId } = useParams()
    const navigate = useNavigate()

    const handleCastingSubmissionPage = () => {
        navigate(`/casting-submission/${castingId}`)
    }
    return (
        <>
            <div className={style.container}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt="Netflix Logo"
                    className={style.logo}
                />
                <hr className={style.line} />
                <h1 className={style.pageTitle}>Casting Billboard®</h1>
                <hr className={style.line} />
                <div className={style.block}>
                    <h1 className={style.title}>Dutch Speakers for a popular meal prep brand</h1>
                    <p className={style.text}>Internet Commertial | Non Union</p>
                </div>
                <div className={style.block}>
                    <h1 className={style.title}>Talents who speak Dutch for a popular meal prep brand!</h1>
                    <div className={style.dateBlock}>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 19C14.7385 19 19 14.7385 19 9.5C19 4.26154 14.7385 0 9.5 0C4.26154 0 0 4.26154 0 9.5C0 14.7385 4.26154 19 9.5 19ZM9.5 1.58333C13.8652 1.58333 17.4167 5.13475 17.4167 9.5C17.4167 13.8653 13.8652 17.4167 9.5 17.4167C5.13475 17.4167 1.58333 13.8653 1.58333 9.5C1.58333 5.13475 5.13475 1.58333 9.5 1.58333ZM8.70833 9.5V4.75C8.70833 4.313 9.063 3.95833 9.5 3.95833C9.937 3.95833 10.2917 4.313 10.2917 4.75V8.70833H12.6667C13.1037 8.70833 13.4583 9.063 13.4583 9.5C13.4583 9.937 13.1037 10.2917 12.6667 10.2917H9.5C9.063 10.2917 8.70833 9.937 8.70833 9.5Z" fill="#F9F1E4" />
                        </svg>
                        <p className={style.textDate}>Submissions Due Dec 31, 2024, 11:00 AM AKST</p>
                        <p className={style.textDate}>Work Apr 16 - Dec 31</p>
                        <p className={style.textDate}>Posted Apr 16, 2024, 7:19 PM AKDT</p>
                    </div>
                    <p className={style.text}>Principal/ 18 - 50 / Any Gender / Any Ethnic Appearance</p>
                    <p className={style.text}>Non union / $200 flat</p>
                    <hr className={style.line} />
                    <div className={style.marginStyle}>
                        <p className={style.text}>Hello! We are looking to cast Dutch speaking talents for a brand promoting fresh, ready-prepared meals that support busy lifestyles. Talents with UGC experience are a plus! You MUST speak Dutch, please do NOT submit if you do not speak Dutch! In order to be considered, please attach a self-tape of you introducing yourself and telling us why you prefer ready-to-go meals, speaking some lines in Dutch. Thank you!</p>
                    </div>

                    <div className={style.marginStyle}>
                        <p className={style.sectionTitle}>Ethnic Appearance</p>
                        <p className={style.text}>Aboriginal / Torres Strait Islander, Ethnically Ambiguous, Black, Native American, White, East Asian, East Indian / South Asian, Eastern European, Latinx / Hispanic, Maori, Mediterranean, Middle Eastern, Pacific Islander, Southeast Asian</p>
                    </div>

                    <div className={style.marginStyle}>
                        <p className={style.sectionTitle}>Additional Rate Details</p>
                        <p className={style.text}>$200 flat</p>
                        <p className={style.text}>Rate is $200 flat. If you are not comfortable with this rate, please do not submit.</p>
                    </div>

                    <div className={style.marginStyle}>
                        <p className={style.sectionTitle}>Work requirements</p>
                        <p className={style.text}>Shooting Remotely</p>
                    </div>

                    <div className={style.rowDirection}>
                        <div className={style.marginStyle}>
                            <p className={style.sectionTitle}>Auditions</p>
                            <p className={style.text}>USA</p>
                            <p className={style.text}>Apr 16, 2024 - Dec 31, 2024</p>
                        </div>
                        <div className={`${style.marginStyle} ${style.marginLeft}`}>
                            <p className={style.sectionTitle}>Work information</p>
                            <p className={style.text}>Remote</p>
                            <p className={style.text}>Apr 16, 2024 - Dec 31, 2024</p>
                        </div>
                    </div>

                    <div className={style.marginStyle}>
                        <p className={style.sectionTitle}>Requested Media</p>
                        <p className={style.text}>Video, Photo</p>
                        <p className={style.text}>In order to be considered, please attach a self-tape of you introducing yourself and telling us why you prefer ready-to-go meals, speaking some lines in Dutch. Thank you!</p>
                    </div>

                    <div className={style.marginStyle}>
                        <p className={style.sectionTitle}>Instructions for Submission Note</p>
                        <p className={style.text}>In order to be considered, please attach a self-tape of you introducing yourself and telling us why you prefer ready-to-go meals, speaking some lines in Dutch. Thank you!</p>
                    </div>

                    <div className={style.marginStyle}>
                        <p className={style.sectionTitle}>Requesting Submissions From</p>
                        <p className={style.text}>UNITED STATES</p>
                    </div>

                    <button onClick={handleCastingSubmissionPage} className={style.submitToRoleButton}>Submit To Role</button>
                </div>

            </div >
        </>
    );
}

export default CastingBillboardPage;