import React, { useState, useContext } from "react";
import loginImg from "../assests/loginImg.png";
import { Avatar, Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoginIcon from "@mui/icons-material/Login";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import "../style/login.css";
import { blue } from "@mui/material/colors";
import userContext from "../context/UserContext"
import useAuth from "../context/UserContext";

const LoginPage = () => {

  const {validUser, setValidUser, password, setPassword} = useAuth()

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("invalid email addresse")
      .required("you must enter a email"),
    password: Yup.string()
      .required("You must enter your password")
      .min(8, "Your password is too short, must be 8 character")
      .matches(/[a-zA-Z]/, "Password must contain Latin letters.")
      .matches(
        /^[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]*$/,
        "Need one special character"
      ),
  });

  return (
    <Box
      sx={{ display: "flex", p: 10, gap: 5, justifyContent: "space-around" }}
    >
      <Avatar src={loginImg} sx={{ width: 400, height: 400 }} />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setValidUser(values);
          console.log(values);
        }}
        noValidate
        autoComplete="off"
      >
        {({
          handleSubmit,
          handleBlur,
          handleChange,
          values,
          isSubmitting,
          touched,
          errors,
        }) => (
          <Form
            className="loginForm"
            sx={{
              "& > :not(style)": { m: 1, width: "45ch" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            onSubmit={handleSubmit}
          >
            <LoginIcon sx={{ p: 0, m: 0, color: "#3B3A52" }} />
            <Typography
              sx={{
                textAlign: "center",
                fontSize: 25,
                fontWeight: "bold",
                color: "#3B3A52",
              }}
            >
              Log-in
            </Typography>
            <TextField
              type="email"
              id="email"
              name="email"
              value={values.email}
              label="E-mail"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && errors.email}
            <TextField
              id="password"
              label="Password"
              name="password"
              value={values.password}
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && errors.password}
            <Button
              sx={{
                backgroundColor: "#275B89",
                width: 250,
                borderRadius: 10,
                color: "white",
                ":hover": { backgroundColor: "#1399C5", color: "white" },
              }}
              onSubmit={handleSubmit}
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default LoginPage
