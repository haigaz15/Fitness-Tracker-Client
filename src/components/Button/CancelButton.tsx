import { Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { ButtonProps } from "../../types/button-type";

const CancelButton: React.FC<ButtonProps> = ({
  handleClick,
  style,
  buttonTitle,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<CancelIcon />}
      onClick={handleClick}
      // style={{ borderRadius: "8px", padding: "10px 20px", width: "100%" }}
      sx={style}
    >
      {buttonTitle}
    </Button>
  );
};

export default CancelButton;
