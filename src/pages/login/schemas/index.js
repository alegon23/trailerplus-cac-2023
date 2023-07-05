import * as yup from "yup";

//min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email("Ingresa una dirección de correo válida").required("Obligatorio"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .matches(passwordRules, "La contraseña debe contener al menos una letra mayúscula y un número")
    .required("Obligatorio"),
});
