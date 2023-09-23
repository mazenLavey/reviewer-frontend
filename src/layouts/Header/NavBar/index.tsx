import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import routes from 'routes';
import Stack from '@mui/material/Stack';
import { useSignOut } from 'react-auth-kit'

type Props = {
    isAuth: boolean,
    direction: "column" | "row"
}

const btnWidth = "100px";

const NavBar: React.FC<Props> = ({ isAuth, direction }) => {
    const navigate = useNavigate();

    const signOut = useSignOut();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        signOut();
        navigate(routes.home)
    }

    return (
        <Stack direction={direction} spacing={2} alignItems="center">
            {isAuth ?
                <>
                    <NavLink
                        to={routes.newPost}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                width: btnWidth
                            }}
                        >
                            +&nbsp;post
                        </Button>
                    </NavLink>

                    <Button
                        variant="outlined"
                        onClick={handleClick}
                        sx={{
                            width: btnWidth
                        }}
                    >
                        log&nbsp;out
                    </Button>
                </>
                :
                <>
                    <NavLink to={routes.login}>
                        <Button
                            variant="outlined"
                            sx={{
                                width: btnWidth
                            }}
                        >
                            log&nbsp;in
                        </Button>
                    </NavLink>
                    <NavLink to={routes.register}>
                        <Button
                            variant="contained"
                            sx={{
                                width: btnWidth
                            }}
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