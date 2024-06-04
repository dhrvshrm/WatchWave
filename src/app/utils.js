import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
export const auth = getAuth();

// TMDB API kry and secret
export const TMDB_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDQ3NTUwOTE5NjZiN2Q1NzVkM2Y0NmIxYjk2N2NiMCIsInN1YiI6IjY2NWU2ZWFiMzk3ZGVhZWNjZjIzM2I1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4dOIazya5Reh5qD7-xQUW8pK5Fjhdyj0HCQ8pJW-9wo";

export const API_KEY = "b44755091966b7d575d3f46b1b967cb0";

// IMDB endpoint
export const TBMD_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

// TMDB Image URL
export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
