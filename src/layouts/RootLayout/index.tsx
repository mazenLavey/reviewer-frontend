import { Outlet, useLocation } from "react-router-dom";
import Header from "layouts/Header";
import Container from "@mui/material/Container";
import Toastify from "components/Toastify";
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import route from "routes";
import Footer from "layouts/Footer";

const excludedPaths = [
    route.login,
    route.register
];

const shouldDisplayHeaderFooter = (pathname: string) => {
    if (pathname.includes(`reset_password`)) {
        return false;
    }

    return !excludedPaths.includes(pathname);
};

const RootLayout: React.FC = () => {
    const { palette } = useTheme();

    const { pathname } = useLocation();
    const shouldDisplay = shouldDisplayHeaderFooter(pathname);
    
    return (
        <Box
            sx={{
                background: palette.background.default,
                height: "100%",
                minHeight: "100vh",
            }}
        >
            {shouldDisplay && <Header />}
            <main>
                <Container fixed>
                    <Outlet />
                </Container>
            </main>
            {shouldDisplay && <Footer />}
            <Toastify />
        </Box>
    )
}

export default RootLayout;