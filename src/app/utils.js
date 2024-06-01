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
