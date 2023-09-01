import Button from '@mui/material/Button';
import { useIsAuthenticated } from 'react-auth-kit';
import { NavLink, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import routes from 'routes';
import { useSignOut } from 'react-auth-kit'

const NavBar: React.FC = () => {
    const navigate = useNavigate();

    const authentication = useIsAuthenticated();
    const isAuth = authentication();

    const signOut = useSignOut();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        signOut();
        navigate(routes.home)
    }

    return (
        <Stack direction={"row"} spacing={2}>
            {isAuth ?
                <>
                    <NavLink to={routes.newPost}>
                        <Button variant="contained">new post</Button>
                    </NavLink>

                    <NavLink to={routes.profile}>
                        <Button variant="contained">profile</Button>
                    </NavLink>
                    <Button
                        variant="contained"
                        onClick={handleClick}
                    >
                        log&nbsp;out
                    </Button>
                </>
                :
                <>
                    <NavLink to={routes.login}>
                        <Button
                            variant="outlined"
                        >
                            log&nbsp;in
                        </Button>
                    </NavLink>
                    <NavLink to={routes.register}>
                        <Button
                            variant="contained"
                        >
                            Sign&nbsp;up
                        </Button>
                    </NavLink>
                </>
            }
        </Stack>
    )
}

export default NavBar;