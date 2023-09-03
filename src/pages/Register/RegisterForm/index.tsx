import { useState } from 'react';
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
import { RegisterNewUserType } from 'types/interfaces';
import { RegisterSchema } from 'schema/RegisterSchema';
import { toastNotifications } from 'components/Toastify';
import { register } from 'api';
import { useSignIn } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom';
import LoadingBackDrop from 'components/LoadingBackDrop';
import routes from 'routes';

const RegisterForm: React.FC = () => {
    const [showPassword, toggle] = useToggle(false);
    const [isLoading, setLoading] = useState<boolean>(false);

    const signIn = useSignIn();
    const navigate = useNavigate();

    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik<RegisterNewUserType>({
        initialValues: {
            userName: '',
            userEmail: '',
            userPassword: '',
            confirmPassword: '',
        },
        validationSchema: RegisterSchema,
        onSubmit: async (values, actions) => {
            try {
                setLoading(true);
                const response = await register(values);

                navigate(`/${routes.login}`);
                setLoading(false)
                toastNotifications.success("Account created successfully!");

            } catch (error: any) {
                toastNotifications.error(error.message)
            }
        },
    });

    const nameIsError = !!errors.userName && !!touched.userName;
    const emailIsError = !!errors.userEmail && !!touched.userEmail;
    const passwordIsError = !!errors.userPassword && !!touched.userPassword;
    const confirmPasswordIsError = !!errors.confirmPassword && !!touched.confirmPassword;

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    id="userName"
                    name="userName"
                    label="Your Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                    error={nameIsError}
                />
                {nameIsError && <p>{errors.userName}</p>}

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

                <FormControl variant="outlined">
                    <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                    <OutlinedInput
                        id="confirmPassword"
                        name="confirmPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        error={confirmPasswordIsError}
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
                {confirmPasswordIsError && <p>{errors.confirmPassword}</p>}

                <Button
                    variant="contained"
                    type='submit'
                    fullWidth
                >
                    register
                </Button>
            </form >
            <LoadingBackDrop isActive={isLoading} />
        </>
    )
}

export default RegisterForm;