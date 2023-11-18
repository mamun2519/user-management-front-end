import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const SingupSchema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  gender: yup.string().required("Gender is required"),
  available: yup.string().required("Availability is required"),
  avatar: yup
    .string()

    .required("Avatar URL is required"),
  domain: yup.string().required("Domain is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});
