import { CircularProgress, List, ListItemButton } from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";
import { WorkoutSession } from "../../types/workout-type";

const WorkoutList: React.FC<{
  workoutSessions: WorkoutSession[];
  setWorkoutCreator: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}> = ({ workoutSessions, setWorkoutCreator, loading }) => {
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
          onClick={() => {
            setWorkoutCreator(true);
            navigate("");
          }}
        >
          {" "}
          <AddCircleIcon sx={{ marginRight: 2 }} />
          Create new Workout
        </ListItemButton>
        {workoutSessions.map((workoutSession) => (
          <ListItemButton
            key={workoutSession.id}
            onClick={() => {
              handleNavigation(workoutSession.id);
            }}
          >
            {workoutSession.name}
          </ListItemButton>
        ))}
        {loading && (
          <CircularProgress
            color="primary"
            size={28}
            style={{ marginRight: 10 }}
          />
        )}
      </List>
    </>
  );
};

export default WorkoutList;
