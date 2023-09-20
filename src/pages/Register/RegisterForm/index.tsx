import { useState } from 'react';
import {
    IconButton,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    FormControl,
    TextField,
    Button,
    Box,
    CircularProgress
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import { useToggle } from 'react-use';
import { RegisterNewUserType } from 'types/interfaces';
import { RegisterSchema } from 'schema/RegisterSchema';
import { toastNotifications } from 'components/Toastify';
import { register } from 'api';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from 'components/ErrorMessage';
import route from 'routes';

const RegisterForm: React.FC = () => {
    const [showPassword, toggle] = useToggle(false);
    const [isLoading, setLoading] = useState<boolean>(false);

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

                navigate(route.login);
                actions.resetForm()
                setLoading(false)
                toastNotifications.success("Account created successfully!");

            } catch (error: any) {
                toastNotifications.error(error.message)
                setLoading(false)
            }
        },
    });

    const nameIsError = !!errors.userName && !!touched.userName;
    const emailIsError = !!errors.userEmail && !!touched.userEmail;
    const passwordIsError = !!errors.userPassword && !!touched.userPassword;
    const confirmPasswordIsError = !!errors.confirmPassword && !!touched.confirmPassword;

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                width: "100%",
            }}
        >
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
            {nameIsError && <ErrorMessage message={errors.userName} />}

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
            {emailIsError && <ErrorMessage message={errors.userEmail} />}

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
            {passwordIsError && <ErrorMessage message={errors.userPassword} />}

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
            {confirmPasswordIsError && <ErrorMessage message={errors.confirmPassword} />}

            <Button
                variant="contained"
                type='submit'
                fullWidth
                disabled={isLoading}
                endIcon={isLoading && <CircularProgress size={20} />}
            >
                register
            </Button>
        </Box>
    )
}

export default RegisterForm;