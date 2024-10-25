import React, { useState } from 'react'
import style from './style.module.scss'
import UploadButton from '../../elements/UploadButton';
import ThankButton from '../../elements/ThankButton';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CastingSubmissionPage = () => {
    const { castingId } = useParams();
    const [formData, setFormData] = useState({
        castingId: castingId, // Додайте ваш CastingId
        submissionNote: '',
        photoFiles: [],
        videoFiles: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem('authToken');

            if (!token) {
                console.error("No token found");
                return false;
            }

            const formDataToSend = new FormData();
            formDataToSend.append('CastingId', formData.castingId);
            formDataToSend.append('SubmissionNote', formData.submissionNote);

            // Додаємо фото
            formData.photoFiles.forEach((file) => {
                formDataToSend.append('Files', file);
            });

            // Додаємо відео
            formData.videoFiles.forEach((file) => {
                formDataToSend.append('Files', file);
            });

            const response = await axios.post(
                'https://localhost:7118/api/Submission/SubmitToRole',
                formDataToSend,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200 || response.status === 201) {
                console.log('Submission created successfully:', response.data);
                return true;
            } else {
                console.error('Error creating submission:', response.data);
                return false;
            }
        } catch (error) {
            if (error.response) {
                console.error('Error occurred during submission creation:', error.response.data);
            } else {
                console.error('Error occurred during submission creation:', error.message);
            }
            return false;
        }
    };

    const handlePhotoChange = (files) => {
        setFormData(prevData => ({
            ...prevData,
            photoFiles: [...prevData.photoFiles, ...files],
        }));
    };

    const handleVideoChange = (files) => {
        setFormData(prevData => ({
            ...prevData,
            videoFiles: files, // Оновлюємо файли відео
        }));
    };





    return (
        <>
            <div className={style.container}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt="Netflix Logo"
                    className={style.logo}
                />
                <hr className={style.line} />
                <h1 className={style.pageTitle}>Customize Submission</h1>
                <hr className={style.line} />
                <div className={style.block}>
                    <h1 className={style.title}>Changes made here only apply to this submission. Your profile will not be affected.</h1>
                </div>

                <div className={style.block}>
                    <div className={style.rowDirection}>
                        <div className={style.castingInfo}>
                            <h1 className={style.title}>Role name</h1>
                            <p className={style.text}>Talents who speak Dutch for a popular meal prep brand!</p>


                            <div className={style.dateBlock}>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.5 19C14.7385 19 19 14.7385 19 9.5C19 4.26154 14.7385 0 9.5 0C4.26154 0 0 4.26154 0 9.5C0 14.7385 4.26154 19 9.5 19ZM9.5 1.58333C13.8652 1.58333 17.4167 5.13475 17.4167 9.5C17.4167 13.8653 13.8652 17.4167 9.5 17.4167C5.13475 17.4167 1.58333 13.8653 1.58333 9.5C1.58333 5.13475 5.13475 1.58333 9.5 1.58333ZM8.70833 9.5V4.75C8.70833 4.313 9.063 3.95833 9.5 3.95833C9.937 3.95833 10.2917 4.313 10.2917 4.75V8.70833H12.6667C13.1037 8.70833 13.4583 9.063 13.4583 9.5C13.4583 9.937 13.1037 10.2917 12.6667 10.2917H9.5C9.063 10.2917 8.70833 9.937 8.70833 9.5Z" fill="#F9F1E4" />
                                </svg>
                                <p className={style.textDate}>Submissions Due Dec 31, 2024, 12:00 PM PST</p>
                            </div>
                            <p className={`${style.text} ${style.additionalMargin}`}>Principal / Man, Woman, Non-Binary Person, Trans Man, Trans Woman / 18-50 / Multiple Ethnicities</p>
                            <p className={`${style.text} ${style.additionalMargin}`}>Non Union / $200 flat Rate is $200 flat. Please do not submit if you are not comfortable with the rate.</p>
                            <p className={`${style.text} ${style.additionalMargin}`}>Hello! We are looking to cast Dutch speaking talents for a brand promoting fresh, ready-prepared meals that support busy lifestyles. Talents with UGC experience are a plus! You MUST speak Dutch, please do NOT submit if you do not speak Dutch! In order to be considered, please attach a self-tape of you introducing yourself and telling us why you prefer ready-to-go meals, speaking some lines in Dutch. Thank you!</p>
                        </div>
                        <div className={style.requestedMedia}>
                            <h1 className={style.mediatitle}>Requested Media</h1>

                            <div className={style.mediaIcons}>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_834_1280)">
                                        <path d="M9.7317 10.9687C9.48793 10.7247 9.19847 10.5312 8.87989 10.3992C8.5613 10.2672 8.21981 10.1992 7.87495 10.1992C7.53009 10.1992 7.18861 10.2672 6.87002 10.3992C6.55143 10.5312 6.26198 10.7247 6.0182 10.9687L0.0332031 16.9537C0.114106 18.051 0.606248 19.0773 1.41122 19.8275C2.21619 20.5776 3.27465 20.9962 4.37495 20.9997H16.625C17.4822 20.9995 18.3203 20.7459 19.0338 20.2708L9.7317 10.9687Z" fill="#5B5B5B" />
                                        <path d="M15.75 7C16.7165 7 17.5 6.2165 17.5 5.25C17.5 4.2835 16.7165 3.5 15.75 3.5C14.7835 3.5 14 4.2835 14 5.25C14 6.2165 14.7835 7 15.75 7Z" fill="#5B5B5B" />
                                        <path d="M16.625 0H4.375C3.2151 0.00138938 2.10311 0.462772 1.28294 1.28294C0.462772 2.10311 0.00138938 3.2151 0 4.375L0 14.5128L4.781 9.73175C5.18727 9.32537 5.66962 9.00301 6.20049 8.78307C6.73137 8.56314 7.30037 8.44993 7.875 8.44993C8.44963 8.44993 9.01863 8.56314 9.54951 8.78307C10.0804 9.00301 10.5627 9.32537 10.969 9.73175L20.2711 19.0339C20.7462 18.3203 20.9998 17.4823 21 16.625V4.375C20.9986 3.2151 20.5372 2.10311 19.7171 1.28294C18.8969 0.462772 17.7849 0.00138938 16.625 0ZM15.75 8.75C15.0578 8.75 14.3811 8.54473 13.8055 8.16014C13.2299 7.77556 12.7813 7.22893 12.5164 6.58939C12.2515 5.94985 12.1822 5.24612 12.3173 4.56718C12.4523 3.88825 12.7856 3.26461 13.2751 2.77513C13.7646 2.28564 14.3883 1.9523 15.0672 1.81725C15.7461 1.6822 16.4499 1.75152 17.0894 2.01642C17.7289 2.28133 18.2756 2.72993 18.6601 3.3055C19.0447 3.88108 19.25 4.55777 19.25 5.25C19.25 6.17826 18.8813 7.0685 18.2249 7.72487C17.5685 8.38125 16.6783 8.75 15.75 8.75Z" fill="#5B5B5B" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_834_1280">
                                            <rect width="21" height="21" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg> &nbsp; &nbsp;
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_834_1284)">
                                        <path d="M16.2092 0.958984H18.2083C18.8035 0.958984 19.3727 1.06823 19.8988 1.26757L14.4574 6.70898H10.4592L16.2092 0.958984ZM23 6.70898V5.75065C23 4.40898 22.4451 3.19382 21.5529 2.32365L17.1676 6.70898H23ZM0 8.62565V17.2507C0 19.8928 2.14954 22.0423 4.79167 22.0423H18.2083C20.8505 22.0423 23 19.8928 23 17.2507V8.62565H0ZM10.0836 0.958984L4.25308 6.70898H7.74908L13.4991 0.958984H10.0836ZM1.52375 6.70898L7.35425 0.958984H4.79167C2.14954 0.958984 0 3.10853 0 5.75065V6.70898H1.52375Z" fill="#5B5B5B" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_834_1284">
                                            <rect width="23" height="23" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.block}>
                    <div className={style.rowDirection}>
                        <div className={style.addRequestedMedia}>
                            <h1 className={style.title}>1. Add Requested Media</h1>
                            <p className={style.text}>You can upload a maximum of 5 items. Requested media will not be added to your profile.</p>

                            <div className={style.additionalMargin}>
                                <p className={style.sectionTitle}>Photo</p>
                                <UploadButton value={formData.photoFiles} onChange={handlePhotoChange} name="photo" />
                            </div>

                            <div className={style.additionalMargin}>
                                <p className={style.sectionTitle}>Video</p>
                                <UploadButton value={formData.videoFiles} onChange={handleVideoChange} name="video" />
                            </div>

                            <div className={style.additionalMargin}>

                                <p className={style.sectionTitle}>Media Instructions</p>
                                <p className={style.text}>In order to be considered, please attach a self-tape of you introducing yourself and telling us why you prefer ready-to-go meals, speaking some lines in Dutch. Thank you!</p>
                            </div>

                        </div>
                        <div className={style.rowMargin}>
                            <div className={style.requestedMediaDiv}>
                                <h1 className={style.sectionTitle18px}>Requested Media</h1>
                                <svg width="19" height="19" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_834_1280)">
                                        <path d="M9.7317 10.9687C9.48793 10.7247 9.19847 10.5312 8.87989 10.3992C8.5613 10.2672 8.21981 10.1992 7.87495 10.1992C7.53009 10.1992 7.18861 10.2672 6.87002 10.3992C6.55143 10.5312 6.26198 10.7247 6.0182 10.9687L0.0332031 16.9537C0.114106 18.051 0.606248 19.0773 1.41122 19.8275C2.21619 20.5776 3.27465 20.9962 4.37495 20.9997H16.625C17.4822 20.9995 18.3203 20.7459 19.0338 20.2708L9.7317 10.9687Z" fill="#f9f1e4" />
                                        <path d="M15.75 7C16.7165 7 17.5 6.2165 17.5 5.25C17.5 4.2835 16.7165 3.5 15.75 3.5C14.7835 3.5 14 4.2835 14 5.25C14 6.2165 14.7835 7 15.75 7Z" fill="#f9f1e4" />
                                        <path d="M16.625 0H4.375C3.2151 0.00138938 2.10311 0.462772 1.28294 1.28294C0.462772 2.10311 0.00138938 3.2151 0 4.375L0 14.5128L4.781 9.73175C5.18727 9.32537 5.66962 9.00301 6.20049 8.78307C6.73137 8.56314 7.30037 8.44993 7.875 8.44993C8.44963 8.44993 9.01863 8.56314 9.54951 8.78307C10.0804 9.00301 10.5627 9.32537 10.969 9.73175L20.2711 19.0339C20.7462 18.3203 20.9998 17.4823 21 16.625V4.375C20.9986 3.2151 20.5372 2.10311 19.7171 1.28294C18.8969 0.462772 17.7849 0.00138938 16.625 0ZM15.75 8.75C15.0578 8.75 14.3811 8.54473 13.8055 8.16014C13.2299 7.77556 12.7813 7.22893 12.5164 6.58939C12.2515 5.94985 12.1822 5.24612 12.3173 4.56718C12.4523 3.88825 12.7856 3.26461 13.2751 2.77513C13.7646 2.28564 14.3883 1.9523 15.0672 1.81725C15.7461 1.6822 16.4499 1.75152 17.0894 2.01642C17.7289 2.28133 18.2756 2.72993 18.6601 3.3055C19.0447 3.88108 19.25 4.55777 19.25 5.25C19.25 6.17826 18.8813 7.0685 18.2249 7.72487C17.5685 8.38125 16.6783 8.75 15.75 8.75Z" fill="#f4f1e4" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_834_1280">
                                            <rect width="21" height="21" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg> &nbsp; &nbsp;
                                <svg width="21" height="21" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_834_1284)">
                                        <path d="M16.2092 0.958984H18.2083C18.8035 0.958984 19.3727 1.06823 19.8988 1.26757L14.4574 6.70898H10.4592L16.2092 0.958984ZM23 6.70898V5.75065C23 4.40898 22.4451 3.19382 21.5529 2.32365L17.1676 6.70898H23ZM0 8.62565V17.2507C0 19.8928 2.14954 22.0423 4.79167 22.0423H18.2083C20.8505 22.0423 23 19.8928 23 17.2507V8.62565H0ZM10.0836 0.958984L4.25308 6.70898H7.74908L13.4991 0.958984H10.0836ZM1.52375 6.70898L7.35425 0.958984H4.79167C2.14954 0.958984 0 3.10853 0 5.75065V6.70898H1.52375Z" fill="#f9f1e4" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_834_1284">
                                            <rect width="23" height="23" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={style.noMediaText}>No Media</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={style.block}>
                    <h1 className={style.title}>2. Customize Submission Note</h1>
                    <div className={style.additionalMargin}>

                        <p className={style.sectionTitle}>Submission Note Instructions</p>
                        <p className={style.text}>In order to be considered, please attach a self-tape of you introducing yourself and telling us why you prefer ready-to-go meals, speaking some lines in Dutch. Thank you!</p>
                    </div>
                    <div className={style.additionalMargin}>

                        <p className={style.sectionTitle}>Your Submission Note</p>
                        <input type="text" value={formData.submissionNote} onChange={handleChange} className={style.input} name="submissionNote" id="submissionNote" />
                    </div>
                </div>

                {/* <button className={style.sendSubmissionButton}>Send Submission</button> */}
                <ThankButton theStyleName="style.sendSubmissionButton" onSubmit={handleSubmit} route="casting" text="Send Submission" />
                {/* <button onClick={handleSubmit}>Submit</button> */}
            </div>
        </>
    );
}

export default CastingSubmissionPage;