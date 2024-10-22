import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
interface AddWorkoutVolumeButtonProps {
  handleWorkoutVolume: () => void;
}
const AddWorkoutVolumeButton: React.FC<AddWorkoutVolumeButtonProps> = ({
  handleWorkoutVolume,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      onClick={handleWorkoutVolume}
      style={{ borderRadius: "8px", padding: "10px 20px", width: "49%" }}
    >
      Add Set
    </Button>
  );
};

export default AddWorkoutVolumeButton;
