import {
  Facebook,
  Google,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
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
    <Box
      sx={{
        p: 4,
        width: "100%",
        height: "100%",
        zIndex: "999",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
            sx={{ paddingY: "8px" }}
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

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Button
          variant="contained"
          color="error"
          startIcon={<Google />}
          sx={{ color: "#fff", paddingY: "8px" }}
          onClick={() => console.log("Google sign-in")}
          fullWidth
        >
          Sign in with Google
        </Button>
        <Button
          variant="contained"
          startIcon={<Facebook />}
          sx={{ color: "#fff", paddingY: "8px" }}
          onClick={() => console.log("Facebook sign-in")}
          fullWidth
        >
          Sign in with Facebook
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
