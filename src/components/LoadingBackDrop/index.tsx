import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

type Props = {
    isActive: boolean
}

const LoadingBackDrop: React.FC<Props> = ({ isActive }) => {

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isActive}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default LoadingBackDrop;