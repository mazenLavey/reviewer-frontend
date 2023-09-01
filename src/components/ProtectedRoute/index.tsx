import { Navigate } from "react-router-dom";
import { useIsAuthenticated } from 'react-auth-kit';
import routes from 'routes';

type Props = {
    children: React.ReactNode,
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
    const authentication = useIsAuthenticated();
    const isAuth = authentication();

    if (!isAuth) {
        return <Navigate to={routes.home} />
    }

    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoute;