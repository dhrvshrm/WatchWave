import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";

const STYLES = {
  loginContainer: {
    width: "400px",
    padding: "20px",
    border: "1px solid black",
    borderRadius: "10px",
    backgroundColor: "white",
    margin: "auto",
    height: "35rem",
    mb: "21rem",
    mt: "6rem",
    justifyContent: "center",
  },
};

function LoginForm() {
  return (
    <Stack sx={STYLES.loginContainer}>
      <TextField label="Email" variant="outlined" fullWidth margin="normal" />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Stack>
  );
}

export default LoginForm;
