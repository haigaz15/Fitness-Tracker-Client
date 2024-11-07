import { Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { ButtonProps } from "../../types/button-type";

const SaveButton: React.FC<ButtonProps> = ({
  handleClick,
  style,
  buttonTitle,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<SaveIcon />}
      onClick={handleClick}
      sx={style}
    >
      {buttonTitle}
    </Button>
  );
};

export default SaveButton;
