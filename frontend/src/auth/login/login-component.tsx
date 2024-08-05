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
import { useLogin } from "../../hooks/useLogin";
import Snackbar from "../../components/snackbar";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<Partial<FormTypes>>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<FormTypes>>({});
  const { login, isLoading, error } = useLogin();

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { errors, error } = validateForm(formData);
    setErrors(errors);

    if (error) {
      console.log("Failed to submit form");
      return;
    }

    await login(formData);
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
            sx={{ paddingY: "8px" }}
            disabled={!!isLoading}
          >
            Login
          </Button>
        </Box>
        {error && <div className="text-red-600">{error}</div>}
      </form>
    </Box>
  );
};

export default Login;
