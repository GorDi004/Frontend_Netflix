import React from 'react';
import { Carousel } from 'antd';
import style from './style.module.scss'

const CarouselBoard = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <div className={style.contentArea}>
          <p className={style.filmDuration}>Duration: 59m</p>
          <h1 className={style.filmTitle}>Bridgerton1</h1>
          <div className={style.filmInfo}>
            <div className={`${style.rating}`}>
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5245 0.463526C10.6741 0.00287056 11.3259 0.00287008 11.4755 0.463525L13.5819 6.9463C13.6488 7.15232 13.8408 7.2918 14.0574 7.2918H20.8738C21.3582 7.2918 21.5596 7.9116 21.1677 8.1963L15.6531 12.2029C15.4779 12.3302 15.4046 12.5559 15.4715 12.7619L17.5779 19.2447C17.7276 19.7053 17.2003 20.0884 16.8085 19.8037L11.2939 15.7971C11.1186 15.6698 10.8814 15.6698 10.7061 15.7971L5.19153 19.8037C4.79967 20.0884 4.27243 19.7053 4.42211 19.2447L6.52849 12.7619C6.59543 12.5559 6.5221 12.3302 6.34685 12.2029L0.832272 8.1963C0.440415 7.9116 0.641802 7.2918 1.12616 7.2918H7.94256C8.15917 7.2918 8.35115 7.15232 8.41809 6.9463L10.5245 0.463526Z" fill="#F9F1E4" />
              </svg>
              <p>7.4</p>
            </div>
            <p>	&#8226; Season 3</p>
            <p>	&#8226; Episodes 25</p>
            <p>	&#8226; Drama</p>
          </div>
          <p className={style.filmContext}>New debutantes strive to make a name for themselves at the ball, and
            a shadowy flower with a double life finds its own light amidst secrets
            and suprises.
          </p>
          <div className={style.buttons}>
            <button className={style.buttonWatch}>
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 6.63397C14.1667 7.01887 14.1667 7.98112 13.5 8.36602L2.25 14.8612C1.58333 15.2461 0.749999 14.765 0.749999 13.9952L0.75 1.00481C0.75 0.23501 1.58333 -0.246117 2.25 0.138783L13.5 6.63397Z" fill="#262425" />
              </svg>
              <p>Watch</p>
            </button>
            <button className={style.buttonAddList}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.125 5.625H9.375V1.875C9.375 1.37772 9.17746 0.900805 8.82583 0.549175C8.47419 0.197544 7.99728 0 7.5 0C7.00272 0 6.52581 0.197544 6.17417 0.549175C5.82254 0.900805 5.625 1.37772 5.625 1.875V5.625H1.875C1.37772 5.625 0.900805 5.82254 0.549175 6.17417C0.197544 6.52581 0 7.00272 0 7.5C0 7.99728 0.197544 8.47419 0.549175 8.82583C0.900805 9.17746 1.37772 9.375 1.875 9.375H5.625V13.125C5.625 13.6223 5.82254 14.0992 6.17417 14.4508C6.52581 14.8025 7.00272 15 7.5 15C7.99728 15 8.47419 14.8025 8.82583 14.4508C9.17746 14.0992 9.375 13.6223 9.375 13.125V9.375H13.125C13.6223 9.375 14.0992 9.17746 14.4508 8.82583C14.8025 8.47419 15 7.99728 15 7.5C15 7.00272 14.8025 6.52581 14.4508 6.17417C14.0992 5.82254 13.6223 5.625 13.125 5.625Z" fill="#F9F1E4" />
              </svg>
              <p>Add List</p>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className={style.contentArea}>
          <p className={style.filmDuration}>Duration: 59m</p>
          <h1 className={style.filmTitle}>Bridgerton2</h1>
          <div className={style.filmInfo}>
            <div className={`${style.rating}`}>
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5245 0.463526C10.6741 0.00287056 11.3259 0.00287008 11.4755 0.463525L13.5819 6.9463C13.6488 7.15232 13.8408 7.2918 14.0574 7.2918H20.8738C21.3582 7.2918 21.5596 7.9116 21.1677 8.1963L15.6531 12.2029C15.4779 12.3302 15.4046 12.5559 15.4715 12.7619L17.5779 19.2447C17.7276 19.7053 17.2003 20.0884 16.8085 19.8037L11.2939 15.7971C11.1186 15.6698 10.8814 15.6698 10.7061 15.7971L5.19153 19.8037C4.79967 20.0884 4.27243 19.7053 4.42211 19.2447L6.52849 12.7619C6.59543 12.5559 6.5221 12.3302 6.34685 12.2029L0.832272 8.1963C0.440415 7.9116 0.641802 7.2918 1.12616 7.2918H7.94256C8.15917 7.2918 8.35115 7.15232 8.41809 6.9463L10.5245 0.463526Z" fill="#F9F1E4" />
              </svg>
              <p>7.4</p>
            </div>
            <p>	&#8226; Season 3</p>
            <p>	&#8226; Episodes 25</p>
            <p>	&#8226; Drama</p>
          </div>
          <p className={style.filmContext}>New debutantes strive to make a name for themselves at the ball, and
            a shadowy flower with a double life finds its own light amidst secrets
            and suprises.
          </p>
          <div className={style.buttons}>
            <button className={style.buttonWatch}>
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 6.63397C14.1667 7.01887 14.1667 7.98112 13.5 8.36602L2.25 14.8612C1.58333 15.2461 0.749999 14.765 0.749999 13.9952L0.75 1.00481C0.75 0.23501 1.58333 -0.246117 2.25 0.138783L13.5 6.63397Z" fill="#262425" />
              </svg>
              <p>Watch</p>
            </button>
            <button className={style.buttonAddList}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.125 5.625H9.375V1.875C9.375 1.37772 9.17746 0.900805 8.82583 0.549175C8.47419 0.197544 7.99728 0 7.5 0C7.00272 0 6.52581 0.197544 6.17417 0.549175C5.82254 0.900805 5.625 1.37772 5.625 1.875V5.625H1.875C1.37772 5.625 0.900805 5.82254 0.549175 6.17417C0.197544 6.52581 0 7.00272 0 7.5C0 7.99728 0.197544 8.47419 0.549175 8.82583C0.900805 9.17746 1.37772 9.375 1.875 9.375H5.625V13.125C5.625 13.6223 5.82254 14.0992 6.17417 14.4508C6.52581 14.8025 7.00272 15 7.5 15C7.99728 15 8.47419 14.8025 8.82583 14.4508C9.17746 14.0992 9.375 13.6223 9.375 13.125V9.375H13.125C13.6223 9.375 14.0992 9.17746 14.4508 8.82583C14.8025 8.47419 15 7.99728 15 7.5C15 7.00272 14.8025 6.52581 14.4508 6.17417C14.0992 5.82254 13.6223 5.625 13.125 5.625Z" fill="#F9F1E4" />
              </svg>
              <p>Add List</p>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className={style.contentArea}>
          <p className={style.filmDuration}>Duration: 59m</p>
          <h1 className={style.filmTitle}>Bridgerton3</h1>
          <div className={style.filmInfo}>
            <div className={`${style.rating}`}>
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5245 0.463526C10.6741 0.00287056 11.3259 0.00287008 11.4755 0.463525L13.5819 6.9463C13.6488 7.15232 13.8408 7.2918 14.0574 7.2918H20.8738C21.3582 7.2918 21.5596 7.9116 21.1677 8.1963L15.6531 12.2029C15.4779 12.3302 15.4046 12.5559 15.4715 12.7619L17.5779 19.2447C17.7276 19.7053 17.2003 20.0884 16.8085 19.8037L11.2939 15.7971C11.1186 15.6698 10.8814 15.6698 10.7061 15.7971L5.19153 19.8037C4.79967 20.0884 4.27243 19.7053 4.42211 19.2447L6.52849 12.7619C6.59543 12.5559 6.5221 12.3302 6.34685 12.2029L0.832272 8.1963C0.440415 7.9116 0.641802 7.2918 1.12616 7.2918H7.94256C8.15917 7.2918 8.35115 7.15232 8.41809 6.9463L10.5245 0.463526Z" fill="#F9F1E4" />
              </svg>
              <p>7.4</p>
            </div>
            <p>	&#8226; Season 3</p>
            <p>	&#8226; Episodes 25</p>
            <p>	&#8226; Drama</p>
          </div>
          <p className={style.filmContext}>New debutantes strive to make a name for themselves at the ball, and
            a shadowy flower with a double life finds its own light amidst secrets
            and suprises.
          </p>
          <div className={style.buttons}>
            <button className={style.buttonWatch}>
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 6.63397C14.1667 7.01887 14.1667 7.98112 13.5 8.36602L2.25 14.8612C1.58333 15.2461 0.749999 14.765 0.749999 13.9952L0.75 1.00481C0.75 0.23501 1.58333 -0.246117 2.25 0.138783L13.5 6.63397Z" fill="#262425" />
              </svg>
              <p>Watch</p>
            </button>
            <button className={style.buttonAddList}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.125 5.625H9.375V1.875C9.375 1.37772 9.17746 0.900805 8.82583 0.549175C8.47419 0.197544 7.99728 0 7.5 0C7.00272 0 6.52581 0.197544 6.17417 0.549175C5.82254 0.900805 5.625 1.37772 5.625 1.875V5.625H1.875C1.37772 5.625 0.900805 5.82254 0.549175 6.17417C0.197544 6.52581 0 7.00272 0 7.5C0 7.99728 0.197544 8.47419 0.549175 8.82583C0.900805 9.17746 1.37772 9.375 1.875 9.375H5.625V13.125C5.625 13.6223 5.82254 14.0992 6.17417 14.4508C6.52581 14.8025 7.00272 15 7.5 15C7.99728 15 8.47419 14.8025 8.82583 14.4508C9.17746 14.0992 9.375 13.6223 9.375 13.125V9.375H13.125C13.6223 9.375 14.0992 9.17746 14.4508 8.82583C14.8025 8.47419 15 7.99728 15 7.5C15 7.00272 14.8025 6.52581 14.4508 6.17417C14.0992 5.82254 13.6223 5.625 13.125 5.625Z" fill="#F9F1E4" />
              </svg>
              <p>Add List</p>
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselBoard;