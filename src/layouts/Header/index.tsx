import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Logo from 'components/Logo';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import './index.scss';

const Header: React.FC = () => {

    return (
        <Container fixed>
            <AppBar
                position='static'
                sx={{
                    backgroundColor: "white",
                    boxShadow: "unset",
                    height: "80px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                }}
            >
                <Stack direction={"row"} spacing={4}>
                    <Logo />
                    <SearchBar />
                    <NavBar />
                </Stack>
            </AppBar>
        </Container>
    )
}

export default Header;