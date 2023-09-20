import { useContext } from "react";
import { ModeContext } from 'context/ModeContext';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ModeToggle: React.FC = () => {
    const { palette } = useTheme();
    const { toggleMode, isDarkMode } = useContext(ModeContext);

    return (
        <Tooltip
            title={isDarkMode ? "Switch to light" : "Switch to dark"}
            arrow
        >
            <IconButton
                sx={{
                    background: palette.background.default
                }}
                onClick={toggleMode}

            >
                {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Tooltip>
    )
}

export default ModeToggle;