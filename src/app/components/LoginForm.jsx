import { Box, Button, Stack, TextField, Typography } from "@mui/material";
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

const formFields = [
  {
    name: "email",
    label: "Email",
    type: "text",
    sx: STYLES.textField,
  },
  {
    name: "name",
    label: "Name",
    type: "text",
    sx: STYLES.textField,
    condition: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    sx: STYLES.textField,
  },
];

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [isSignUp, setIsSignUp] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isSignUpForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleLoginClick = () => {
    console.log("Form Data:", formData);
  };

  return (
    <Stack sx={STYLES.loginContainer} gap={2}>
      <Typography variant="h4" component="h4" color="white" fontWeight={600}>
        {isSignUp ? "Sign Up" : "Sign In"}
      </Typography>
      <Stack>
        {formFields.map(
          (field) =>
            (isSignUp || !field.condition) && (
              <TextField
                key={field.name}
                autoComplete="off"
                label={field.label}
                type={field.type}
                sx={field.sx}
                value={formData[field.name]}
                onChange={handleInputChange}
                name={field.name}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            )
        )}
      </Stack>
      <Stack
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
          {isSignUp ? "Sign Up" : "Login"}
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
              backgroundColor: "rgba(211, 211, 211, 0.21)",
            },
            backgroundColor: "rgba(211, 211, 211, 0.18)",
          }}
          onClick={isSignUpForm}
        >
          {isSignUp
            ? "Already a user? Log in now."
            : "New to Netflix? Sign up now."}
        </Button>
        {!isSignUp && (
          <Typography
            variant="body2"
            component="p"
            color="white"
            sx={{ textDecoration: "underline" }}
          >
            Forgot password?
          </Typography>
        )}
        <Typography variant="body2" component="p" color="gray">
          This page is protected by Google reCAPTCHA to ensure you are not a
          bot. <strong>Learn more.</strong>
        </Typography>
      </Stack>
    </Stack>
  );
}

export default LoginForm;
