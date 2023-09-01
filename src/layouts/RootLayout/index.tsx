
import { Outlet } from "react-router-dom";
import Header from "layouts/Header";
import Container from "@mui/material/Container";
import Toastify from "components/Toastify";

const RootLayout: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Container fixed>
                    <Outlet />
                </Container>
            </main>
            <Toastify />
        </>
    )
}

export default RootLayout;