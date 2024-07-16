import { useState } from "react";
import Signup from "./signup/signup-component";
import { Box, Button, Typography } from "@mui/material";
import Login from "./login/login-component";

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleLoginSlide = () => {
    setIsLogin((prev) => !prev);
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
          width: "1100px",
          height: "700px",
          display: "flex",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
        }}
      >
        <Box
          sx={{
            width: "40%",
            height: "100%",
            transition: "transform 0.5s ease",
            transform: `translateX(${isLogin ? "150%" : "0%"})`,
          }}
        >
          {isLogin ? <Login /> : <Signup />}
        </Box>
        <Box
          sx={{
            width: "60%",
            height: "100%",
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            padding: 3,
            transition: "transform 0.5s ease",
            transform: `translateX(${isLogin ? "-67%" : "0%"})`,
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: "bold",
            }}
          >
            {isLogin ? "Welcome Back!" : "Join Us Today!"}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              mt: 2,
              px: 2,
              py: 1,
              borderColor: "#fff",
              color: "#fff",
              fontWeight: "bold",
            }}
            onClick={toggleLoginSlide}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginSignupPage;
