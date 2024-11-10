import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
interface AddWorkoutVolumeButtonProps {
  handleWorkoutVolume: () => void;
  style: { [key: string]: any };
}
const AddWorkoutVolumeButton: React.FC<AddWorkoutVolumeButtonProps> = ({
  handleWorkoutVolume,
  style,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      onClick={handleWorkoutVolume}
      style={style}
    >
      Add Set
    </Button>
  );
};

export default AddWorkoutVolumeButton;
