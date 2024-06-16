import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Validation from "./LoginValidation";
import banner from "./Assets/login.jpeg";
import Logo from "./Assets/logo.png";

import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  CardMedia,
  Snackbar,
  Alert,
} from "@mui/material";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = Validation(values);
    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      console.log("Error:", errors);
      return;
    }

    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        console.log("success2");
        if (res.data.success) {
          window.localStorage.setItem("token", res.data.data.token);
          window.localStorage.setItem("userName", res.data.data.name);
          window.localStorage.setItem("loggedIn", true);
          navigate("/");
        } else {
          // alert("Invalid Email or Password");
          setOpen(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Container maxWidth="md" className="p-3 my-5">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Invalid Email or Password!
        </Alert>
      </Snackbar>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={banner}
            alt="login form"
            sx={{
              borderRadius: "16px 0 0 16px",
              width: "600px",
              height: "600px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="logo-container">
            <img src={Logo} alt="" />
          </div>
          <TextField
            name="email"
            label="Email address"
            id="email"
            type="email"
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={handleInput}
          />
          {errors.email && (
            <Typography variant="caption" color="error">
              {errors.email}
            </Typography>
          )}{" "}
          <TextField
            name="password"
            label="Password"
            id="password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={handleInput}
          />
          {errors.password && (
            <Typography variant="caption" color="error">
              {errors.password}
            </Typography>
          )}
          <Box sx={{ mt: 2 }}>
            <Button
              onClick={handleSubmit}
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                width: "420px",
                backgroundColor: "#2CC84D",
                color: "#ffffff",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#0ca52d",
                },
              }}
            >
              Log in
            </Button>
          </Box>
          <Typography
            variant="body2"
            color="#393f81"
            mt={2}
            mb={5}
            pb={{ lg: 2 }}
          >
            Don't have an account?{" "}
            <Link to="/register" underline="none" color="#393f81">
              Register here
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
