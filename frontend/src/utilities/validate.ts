import { FormTypes } from "../types/formTypes";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[@$!%*?&^#_\-+]).{6,}$/;

export const validateForm = (formData: Partial<FormTypes>) => {
  let errors: Partial<FormTypes> = {};
  let errorFlag = false;

  if (!formData.email) {
    errors.email = "*Email is required";
    errorFlag = true;
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "*Invalid email format";
    errorFlag = true;
  }

  if ("username" in formData && !formData.username) {
    errors.username = "*Username is required";
    errorFlag = true;
  } else if (formData.username && formData.username.length < 3) {
    errors.username = "*Username must be at least 3 characters long";
    errorFlag = true;
  }

  if (!formData.password) {
    errors.password = "*Password is required";
    errorFlag = true;
  } else if (!passwordRegex.test(formData.password)) {
    errors.password =
      "*Password must be at least 6 characters long, include at least one number, and one special character.";
    errorFlag = true;
  }

  return { errors, error: errorFlag };
};
