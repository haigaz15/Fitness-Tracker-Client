import { Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
interface SaveButtonProps {
  handleClick: () => void;
}
const CancelButton: React.FC<SaveButtonProps> = ({ handleClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<CancelIcon />}
      onClick={handleClick}
      style={{ borderRadius: "8px", padding: "10px 20px", width: "100%" }}
    >
      Cancel
    </Button>
  );
};

export default CancelButton;
