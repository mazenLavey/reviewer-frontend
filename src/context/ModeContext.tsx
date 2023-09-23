
import { createContext, useEffect, useState } from 'react';

type Props = {
    children: React.ReactNode
}

type ModeContextType = {
    isDarkMode: Boolean,
    toggleMode: () => void
}

const ModeContext = createContext<ModeContextType>({
    isDarkMode: false,
    toggleMode: () => { }
})

const ModeProvider: React.FC<Props> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleMode = () => {
        setIsDarkMode(prev => {
            const darkModeStatus = !prev? "dark" : "light";
            localStorage.setItem("darkMode_reviewer", darkModeStatus);
            return !prev
        });
    }

    useEffect(() => {
        const themeMode = localStorage.getItem("darkMode_reviewer");
        const favThemeIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if(themeMode && themeMode === "dark") {
            setIsDarkMode(true)
        } else if (favThemeIsDark && themeMode === null) {
            setIsDarkMode(true)
        };
        
    }, []);

    return (
        <ModeContext.Provider value={{ isDarkMode, toggleMode }}>
            {children}
        </ModeContext.Provider>
    )
}

export { ModeContext, ModeProvider }