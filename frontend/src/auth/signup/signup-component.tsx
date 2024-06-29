import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { validateForm } from "../../utilities/validate";
import { FormTypes } from "../../types/formTypes";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormTypes>({
    email: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<FormTypes>>({});

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const { errors, error } = validateForm(formData);
    setErrors(errors);

    if (!error) {
      console.log("Form Sumbitted", formData);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        maxWidth: 400,
        width: "100%",
        maxHeight: 500,
        height: "100%",
        zIndex: "999",
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Sign Up
      </Typography>
      <form>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Username"
          variant="outlined"
          margin="normal"
          value={formData.username}
          onChange={handleChange}
          error={!!errors.username}
          helperText={errors.username}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          margin="normal"
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box my={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </Box>
      </form>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          marginBottom: "18px",
        }}
      >
        <span
          style={{
            display: "block",
            height: "1px",
            backgroundColor: "black",
            width: "100%",
          }}
        ></span>
        <Typography>OR</Typography>
        <span
          style={{
            display: "block",
            height: "1px",
            backgroundColor: "black",
            width: "100%",
          }}
        ></span>
      </div>
      <Typography>
        Already have an account? <a href="#">Login</a>
      </Typography>
    </Paper>
  );
};

export default Signup;
