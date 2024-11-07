import { Box, Divider } from "@mui/material";
import { WorkoutPresenterProps } from "../../types/workout-type";

const WorkoutPresenter: React.FC<WorkoutPresenterProps> = ({
  renderWorkoutList,
  renderWorkoutEx,
  mainStyle,
  workoutListStyle,
  workoutExStyle,
}) => {
  return (
    <Box sx={mainStyle}>
      <Box sx={workoutListStyle}>{renderWorkoutList()}</Box>
      <Divider orientation="vertical" flexItem sx={{ cursor: "col-resize" }} />
      <Box sx={workoutExStyle}>{renderWorkoutEx()}</Box>
    </Box>
  );
};

export default WorkoutPresenter;
