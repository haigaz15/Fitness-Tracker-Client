import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface CreateWorkoutProps {
  handleClick: () => void;
}
const CreateWorkoutButton: React.FC<CreateWorkoutProps> = ({ handleClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddCircleIcon />}
      onClick={handleClick}
      style={{
        borderRadius: "8px",
        padding: "10px 20px",
        width: "100%",
        height: "50px",
      }}
    >
      Create New Workout
    </Button>
  );
};

export default CreateWorkoutButton;
