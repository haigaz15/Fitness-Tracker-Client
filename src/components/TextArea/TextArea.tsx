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
  return <TextField {...props} multiline variant="filled" fullWidth />;
};

export default TextArea;
