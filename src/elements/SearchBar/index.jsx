import React from 'react';
import style from './style.module.scss'


const SearchBar = () => {
    return (
        <div className={style.search}>
            <button className={style.searchBar_button}>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_65_670)">
                        <path d="M11 2.01465C15.968 2.01465 20 6.0762 20 11.0806C20 16.085 15.968 20.1466 11 20.1466C6.032 20.1466 2 16.085 2 11.0806C2 6.0762 6.032 2.01465 11 2.01465ZM11 18.1319C14.867 18.1319 18 14.976 18 11.0806C18 7.18427 14.867 4.02931 11 4.02931C7.132 4.02931 4 7.18427 4 11.0806C4 14.976 7.132 18.1319 11 18.1319ZM19.485 18.2035L22.314 21.0522L20.899 22.4776L18.071 19.6278L19.485 18.2035Z" fill="#6C6C6C" />
                    </g>
                    <defs>
                        <clipPath id="clip0_65_670">
                            <rect width="24" height="24.1759" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            </button>
            <input
                type="text"
                className={style.searchBar_input}
                placeholder="Search"
            />

        </div>
    );
}

export default SearchBar;