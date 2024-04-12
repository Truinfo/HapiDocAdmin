import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import {Link} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const SignUp = () => {
  const [errors, setErrors] = React.useState({ email: false, password: false });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const password = data.get("password");

    // Clear errors
    clearErrors();

    // Validate email
    if (!email || !email.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: true }));
      return;
    }

    // Validate password
    if (!password || !password.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, password: true }));
      return;
    }

    // Add your logic for form submission here
    console.log({ email, password });
  };

  const clearErrors = () => {
    setErrors({
      email: false,
      password: false,
    });
  };

  const backgroundImageUrl =
    "https://media.istockphoto.com/id/1290139310/vector/vector-of-a-medical-staff-group-of-doctors-and-nurses.jpg?s=612x612&w=0&k=20&c=cYvcXpTZhDWtfd0uZu6vucPOdHP0Zr3I1La0uKsb4rg=";

  return (
      <Grid
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container component="main">
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={6}
            md={7}
            sx={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[10]
                  : t.palette.grey[10],
              backgroundPosition: "center",
            }}
          />
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#189AB4" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      error={errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      error={errors.password}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#189ab4",
                    color: "#d4f1f4",fontWeight:"700", fontSize:"18px"
                  }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>
  );
};

export default SignUp;