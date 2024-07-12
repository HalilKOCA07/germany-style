import React, { useState } from "react";
import loginImg from "../assests/loginImg.png";
import { Avatar, Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoginIcon from "@mui/icons-material/Login";
import { Formik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [validEmail, setValidEmail] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("invalid email addresse")
      .required("you must enter a email"),
    password: Yup.string()
      .required("You must enter your password")
      .min(8, "Your password is too short, must be 8 character")
      .matches(/[a-zA-Z]/, "Password must contain Latin letters.")
     .matches(/^[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]*$/,
        "Need one special character"
      ),
  });

  return (
    <Box sx={{ display: "flex", p: 10, gap: 5, justifyContent: "center" }}>
      <Avatar src={loginImg} sx={{ width: 400, height: 400 }} />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setValidEmail(values);
          console.log(values);
        }}
        noValidate
        autoComplete="off"
      >
        {({ handleSubmit, handleBlur, handleChange, values }) => (
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "45ch" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LoginIcon sx={{ p: 0, m: 0 }} />
            <Typography
              sx={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }}
            >
              Log-in
            </Typography>
            <TextField
              id={values.email}
              name={values.email}
              value={values.email}
              label="E-mail"
              variant="outlined"
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            <TextField
              id={values.password}
              label="Password"
              name={values.password}
              value={values.password}
              variant="outlined"
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
            />
            <Button onSubmit={handleSubmit}>Submit</Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
};
export default Login;
