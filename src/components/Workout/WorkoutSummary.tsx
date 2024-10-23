import { Box, Typography } from "@mui/material";
import { WorkoutSession } from "../../types/workout-type";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const WorkoutSummary: React.FC<{ workout: WorkoutSession }> = ({ workout }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "90%" }}
      >
        <Typography variant="subtitle1">Name</Typography>
        <Box
          sx={{
            display: "flex",
            width: "40%",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle1">Day</Typography>
          <Typography variant="subtitle1">Total Sets</Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "90%" }}
      >
        <Typography variant="subtitle1">{workout.name}</Typography>
        <Box
          sx={{
            display: "flex",
            width: "40%",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle1">
            {daysOfWeek[new Date(workout.workoutDate).getDay()]}
          </Typography>
          <Typography variant="subtitle1" align="left" sx={{ width: "67px" }}>
            {workout.exercises.reduce(
              (accumulator, exercise) => exercise.set + accumulator,
              0
            )}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkoutSummary;
