
import * as yup from "yup";
import { LogInUserType } from "types/interfaces";

export const logInSchema = yup.object<LogInUserType>({
    userEmail: yup.string().email("Please enter a valid email address.").required("Email is required."),
    userPassword: yup.string().min(1, "Password should have at least one character.").required("Password is required."),
});
