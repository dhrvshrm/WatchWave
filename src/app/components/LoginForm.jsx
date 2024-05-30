import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React, { useState } from "react";

const STYLES = {
  loginContainer: {
    width: "20rem",
    border: "0.0625rem solid black",
    borderRadius: "1rem",
    padding: "4rem 4rem 6rem 4rem",
    backgroundColor: "rgba(0, 0, 0, 0.82)",
    margin: "auto",
    mt: "96px",
    justifyContent: "center",
  },
  textField: {
    zIndex: 1,
    "& input": {
      color: "white",
    },
    "& label": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    "& .MuiFormLabel-root": {
      color: "white",
    },
  },
  loginSignupBtn: {
    cursor: "pointer",
    textTransform: "none",
    fontSize: "1rem",
    zIndex: 1,
    height: "2.75rem",
  },
};

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Stack sx={STYLES.loginContainer} gap={2}>
      <Typography variant="h4" component="h4" color="white" fontWeight={600}>
        Sign In
      </Typography>
      <Stack>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={STYLES.textField}
          value={email}
          onChange={handleEmailChange}
        />

        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          sx={STYLES.textField}
          value={password}
          onChange={handlePasswordChange}
        />
      </Stack>
      <Stack
        // mb={2}
        direction="column"
        gap={2}
        sx={{
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          fullWidth
          onClick={handleLoginClick}
          sx={{
            ...STYLES.loginSignupBtn,
            "&:hover": {
              backgroundColor: "crimson",
            },
            backgroundColor: "red",
            fontWeight: "bold",
          }}
        >
          Login
        </Button>
        <Typography variant="body2" color="white" fontWeight={600}>
          OR
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{
            ...STYLES.loginSignupBtn,
            "&:hover": {
              backgroundColor: "rgba(211, 211, 211, 0.18)",
            },
            backgroundColor: "rgba(211, 211, 211, 0.15)",
          }}
        >
          <Typography variant="body1" color="white">
            New to Netflix?<strong> Sign up now.</strong>
          </Typography>
        </Button>

        <Typography
          variant="body2"
          component="p"
          color="white"
          sx={{ textDecoration: "underline" }}
        >
          Forgot password?
        </Typography>
        <Typography variant="body2" component="p" color="gray">
          This page is protected by Google reCAPTCHA to ensure you are not a
          bot.<strong> Learn more.</strong>
        </Typography>
      </Stack>
    </Stack>
  );
}

export default LoginForm;
