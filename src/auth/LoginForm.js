import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { forgotPasswordAsync, loginAsync, resetPasswordAsync } from '../Slice/authSlice';

function ForgotPasswordForm({ onCancel }) {
  const [OTP, setOTP] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [confirmPassword, setconfirmPassword] = React.useState("");
  const [verificationSent, setVerificationSent] = React.useState(false);
  const [error, setError] = React.useState(""); // Add this line to define 'error' state
  const dispatch = useDispatch();
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [Success,setSuccess]=React.useState("")
  const navigate = useNavigate()
  
  const handleSubmitReset = (event) => {

    event.preventDefault();
    if (Password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Dispatch the reset password action with the required parameters

      dispatch(resetPasswordAsync({ mobileNumber, verificationCode: OTP, password: Password }))

      .then((action) => {
        // Check if the action has been fulfilled
        if (action.type === resetPasswordAsync.fulfilled.type) {
          // Navigate to the dashboard page
          setconfirmPassword("")
          setOTP("")
          setPassword("")
          setSuccess("Password Reset Successfully")
        } else {
          // Handle other scenarios (e.g., display error message)
          console.log("Login failed:", action.error.message);
        }
        })
        .catch((error) => {
          console.error("Reset password error:", error);
        });
    } catch (error) {
      console.error("Reset password error:", error);
    }
  };
  
  const handleVerificationSend = (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('mobileNumber', mobileNumber); // Add mobileNumber to FormData
      dispatch(forgotPasswordAsync(mobileNumber))
        .then((action) => {
          if (action.type === forgotPasswordAsync.fulfilled.type) {
            setVerificationSent(true);
          } else {
            console.log("Forgot password failed:", action.error.message);
          }
        })
        .catch((error) => {
          console.error("Forgot password error:", error);
        });
    } catch (error) {
      console.error("Forgot password error:", error);
    }
  };

  return (
    <div>
      <Typography
        component="h1"
        variant="h5"
        sx={{
          mb: 2,
          fontWeight: "bold",
          color: "#05445E",
          textAlign: "center",
        }}
        style={{ marginBottom: "5px", fontWeight: "bold", color: "#05445E" }}
      >
        {verificationSent ? "Enter Verification Code" : "Forgot Password"}
      </Typography>
      {error && (
        <Typography
          variant="body2"
          color="error"
          sx={{
            textAlign: "center",
            marginTop: 1,
          }}
        >
          {error}
        </Typography>
      )}
      <form
        onSubmit={verificationSent ? handleSubmitReset : handleVerificationSend}
        sx={{ mt: 1, width: "100%" }}
      >
        {!verificationSent && (
          <>
            <TextField
              margin="normal"
              required
              fullWidth
              id="mobileNumber"
              label="Mobile Number"
              name="mobileNumber"
              autoComplete="tel"
              autoFocus
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              sx={{ mb: 2 }}
            />

            <Button
              variant="contained"
              style={{
                backgroundColor: "#189ab4",
                color: "#d4f1f4",
                marginBottom: "20px",
                fontSize: "16px",
                fontWeight: "600",
              }}
              fullWidth
              onClick={handleVerificationSend}
            >
              Send Verification
            </Button>
          </>
        )}
        {verificationSent && (
          <>
            <TextField
              margin="normal"
              required
              fullWidth
              id="OTP"
              label="OTP"
              name="OTP"
              autoComplete="off"
              autoFocus
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Password"
              label="Password"
              name="Password"
              type="password"
              autoComplete="off"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="confirmPassword"
              label="confirmPassword"
              name="confirmPasswordd"
              autoComplete="off"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            <div
              style={{
                marginTop: "5px",
                display: "flex",
                justifyContent: "left",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#189ab4", color: "#d4f1f4", fontSize: "16px", fontWeight: "600" }}
                onClick={handleSubmitReset}
              >
                Submit
              </Button>
            </div>
          </>
        )}

        <Grid container justifyContent="center">
          <Grid item>
            <Link
              onClick={onCancel}
              variant="body2"
              style={{ cursor: "pointer" }}
            >
              Back to Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
const defaultTheme = createTheme();

const LoginSide = () => {
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({ mobileNumber: false, password: false });

  const [showForgotPassword, setShowForgotPassword] = React.useState(false);
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.auth.error);

  const isLoading = useSelector((state) => state.auth.isLoading);
  const navigate = useNavigate();

  // completed Admin Login

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const mobileNumber = data.get("mobileNumber");
    const password = data.get("password");

    // Dispatch login action
    dispatch(loginAsync({ mobileNumber, password }))
      .then((action) => {
        // Check if the action has been fulfilled
        if (action.type === loginAsync.fulfilled.type) {
          // Navigate to the dashboard page
          navigate("/dashboard");
        } else {
          // Handle other scenarios (e.g., display error message)
          console.log("Login failed:", action.error.message);
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        // Handle errors (e.g., display error message)
      });

  };

  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };



  const backgroundImageUrl =
    "https://media.istockphoto.com/id/1289188556/vector/group-of-doctors-standing-at-hospital-building.jpg?s=612x612&w=0&k=20&c=kdQWhBHyVz62alN6zVUReY8tflIJQ7s1LMk5o1fKh2s=";

  return (
    <ThemeProvider theme={defaultTheme}>
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
            sm={8}
            md={8}
            lg={7}
            xl={6}
            xxl={4}
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
          <Grid item xs={12} sm={4} md={4} lg={5} xl={4} xxl={6} square>
            <Grid
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {!showForgotPassword ? (
                <>
                  <Typography
                    component="h1"
                    variant="h5"
                    sx={{ mb: 2, fontWeight: "bold", color: "#05445E" }}
                  >
                    Login
                  </Typography>
                  <Grid
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 1, width: "100%" }}
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="mobileNumber"
                      label="Mobile Number"
                      name="mobileNumber"
                      autoComplete="tel"
                      autoFocus
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      error={errors.mobileNumber}
                      sx={{ mb: 2 }}
                    />
                    {errors.mobileNumber && (
                      <InputLabel htmlFor="mobileNumber" error>
                        Mobile number is required
                      </InputLabel>
                    )}
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      error={errors.password}
                      sx={{ mb: 2 }}
                    />
                    {errors.password && (
                      <InputLabel htmlFor="password" error>
                        Password is required
                      </InputLabel>
                    )}

                    <Grid container justifyContent="left">
                      <Grid item>
                        <Link
                          variant="body2"
                          style={{ cursor: "pointer" }}
                          onClick={toggleForgotPassword}
                        >
                          Forgot password?
                        </Link>
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      disabled={isLoading}
                      style={{ backgroundColor: "#189AB4", color: "#D4F1F4", marginTop: "20px", fontSize: "16px", fontWeight: "600" }}
                    >
                      {isLoading ? 'Logging in...' : 'Login'}
                    </Button>
                  </Grid>
                </>
              ) : (
                <ForgotPasswordForm onCancel={toggleForgotPassword} />
              )}
              {isLoading && <div>Loading...</div>}
              {loginError && (
                <Typography variant="body2" color="error">
                  {loginError}
                </Typography>
              )}
              <Grid component="div" sx={{ mt: 5 }}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default LoginSide;
