import {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextField,
  TextFieldVariants,
} from "@mui/material";
import { JSX } from "react/jsx-runtime";

const TextArea = (
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
      multiline
      rows={2} // Controls the height (number of visible rows)
      variant="standard"
      fullWidth
    />
  );
};

export default TextArea;
