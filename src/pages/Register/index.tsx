import RegisterForm from './RegisterForm';
import AccessGateway from "components/AccessGateway";

const Register: React.FC = () => {

    return (
        <AccessGateway
            title="Sign up"
            type='signup'
        >
            <RegisterForm />
        </AccessGateway>
    )
}

export default Register;