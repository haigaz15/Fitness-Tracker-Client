import { Box, TextField, Typography } from "@mui/material";
import SubmitButton from "../../components/Button/SubmitButton";
import useValidate from "../../hooks/useValidate";
import {
  handleValidation,
  handleSignUpFormSubmit,
} from "../../handlers/handlers";

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

  const helperTextStyle = {
    transition: "opacity 3s ease-in-out",
    opacity: 1,
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          width: "40%",
          height: "auto",
        }}
      >
        <TextField
          id="FIRST_NAME"
          name="firstName"
          label="First Name"
          variant="outlined"
          fullWidth
          value={validate.formData.firstName}
          onChange={validate.handleChange}
          onBlur={validate.handleBlur}
          error={
            validate.errors.firstName && validate.visited.firstName
              ? true
              : false
          }
          helperText={validate.visited.firstName && validate.errors.firstName}
          FormHelperTextProps={{ style: helperTextStyle }}
        />
        <TextField
          id="LAST_NAME"
          name="lastName"
          label="Last Name"
          variant="outlined"
          fullWidth
          value={validate.formData.lastName}
          onChange={validate.handleChange}
          onBlur={validate.handleBlur}
          error={
            validate.errors.lastName && validate.visited.lastName ? true : false
          }
          helperText={validate.visited.lastName && validate.errors.lastName}
          FormHelperTextProps={{ style: helperTextStyle }}
        />
        <TextField
          id="EMAIL"
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={validate.formData.email}
          onChange={validate.handleChange}
          onBlur={validate.handleBlur}
          error={validate.errors.email && validate.visited.email ? true : false}
          helperText={validate.visited.email && validate.errors.email}
          FormHelperTextProps={{ style: helperTextStyle }}
        />
        <TextField
          id="PASSWORD"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={validate.formData.password}
          onChange={validate.handleChange}
          onBlur={validate.handleBlur}
          error={
            validate.errors.password && validate.visited.password ? true : false
          }
          helperText={validate.visited.password && validate.errors.password}
          FormHelperTextProps={{ style: helperTextStyle }}
        />
        <TextField
          id="CONFIRM_PASSWORD"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          value={validate.formData.confirmPassword}
          onChange={validate.handleChange}
          onBlur={validate.handleBlur}
          error={
            validate.errors.confirmPassword && validate.visited.confirmPassword
              ? true
              : false
          }
          helperText={
            validate.visited.confirmPassword && validate.errors.confirmPassword
          }
          FormHelperTextProps={{ style: helperTextStyle }}
        />
        <SubmitButton
          color="primary"
          variant="contained"
          style={{ borderRadius: "8px", padding: "10px 20px", width: "100%" }}
          handleSubmit={validate.handleSubmit}
        />
        {validate.submitStatus === "ERROR" && (
          <Typography variant="subtitle1" color="error">
            {validate.errors.submit}
          </Typography>
        )}
        {validate.submitStatus === "SUCCESS" && (
          <Typography variant="subtitle1" color="green">
            Form submitted successfully
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SignUp;
