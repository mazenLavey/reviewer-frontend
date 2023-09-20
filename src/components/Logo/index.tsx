import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import routes from 'routes';

const Logo: React.FC = () => {
    const { palette } = useTheme();

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(routes.home)
    }

    return (
        <Typography
            variant="h4"
            component="h1"
            sx={{
                fontFamily: "sans-serif",
                cursor: "pointer",
                fontWeight: "700",
                color: palette.text.primary,
                ":hover": {
                    opacity: "0.5"
                }
            }}
            onClick={handleClick}
        >
            R
        </Typography>
    )
}

export default Logo;