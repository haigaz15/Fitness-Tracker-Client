import { Box, Typography } from "@mui/material";
import { WorkoutSession } from "../../types/workout-type";
import { ExerciseOnWorkout } from "../../types/exercise-types";

const WorkoutListItem: React.FC<{ exercise: ExerciseOnWorkout }> = ({
  exercise,
}) => {
  return (
    <Box
      sx={{
        width: "31%",
        height: "30%",
        marginTop: 1,
        display: "flex",
        boxShadow: 2,
      }}
    >
      <Box sx={{ flex: 1.5 }}></Box>
      <Box sx={{ flex: 3, display: "flex", flexDirection: "column" }}>
        <Typography variant="subtitle1">
          Exercise Name: {exercise.name}{" "}
        </Typography>

        <Box
          id="targets"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Typography variant="subtitle1" textAlign="left">
            Set: {exercise.set} Reps: {exercise.reps} Rest: {exercise.rest}{" "}
            Weight: {exercise.weight}
          </Typography>
          {/* <Typography variant="subtitle1" textAlign="left">
            Primary Muscle: Chest
          </Typography>
          <Typography variant="subtitle2" textAlign="left">
            Secondary Muscles: Triceps - shoulders - back
          </Typography>
          <Typography variant="subtitle2" textAlign="left">
            Difficulty: Hard
          </Typography> */}
        </Box>
      </Box>
    </Box>
  );
};

export default WorkoutListItem;
