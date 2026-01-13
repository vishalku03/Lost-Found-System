export const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validateName = (name) =>
  /^[A-Za-z ]{3,30}$/.test(name);

export const validatePassword = (password) =>
  password.length >= 6;
