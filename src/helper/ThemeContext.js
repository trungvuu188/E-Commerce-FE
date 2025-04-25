import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
    idDark: false,
    toggleTheme: () => {},
});

const ThemeProvider = ({children}) => {
    const prefersDark = window.matchMedia('(prefers-color_schema: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const defaultTheme = storedTheme ? storedTheme === 'dark' : prefersDark;
    const [isDark, setIsDark] = useState(defaultTheme);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;