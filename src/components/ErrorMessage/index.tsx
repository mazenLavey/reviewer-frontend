import Typography from '@mui/material/Typography';
import ErrorIcon from '@mui/icons-material/Error';

type Props = {
    message: string | undefined
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
    return (
        <Typography
            variant="body2"
            component="p"
            color="error"
            sx={{
                display: "flex",
                alignItems: "center",
                gap: "4px"
            }}
        >
            <ErrorIcon fontSize='small' color='error' /> {message}
        </Typography>
    )
}

export default ErrorMessage;