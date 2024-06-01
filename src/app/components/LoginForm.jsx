import { Button, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateEmail, validateName, validatePassword } from "../utils";

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
    textTransform: "none",
    fontSize: "1rem",
    zIndex: 1,
    height: "2.75rem",
    color: "white",
  },
};

const formFields = [
  {
    name: "email",
    label: "Email",
    type: "text",
    sx: STYLES.textField,
    required: true,
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
    required: true,
  },
];

const formDataInitialState = {
  email: "",
  password: "",
  name: "",
};

export const LoginForm = () => {
  const [formData, setFormData] = useState(formDataInitialState);
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isSignUpForm = () => {
    setIsSignUp(!isSignUp);
    setFormData(formDataInitialState);
  };

  const handleLoginClick = () => {
    if (!isFormValid()) {
      toast.error("Please fill all the required fields.");
      return;
    }

    if (isSignUp) {
      if (!validateEmail(formData.email)) {
        toast.error("Please enter a valid email address.");
        return;
      }

      if (!validateName(formData.name)) {
        toast.error("Please enter a valid name.");
        return;
      }

      const passwordError = validatePassword(formData.password);
      if (passwordError) {
        toast.error(passwordError);
        return;
      }
    }

    console.log("Form Data:", formData);
    router.push("/browse");
  };

  const isFormValid = () => {
    for (const field of formFields) {
      if (field.required && !formData[field.name]) {
        return false;
      }
    }
    return true;
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
                required={field.required}
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
          <Typography variant="body2" color="white" fontWeight={600}>
            {isSignUp ? "Already have an account? " : "Create an account? "}
          </Typography>
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
      <ToastContainer />
    </Stack>
  );
};
