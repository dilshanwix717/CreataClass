import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Validation from "./RegisterValidation";
import banner from "./Assets/register.png";
import Logo from "./Assets/logo.png";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  CardMedia,
} from "@mui/material";

function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

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
      .post("http://localhost:8081/register", values)
      .then((res) => {
        console.log("success");

        alert("Registration Successful!, You can now login");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container maxWidth="md" className="p-3 my-5 ">
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
            name="name"
            label="Name "
            id="name"
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={handleInput}
          />

          {errors.name && (
            <Typography variant="caption" color="error">
              {errors.name}
            </Typography>
          )}
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
          )}
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
              Register
            </Button>
          </Box>
          <Typography
            variant="body2"
            color="#393f81"
            mt={2}
            mb={5}
            pb={{ lg: 2 }}
          >
            Already have an account?{" "}
            <Link to="/login" underline="none" color="#393f81">
              Login here
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Register;
