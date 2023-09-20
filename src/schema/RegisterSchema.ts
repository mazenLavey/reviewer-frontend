
import * as yup from "yup";
import { RegisterNewUserType } from "types/interfaces";

export const RegisterSchema = yup.object<RegisterNewUserType>({
    userName: yup.string().min(3, "Name should have at least 3 characters.").required("Name is required."),
    userEmail: yup.string().email("Please enter a valid email address.").required("Email is required."),
    userPassword: yup.string().min(1, "Password should have at least one character.").required("Password is required."),
    confirmPassword: yup.string()
        .required("Confirm password is required.")
        .oneOf([yup.ref("userPassword")], 'Passwords must match'),
});

