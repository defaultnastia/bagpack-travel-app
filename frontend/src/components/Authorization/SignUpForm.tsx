"use client";

import React from "react";
import { Form, Formik, Field, ErrorMessage, FormikHelpers } from "formik";
import { Button, TextField } from "@mui/material";

import PasswordRevealButton from "./PasswordRevealButton";
import css from "./AuthForms.module.css";
import { SignupSchema } from "./validation";

const SignupForm = () => {
  interface SigninFormValues {
    email: string;
    password: string;
    confirmPassword: string;
  }

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [showConfirmPassword, setConfirmShowPassword] = React.useState(false);
  const handleClickShowConfirmPassword = () =>
    setConfirmShowPassword((show) => !show);

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (
    values: SigninFormValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    console.log(values);
    alert(JSON.stringify(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
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
                <PasswordRevealButton
                  showPassword={showPassword}
                  handleClickShowPassword={handleClickShowPassword}
                />
              ),
            }}
          />

          <Field
            as={TextField}
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            variant="standard"
            label="Confirm Password"
            error={
              props.errors.confirmPassword && props.touched.confirmPassword
            }
            helperText={<ErrorMessage name="confirmPassword" />}
            autoComplete="off"
            InputProps={{
              endAdornment: (
                <PasswordRevealButton
                  showPassword={showConfirmPassword}
                  handleClickShowPassword={handleClickShowConfirmPassword}
                />
              ),
            }}
          />

          <div className={css.buttonGroup}>
            <Button variant="contained" type="submit">
              Sign Up
            </Button>
            <Button variant="text" href="/sign-in" className={css.linkButton}>
              Go To Sign In
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
