import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  password: Yup.string().required("Password is required"),
});
