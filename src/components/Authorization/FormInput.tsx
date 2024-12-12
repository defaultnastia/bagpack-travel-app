import React from "react";

import css from "./AuthForms.module.css";
import { TextField } from "@mui/material";

const SignInForm = () => {
  const SignInSchema = yup.object({
	email: yup
	  .string()
	  //   .matches(EMAIL_REGEX)
	  .required("Please enter valid email"),
	password: yup.string().required("Please enter your password"),
	//   .matches(
	//     PASSWORD_REGEX,
	//     "Must contain 8 characters, one Uppercase, one Lowercase, one number and one special case character"
	//   ),
	// confirmPassword: yup
	//   .string()
	//   .required()
	//   .oneOf([yup.ref("password")], "Passwords must match"),
  });

type Props = {
  inputLabel: string;
  inputName: string;
  inputId: string;
  inputType: string;
  inputOnChange: {
    (e: React.ChangeEvent<string>): void;
    <T_1 = string | React.ChangeEvent<string>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<string>
      ? void
      : (e: string | React.ChangeEvent<string>) => void;
  };
  inputValue: string;
  error: boolean;
};

const FormInput = ({
  inputLabel,
  inputName,
  inputId,
  inputType,
  inputOnChange,
  inputValue = "",
  error = false,
}: Props) => {
  return (
    <div className={css.input}>
      <label htmlFor={inputId}>Email</label>
      <TextField
        id={inputId}
        name={inputName}
        type={inputType}
        onChange={inputOnChange}
        value={inputValue}
        variant="outlined"
        label={inputLabel}
        error={error}
      />
    </div>
  );
};

export default FormInput;
