import { useState } from 'react';
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
import useMedia from 'hooks/useMedia';
import DrawerMenu from './DrawerMenu';
import "./index.scss";

const Header: React.FC = () => {
    const authentication = useIsAuthenticated();
    const isAuth = authentication();

    const { palette } = useTheme();

    const { isMobile } = useMedia()

    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

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
                    justifyContent={isMobile? "space-between": "flex-start"}
                    alignItems="center"
                >
                    <Logo />
                    <DrawerMenu
                        color={palette.text.primary}
                        isOpen={isDrawerOpen}
                        onClose={() => setIsDrawerOpen(false)}
                        onOpen={() => setIsDrawerOpen(true)}
                        isActive={isMobile}
                    >
                        <Stack
                            direction={isMobile ? "column" : "row"}
                            spacing={isMobile ? 2 : 4}
                            alignItems={isMobile ? "start" : "center"}
                        >
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

                            {isAuth && 
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
                                    to={routes.profile}
                                >
                                    profile
                                </NavLink>
                            </Box>
                            }
                        </Stack>

                        <Stack
                            direction={isMobile ? "column" : "row"}
                            sx={{
                                marginLeft: isMobile? "unset" : "auto !important"
                            }}
                            spacing={2}
                        >
                            <NavBar
                                isAuth={isAuth}
                                direction={isMobile ? "column" : "row"}
                            />
                            <ModeToggle />
                        </Stack>
                    </DrawerMenu>
                </Stack>
            </AppBar>
        </Container>
    )
}

export default Header;