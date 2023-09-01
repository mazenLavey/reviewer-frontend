
import * as yup from "yup";
import { RegisterNewUserType } from "types/interfaces";

export const RegisterSchema = yup.object<RegisterNewUserType>({
    userName: yup.string().min(3, "Your name should have at least one character.").required(),
    userEmail: yup.string().email().required(),
    userPassword: yup.string().min(1, "Password should have at least one character.").required(),
    confirmPassword: yup.string().required().oneOf([yup.ref("userPassword")], 'Passwords must match'),
});
