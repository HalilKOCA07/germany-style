import React from "react";
import loginImg from "../assests/loginImg.png";
import { Avatar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoginIcon from '@mui/icons-material/Login';
const Login = () => {
  return (
    <Box sx={{ display: "flex", p: 10, gap:5, justifyContent:"center" }}>
      <Avatar src={loginImg} sx={{ width: 400, height: 400 }} />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
          display: "flex",
          flexDirection: "column",
          justifyContent:"center",
          alignItems:"center"
        }}
        noValidate
        autoComplete="off"
      >
        <LoginIcon sx={{p:0, m:0}}/>
        <Typography sx={{textAlign:"center", fontSize:25, fontWeight:"bold"}}>Log-in</Typography>
        <TextField id="outlined-basic" label="E-mail" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
      </Box>
    </Box>
  );
};
export default Login;
