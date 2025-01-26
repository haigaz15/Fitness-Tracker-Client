import { Box, Divider } from "@mui/material";
import { WorkoutPresenterProps } from "../../types/workout-type";

const WorkoutPresenter: React.FC<WorkoutPresenterProps> = ({
  renderWorkoutList,
  renderWorkoutListItem,
  mainStyle,
  workoutListStyle,
  workoutExStyle,
}) => {
  return (
    <Box sx={mainStyle}>
      <Box sx={workoutListStyle}>{renderWorkoutList()}</Box>
      <Divider orientation="vertical" flexItem />
      <Box sx={workoutExStyle}>{renderWorkoutListItem()}</Box>
    </Box>
  );
};

export default WorkoutPresenter;
