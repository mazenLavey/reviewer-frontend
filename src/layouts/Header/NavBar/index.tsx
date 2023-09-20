import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import routes from 'routes';
import Stack from '@mui/material/Stack';
import { useSignOut } from 'react-auth-kit'

type Props = {
    isAuth: boolean
}

const NavBar: React.FC<Props> = ({ isAuth }) => {
    const navigate = useNavigate();

    const signOut = useSignOut();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        signOut();
        navigate(routes.home)
    }

    return (
        <Stack direction={"row"} spacing={2} alignItems="center">
            {isAuth ?
                <>
                    <NavLink
                        to={routes.newPost}
                    >
                        <Button
                            variant="contained"
                        >
                            +&nbsp;post
                        </Button>
                    </NavLink>

                    <Button
                        variant="outlined"
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