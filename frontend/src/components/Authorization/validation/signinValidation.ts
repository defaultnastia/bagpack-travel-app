import { EMAIL_REGEX, PASSWORD_REGEX } from "@/constants";
import * as yup from "yup";

export const SigninSchema = yup.object({
  email: yup
    .string()
    .matches(EMAIL_REGEX, "Enter valid email")
    .required("Field is mandatory"),
  password: yup
    .string()
    .required("Field is mandatory")
    .matches(
      PASSWORD_REGEX,
      "Minimum 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces"
    ),
});
