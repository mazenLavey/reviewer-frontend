import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Logo from 'components/Logo';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import ModeToggle from 'components/ModeToggle';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import routes from 'routes';
import { useIsAuthenticated } from 'react-auth-kit';
import { useTheme } from '@mui/material/styles';
import "./index.scss";

const Header: React.FC = () => {
    const authentication = useIsAuthenticated();
    const isAuth = authentication();

    const { palette } = useTheme();

    return (
        <Container fixed>
            <AppBar
                position='static'
                sx={{
                    background: "transparent",
                    boxShadow: "unset",
                    height: "80px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    marginBottom: "16px"
                }}
            >
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Stack
                        direction="row"
                        spacing={4}
                        alignItems="center"
                    >
                        <Logo />
                        <Box
                            sx={{
                                color: palette.text.primary,
                                fontSize: "18px",
                                fontWeight: "600",
                                textTransform: "capitalize",
                                ":hover": {
                                    opacity: "0.5"
                                }
                            }}
                        >
                            <NavLink
                                className="Header__NavLink"
                                to={routes.home}
                            >
                                home
                            </NavLink>
                        </Box>

                        {isAuth && <Box
                            sx={{
                                color: palette.text.primary,
                                fontSize: "18px",
                                fontWeight: "600",
                                textTransform: "capitalize",
                                ":hover": {
                                    opacity: "0.5"
                                }
                            }}
                        >
                            <NavLink
                                className="Header__NavLink"
                                to={routes.profile}
                            >
                                profile
                            </NavLink>
                        </Box>
                        }
                    </Stack>

                    <Stack direction="row" spacing={2}>
                        <NavBar isAuth={isAuth} />
                        <ModeToggle />
                    </Stack>

                </Stack>
            </AppBar>
        </Container>
    )
}

export default Header;