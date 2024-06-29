import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { FormTypes } from "../../types/formTypes";
import { validateForm } from "../../utilities/validate";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<Partial<FormTypes>>({
    email: "",
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
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Login
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
            Login
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
        Don't have an account? <a href="#">Signup</a>
      </Typography>
    </Paper>
  );
};

export default Login;
