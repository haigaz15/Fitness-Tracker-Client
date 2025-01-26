import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import SubmitButton from "../Button/SubmitButton";
import useValidate from "../../hooks/useValidate";
import {
  handleValidation,
  handleSignUpFormSubmit,
} from "../../handlers/handlers";
import { Link } from "react-router-dom";
import GoogleIcon from "../CustomIcons/GoogleIcon";

const SignUp = () => {
  const validate = useValidate(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    handleValidation,
    handleSignUpFormSubmit
  );

  const linkStyle = {
    textDecoration: "none",
    color: "primary",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Card sx={{ width: "80%" }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "90%",
          }}
        >
          <Typography variant="h4" textAlign="left" gutterBottom>
            Sign Up
          </Typography>
          <Typography variant="body2" textAlign="left">
            Already have an Account ?
            <Link style={linkStyle} to="/sign-in">
              Sign in
            </Link>
          </Typography>
          <TextField
            id="FIRST_NAME"
            name="firstName"
            label="First Name"
            variant="outlined"
            fullWidth
            size="small"
            value={validate.formData.firstName}
            onChange={validate.handleChange}
            onBlur={validate.handleBlur}
            error={
              validate.errors.firstName && validate.visited.firstName
                ? true
                : false
            }
            helperText={
              <Collapse
                in={
                  validate.errors.firstName && validate.visited.firstName
                    ? true
                    : false
                }
              >
                {validate.visited.firstName && validate.errors.firstName}
              </Collapse>
            }
          />
          <TextField
            id="LAST_NAME"
            name="lastName"
            label="Last Name"
            variant="outlined"
            fullWidth
            size="small"
            value={validate.formData.lastName}
            onChange={validate.handleChange}
            onBlur={validate.handleBlur}
            error={
              validate.errors.lastName && validate.visited.lastName
                ? true
                : false
            }
            helperText={
              <Collapse
                in={
                  validate.errors.lastName && validate.visited.lastName
                    ? true
                    : false
                }
              >
                {validate.visited.lastName && validate.errors.lastName}
              </Collapse>
            }
          />
          <TextField
            id="EMAIL"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            size="small"
            value={validate.formData.email}
            onChange={validate.handleChange}
            onBlur={validate.handleBlur}
            error={
              validate.errors.email && validate.visited.email ? true : false
            }
            helperText={
              <Collapse
                in={
                  validate.errors.email && validate.visited.email ? true : false
                }
              >
                {validate.visited.email && validate.errors.email}
              </Collapse>
            }
          />
          <TextField
            id="PASSWORD"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            size="small"
            value={validate.formData.password}
            onChange={validate.handleChange}
            onBlur={validate.handleBlur}
            error={
              validate.errors.password && validate.visited.password
                ? true
                : false
            }
            helperText={
              <Collapse
                in={
                  validate.errors.password && validate.visited.password
                    ? true
                    : false
                }
              >
                {validate.visited.password && validate.errors.password}
              </Collapse>
            }
          />
          <TextField
            id="CONFIRM_PASSWORD"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            size="small"
            value={validate.formData.confirmPassword}
            onChange={validate.handleChange}
            onBlur={validate.handleBlur}
            error={
              validate.errors.confirmPassword &&
              validate.visited.confirmPassword
                ? true
                : false
            }
            helperText={
              <Collapse
                in={
                  validate.errors.confirmPassword &&
                  validate.visited.confirmPassword
                    ? true
                    : false
                }
              >
                {validate.visited.confirmPassword &&
                  validate.errors.confirmPassword}
              </Collapse>
            }
          />
          <SubmitButton
            color="primary"
            variant="contained"
            style={{
              borderRadius: "8px",
              padding: "10px 20px",
              width: "100%",
            }}
            label="Sign Up"
            handleSubmit={validate.handleSubmit}
          />

          <Collapse in={validate.submitStatus === "ERROR"}>
            <Typography variant="subtitle1" color="error">
              {validate.errors.submit}
            </Typography>
          </Collapse>

          <Collapse in={validate.submitStatus === "SUCCESS"}>
            <Typography variant="subtitle1" color="green">
              Form submitted successfully
            </Typography>
          </Collapse>

          <Divider>or</Divider>
          <Button
            fullWidth
            size="small"
            variant="outlined"
            onClick={() => alert("Sign up with Google")}
            startIcon={<GoogleIcon />}
          >
            {" "}
            Sign Up With Google
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignUp;
