import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import StarsIcon from '@mui/icons-material/Stars';
import routes from 'routes';

const Logo: React.FC = () => {
    const navigate = useNavigate();

    return (
        <IconButton
            aria-label="share"
            onClick={() => navigate(routes.home)}
        >
            <StarsIcon />
        </IconButton>
    )
}

export default Logo;