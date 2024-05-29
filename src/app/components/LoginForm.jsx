import { Box, Button, TextField } from "@mui/material";
import React from "react";

function LoginForm() {
  return (
    <Box
      sx={{
        width: "400px",
        padding: "20px",
        border: "1px solid black",
        borderRadius: "10px",
        backgroundColor: "white",
        margin: "auto",
      }}
    >
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
    </Box>
  );
}

export default LoginForm;
