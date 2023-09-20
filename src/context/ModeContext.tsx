
import { createContext, useState } from 'react';

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
        setIsDarkMode(prev => !prev)
    }

    return (
        <ModeContext.Provider value={{ isDarkMode, toggleMode }}>
            {children}
        </ModeContext.Provider>
    )
}

export { ModeContext, ModeProvider }