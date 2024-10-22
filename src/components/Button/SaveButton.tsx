import { Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
interface SaveButtonProps {
  handleClick: () => void;
}
const SaveButton: React.FC<SaveButtonProps> = ({ handleClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<SaveIcon />}
      onClick={handleClick}
      style={{ borderRadius: "8px", padding: "10px 20px", width: "100%" }}
    >
      Save
    </Button>
  );
};

export default SaveButton;
