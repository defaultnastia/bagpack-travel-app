"use client";

import React from "react";
import { Form, Formik, Field, ErrorMessage, FormikHelpers } from "formik";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/constants";
import * as yup from "yup";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import css from "./AuthForms.module.css";
import Icon from "../Icon";

const SignInForm = () => {
  interface SignInFormValues {
    email: string;
    password: string;
  }

  const SignInSchema = yup.object({
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
    // confirmPassword: yup
    //   .string()
    //   .required()
    //   .oneOf([yup.ref("password")], "Passwords must match"),
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (
    values: SignInFormValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    console.log(values);
    alert(JSON.stringify(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form className={css.form} autoComplete="off">
          <Field
            as={TextField}
            label="Email"
            id="email"
            name="email"
            variant="standard"
            error={props.errors.email && props.touched.email}
            helperText={<ErrorMessage name="email" />}
            autoComplete="off"
          />

          <Field
            as={TextField}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            variant="standard"
            label="Password"
            error={props.errors.password && props.touched.password}
            helperText={<ErrorMessage name="password" />}
            autoComplete="off"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                  >
                    {showPassword ? (
                      <Icon
                        name="close"
                        className="stroke-[var(--foreground)] fill-none pb-1"
                      />
                    ) : (
                      <Icon
                        name="open"
                        className="stroke-[var(--foreground)] fill-none pb-1"
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <div className={css.buttonGroup}>
            <Button variant="contained" type="submit">
              Sign In
            </Button>
            <Button variant="text" href="/sign-up">
              Go To Sign Up
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
