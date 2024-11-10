import { List, ListItemButton } from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";

const WorkoutList: React.FC<{
  setWorkoutCreator: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setWorkoutCreator }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setWorkoutCreator(false);
    navigate(path);
  };
  return (
    <>
      <List>
        <ListItemButton
          sx={{ height: "55px", color: "primary.main" }}
          onClick={() => setWorkoutCreator(true)}
        >
          {" "}
          <AddCircleIcon sx={{ marginRight: 2 }} />
          Create new Workout
        </ListItemButton>
        <ListItemButton onClick={() => handleNavigation("chest")}>
          Chest and Bieceps
        </ListItemButton>
      </List>
    </>
  );
};

export default WorkoutList;
