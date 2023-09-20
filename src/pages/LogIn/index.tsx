import AccessGateway from "components/AccessGateway";
import LogInForm from "./LogInForm";

const LogIn: React.FC = () => {

    return (
        <AccessGateway
            title="Sign in"
            type="signin"
        >
            <LogInForm />
        </AccessGateway>
    )
}

export default LogIn;