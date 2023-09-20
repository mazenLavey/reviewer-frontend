import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import routes from 'routes';
import { useTheme } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import route from 'routes';

type Props = {
    children: React.ReactNode,
    title: string,
    type: "signin" | "signup"
}

const AccessGateway: React.FC<Props> = ({ children, title, type}) => {
    const { palette } = useTheme();

    const navigate = useNavigate();

    const handleClose = () => {
        navigate(routes.home)
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: "100vh"
            }}
        >
            <Paper
                sx={{
                    position: "relative",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: "8px",
                    padding: "32px 16px",
                    borderRadius: "8px",
                    width: "clamp(300px, 50%, 500px)",
                    margin: "auto",
                }}
            >
                <IconButton
                    aria-label="back to home"
                    onClick={handleClose}
                    sx={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        cursor: "pointer",
                        ":hover": {
                            color: palette.primary.main
                        }
                    }}
                >
                    <HighlightOffIcon
                    />
                </IconButton>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {title}
                </Typography>
                {children}
                <Grid container>
                    <Grid item>
                        <Link
                            to={type === "signin" ? route.register : route.login}
                        >
                            <Typography
                                variant='body2'
                                component="span"
                                sx={{
                                    textDecorationLine: "underline",
                                    ":hover": {
                                        color: palette.primary.main
                                    }
                                }}
                            >
                                {type === "signin" ? "Don't have an account? Sign Up" : "Already have an account? Sign in"}
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

export default AccessGateway;