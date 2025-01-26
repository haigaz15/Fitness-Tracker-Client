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
import {
  handleSignUpFormSubmit,
  handleValidation,
} from "../../handlers/handlers";
import useValidate from "../../hooks/useValidate";
import { Link } from "react-router-dom";
import SubmitButton from "../Button/SubmitButton";
import GoogleIcon from "../CustomIcons/GoogleIcon";

const SignIn: React.FC = () => {
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
            Sign in
          </Typography>
          <Typography variant="body2" textAlign="left">
            Don't have an Account ?
            <Link style={linkStyle} to="/sign-up">
              Sign up
            </Link>
          </Typography>
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

          <SubmitButton
            color="primary"
            variant="contained"
            style={{
              borderRadius: "8px",
              padding: "10px 20px",
              width: "100%",
            }}
            label="Sign in"
            handleSubmit={validate.handleSubmit}
          />

          <Collapse in={validate.submitStatus === "ERROR"}>
            <Typography variant="subtitle1" color="error">
              {validate.errors.submit}
            </Typography>
          </Collapse>
          <Link to="#" style={linkStyle}>
            Forgot your password?
          </Link>
          <Divider>or</Divider>
          <Button
            fullWidth
            size="small"
            variant="outlined"
            onClick={() => alert("Sign in with Google")}
            startIcon={<GoogleIcon />}
          >
            {" "}
            Sign in With Google
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignIn;
