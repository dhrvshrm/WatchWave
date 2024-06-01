import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Validations for SIgnUp form

export const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  const lengthError =
    password.length < 10 ? "Password must be at least 10 characters long." : "";
  const uppercaseError = /[A-Z]/.test(password)
    ? ""
    : "Password must contain at least one uppercase letter.";
  const lowercaseError = /[a-z]/.test(password)
    ? ""
    : "Password must contain at least one lowercase letter.";
  const specialCharError = /[@$!%*?&]/.test(password)
    ? ""
    : "Password must contain at least one special character (@, $, !, %, *, ?, &).";

  return lengthError || uppercaseError || lowercaseError || specialCharError;
};

export const validateName = (name) => {
  const re = /^[A-Za-z -]+$/;
  return re.test(name);
};

// Firebase configuration

export const firebaseConfig = {
  apiKey: "AIzaSyBazoP7ahYdxm2T-0Gxhss_syDE5ovnA1E",
  authDomain: "watchwave-4f7ab.firebaseapp.com",
  projectId: "watchwave-4f7ab",
  storageBucket: "watchwave-4f7ab.appspot.com",
  messagingSenderId: "164840175759",
  appId: "1:164840175759:web:4c2e4895c4d333922858fa",
  measurementId: "G-0MPGFNVFX3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
