import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { useToggle } from 'react-use';
import { LogInUserType } from 'types/interfaces';
import { logInSchema } from 'schema/logInSchema';
import { toastNotifications } from 'components/Toastify';
import { useSignIn } from 'react-auth-kit'
import { logIn } from 'api';
import { useNavigate } from 'react-router-dom';
import routes from 'routes';
import LoadingBackDrop from 'components/LoadingBackDrop';

const LogInForm: React.FC = () => {
    const [showPassword, toggle] = useToggle(false);
    const [isLoading, setLoading] = useState<boolean>(false);

    const signIn = useSignIn();
    const navigate = useNavigate();

    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik<LogInUserType>({
        initialValues: {
            userEmail: '',
            userPassword: '',
        },
        validationSchema: logInSchema,
        onSubmit: async (values, actions) => {
            try {
                setLoading(true);
                const response = await logIn(values);
                const data = response.data;

                signIn({
                    token: data.token,
                    tokenType: "Bearer",
                    expiresIn: 3600,
                    authState: {
                        userName: data.userName,
                        userEmail: data.userEmail,
                        userId: data.userId
                    }
                })

                navigate(routes.home);
                setLoading(false)
                toastNotifications.success(data.message)
            } catch (error: any) {
                toastNotifications.error(error.message)
            }
        },
    });

    const emailIsError = !!errors.userEmail && !!touched.userEmail;
    const passwordIsError = !!errors.userPassword && !!touched.userPassword;

    return (
        <>
        <form onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                id="userEmail"
                name="userEmail"
                label="Your Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userEmail}
                error={emailIsError}
            />
            {emailIsError && <p>{errors.userEmail}</p>}

            <FormControl variant="outlined">
                <InputLabel htmlFor="userPassword">Your Password</InputLabel>
                <OutlinedInput
                    id="userPassword"
                    name="userPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userPassword}
                    error={passwordIsError}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={toggle}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Your Password"
                />
            </FormControl>
            {passwordIsError && <p>{errors.userPassword}</p>}

            <Button
                variant="contained"
                type='submit'
                fullWidth
            >
                log&nbsp;in
            </Button>
        </form >
        <LoadingBackDrop isActive={isLoading} />
        </>
    )
}

export default LogInForm;