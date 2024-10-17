import React from 'react'
import { useNavigate } from 'react-router-dom';
import style from './style.module.scss'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.css';
import BuyButton from '../../elements/BuyButton';



const PlanPage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/device'); // Перенаправлення на DevicePage
    };
    return (
        <>
            <div className={style.container}>
                <IoIosArrowDropleftCircle className={style.arrowBack} onClick={handleBack} />
                <h3 className={style.title}>Choose one plan and watch everything on Netflix</h3>
                <div className={`row ${style.row}`}>
                    <div className={`col ${style.col} ${style.rowTitle}`}></div>
                    <div className={`col ${style.col} ${style.colTitle}`}><p className={style.specialColTitle}>Basic</p></div>
                    <div className={`col ${style.col} ${style.colTitle}`}><p className={style.specialColTitle}>Standard</p></div>
                    <div className={`col ${style.col} ${style.colTitle}`}><p className={style.specialColTitle}>Premium</p></div>
                    <div className={`col ${style.col} ${style.colTitle}`}><p className={style.specialColTitle}>Ultra</p></div>
                </div>
                <div className={`row ${style.row}`}>
                    <div className={`col ${style.col}`}><p className={style.rowTitle}>Monthly price</p></div>
                    <div className={`col ${style.col} ${style.rowContext}`}>EUR7.99</div>
                    <div className={`col ${style.col} ${style.rowContext}`}>EUR9.99</div>
                    <div className={`col ${style.col} ${style.rowContext}`}>EUR11.99</div>
                    <div className={`col ${style.col} ${style.rowContext}`}>EUR14.99</div>
                    <hr className={style.line} />
                </div>
                <div className={`row ${style.row}`}>
                    <div className={`col ${style.col}`}><p className={style.rowTitle}>HD available</p></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoIosClose className={style.closeMark} /></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoMdCheckmark className={style.checkMark} /></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoMdCheckmark className={style.checkMark} /></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoMdCheckmark className={style.checkMark} /></div>
                    <hr className={style.line} />
                </div>
                <div className={`row ${style.row}`}>
                    <div className={`col ${style.col}`}><p className={style.rowTitle}>Ultra HD available</p></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoIosClose className={style.closeMark} /></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoIosClose className={style.closeMark} /></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoMdCheckmark className={style.checkMark} /></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoMdCheckmark className={style.checkMark} /></div>
                    <hr className={style.line} />
                </div>
                <div className={`row ${style.row}`}>
                    <div className={`col ${style.col}`}><p className={style.rowTitle}>High dynamic range (HDR) available</p></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoIosClose className={style.closeMark} /></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoIosClose className={style.closeMark} /></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoIosClose className={style.closeMark} /></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoMdCheckmark className={style.checkMark} /></div>
                    <hr className={style.line} />
                </div>
                <div className={`row ${style.row}`}>
                    <div className={`col ${style.col}`}><p className={style.rowTitle}>Screens you can watch on at the same time</p></div>
                    <div className={`col ${style.col} ${style.rowContext}`}>1</div>
                    <div className={`col ${style.col} ${style.rowContext}`}>2</div>
                    <div className={`col ${style.col} ${style.rowContext}`}>4</div>
                    <div className={`col ${style.col} ${style.rowContext}`}>4</div>
                    <hr className={style.line} />
                </div>
                <div className={`row ${style.row}`}>
                    <div className={`col ${style.col}`}><p className={style.rowTitle}>Watch on your laptop, TV, phone and tablet</p></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoMdCheckmark className={style.checkMark} /></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoMdCheckmark className={style.checkMark} /></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoMdCheckmark className={style.checkMark} /></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoMdCheckmark className={style.checkMark} /></div>
                    <hr className={style.line} />
                </div>
                <div className={`row ${style.row}`}>
                    <div className={`col ${style.col}`}><p className={style.rowTitle}>Unlimited movies and TV shows</p></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoMdCheckmark className={style.checkMark} /></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoMdCheckmark className={style.checkMark} /></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoMdCheckmark className={style.checkMark} /></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoMdCheckmark className={style.checkMark} /></div>
                    <hr className={style.line} />
                </div>
                <div className={`row ${style.row}`}>
                    <div className={`col ${style.col}`}><p className={style.rowTitle}>Cancel anytime</p></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoMdCheckmark className={style.checkMark} /></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoMdCheckmark className={style.checkMark} /></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoMdCheckmark className={style.checkMark} /></div>
                    <div className={`col ${style.col} ${style.rowContext}`}><IoMdCheckmark className={style.checkMark} /></div>
                </div>
                <div className={`row ${style.row}`}>
                    <div className={`col ${style.col} ${style.rowTitle}`}></div>
                    <div className={`col ${style.col} ${style.colTitle}`}><BuyButton subscription={"Basic"} price={"EUR7.99"} devices={"two"} /></div>
                    <div className={`col ${style.col} ${style.colTitle}`}><BuyButton subscription={"Standard"} price={"EUR9.99"} devices={"three"} /></div>
                    <div className={`col ${style.col} ${style.colTitle}`}><BuyButton subscription={"Premium"} price={"EUR11.99"} devices={"four"} /></div>
                    <div className={`col ${style.col} ${style.colTitle}`}><BuyButton subscription={"Ultra"} price={"EUR14.99"} devices={"four"} /></div>
                </div>
            </div>
        </>
    );
}

export default PlanPage;