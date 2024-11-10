import {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextField,
  TextFieldVariants,
} from "@mui/material";
import { JSX } from "react/jsx-runtime";

const ThinTextField = (
  props: JSX.IntrinsicAttributes & {
    variant?: TextFieldVariants | undefined;
  } & Omit<
      FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps,
      "variant"
    >
) => {
  return (
    <TextField
      {...props}
      variant="outlined"
      sx={{
        "& .MuiInputBase-root": {
          padding: "8px 12px", // Adjust padding for a thinner look
          fontSize: "0.875rem",
          height: "40px", // Set height to 40px as per your requirement
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderWidth: "1px", // Thinner border for compact styling
        },
        "& .MuiInputLabel-root": {
          fontSize: "0.875rem", // Smaller font for the label
          top: "50%", // Vertically centers the label
          left: "12px", // Adjusts the label to the left of the input
          transform: "translate(0, -50%)", // Centers the label vertically
          transition: "all 0.2s ease-out", // Smooth transition when shrinking
          backgroundColor: "white", // Label background matches the input field
          padding: "0 4px", // Padding for better readability
        },
        "& .MuiInputLabel-shrink": {
          top: "-6px", // Moves the label upwards when the field is focused
          left: "12px", // Keeps the label aligned on the left when shrunk
          transform: "translate(0, 0) scale(0.75)", // Shrinks the label and positions it at the top
        },
      }}
    />
  );
};

export default ThinTextField;
