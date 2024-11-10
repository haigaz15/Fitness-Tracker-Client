import { Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
interface RemoveWorkoutVolumeButtonProps {
  handleWorkoutVolume: () => void;
  style: { [key: string]: any };
}
const RemoveWorkoutVolumeButton: React.FC<RemoveWorkoutVolumeButtonProps> = ({
  handleWorkoutVolume,
  style,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<RemoveIcon />}
      onClick={handleWorkoutVolume}
      sx={style}
    >
      Remove Set
    </Button>
  );
};

export default RemoveWorkoutVolumeButton;
