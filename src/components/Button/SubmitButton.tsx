import { Button, ButtonProps } from "@mui/material";

interface SubmitButtonProps extends ButtonProps {
  style: { [key: string]: any };
  handleSubmit: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  style,
  handleSubmit,
  ...props
}) => {
  return (
    <Button {...props} sx={style} onClick={handleSubmit}>
      Submit
    </Button>
  );
};

export default SubmitButton;
