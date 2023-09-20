import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { LogInUserType } from 'types/interfaces';
import { logInSchema } from 'schema/logInSchema';
import { toastNotifications } from 'components/Toastify';
import { logIn } from 'api';
import { useSignIn } from 'react-auth-kit'
import routes from 'routes';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorMessage from 'components/ErrorMessage';

const LogInForm: React.FC = () => {
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
                actions.resetForm()
                setLoading(false)
                toastNotifications.success(data.message)
            } catch (error: any) {
                toastNotifications.error(error.message)
                setLoading(false)
            }
        },
    });

    const emailIsError = !!errors.userEmail && !!touched.userEmail;
    const passwordIsError = !!errors.userPassword && !!touched.userPassword;

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
                id="userEmail"
                name="userEmail"
                label="Your Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userEmail}
                error={emailIsError}
            />
            {emailIsError && <ErrorMessage message={errors.userEmail} />}

            <TextField
                label="Password"
                type="password"
                id="userPassword"
                name="userPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userPassword}
                error={passwordIsError}
            />
            {passwordIsError && <ErrorMessage message={errors.userPassword} />}

            <Button
                variant="contained"
                type='submit'
                fullWidth
                disabled={isLoading}
                endIcon={isLoading && <CircularProgress size={20} />}
            >
                Sign In
            </Button>
        </Box>
    )
}

export default LogInForm;