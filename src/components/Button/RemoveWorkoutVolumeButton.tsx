import { Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
interface RemoveWorkoutVolumeButtonProps {
  handleWorkoutVolume: () => void;
}
const RemoveWorkoutVolumeButton: React.FC<RemoveWorkoutVolumeButtonProps> = ({
  handleWorkoutVolume,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<RemoveIcon />}
      onClick={handleWorkoutVolume}
      style={{ borderRadius: "8px", padding: "10px 20px", width: "49%" }}
    >
      Remove Set
    </Button>
  );
};

export default RemoveWorkoutVolumeButton;
