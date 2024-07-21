"use client"

import React, { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";


const themes = {
    winter: 'garden',
    dracula: 'black',
};

const getThemeFromLocalStorage = () => {
    if (typeof localStorage !== 'undefined') {
        const theme = localStorage.getItem('theme') || themes.winter;
        document.documentElement.setAttribute('data-theme', theme);
        return theme;
    } else {
        return themes.winter;
    }
};

const Theme = () => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage())

    const isDarkTheme = theme === 'black';

    const handleTheme = () => {
        const { dracula, winter } = themes;
        setTheme(theme === dracula ? winter : dracula)
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme);
    }

    return (
        <label className='swap swap-rotate'>
            <input
                type='checkbox'
                onChange={handleTheme}
                defaultChecked={isDarkTheme}
            />
            {/* sun icon*/}
            <BsSunFill className='swap-on text-yellow-500' size={25} />
            {/* moon icon*/}
            <BsMoonFill className='swap-off text-gray-500' size={25} />
        </label>
    )
};

export default Theme;
