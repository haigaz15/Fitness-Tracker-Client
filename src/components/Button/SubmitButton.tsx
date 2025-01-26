import { Button, ButtonProps } from "@mui/material";

interface SubmitButtonProps extends ButtonProps {
  style: { [key: string]: any };
  label: string;
  handleSubmit: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  style,
  label,
  handleSubmit,
  ...props
}) => {
  return (
    <Button {...props} sx={style} onClick={handleSubmit}>
      {label}
    </Button>
  );
};

export default SubmitButton;
