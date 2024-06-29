import { useState } from "react";
import Login from "./login/login-component";
import Signup from "./signup/signup-component";
import { Box, Button, Typography } from "@mui/material";

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleSlideLeft = () => {
    setIsLogin(false);
  };

  const handleSlideRight = () => {
    setIsLogin(true);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Box
        sx={{
          height: 600,
          width: 800,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: 400,
            width: 800,
            backgroundColor: "#C0C0C0",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            borderRadius: "24px",
          }}
        >
          <Box
            sx={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography mb={2} variant="h6">
              New to this website?
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleSlideLeft}
            >
              Sign Up
            </Button>
          </Box>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography mb={2} variant="h6">
              Already have an account?
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleSlideRight}
            >
              Login
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            boder: "1px solid blue",
            zIndex: 999,
            transition: "transform 0.5s ease",
            transform: `translateX(${isLogin ? "100%" : "0%"})`,
          }}
        >
          {isLogin ? <Login /> : <Signup />}
        </Box>
      </Box>
    </Box>
  );
};

export default LoginSignupPage;
