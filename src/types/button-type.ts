import { ButtonProps as MuiButtonProps } from "@mui/material/Button"; // Import ButtonProps from MUI

export interface ButtonProps extends MuiButtonProps {
  handleClick: (e: React.SyntheticEvent) => void;
  style: { [key: string]: any };
  buttonTitle: string;
}
