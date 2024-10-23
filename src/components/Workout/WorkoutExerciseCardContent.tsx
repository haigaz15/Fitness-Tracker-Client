import { Typography } from "@mui/material";
import { ExerciseOnWorkout } from "../../types/exercise-types";

const WorkoutExerciseCardContent: React.FC<{ exercise: ExerciseOnWorkout }> = ({
  exercise,
}) => {
  return (
    <>
      <Typography>{exercise.set}</Typography>
      <Typography>{exercise.reps}</Typography>
    </>
  );
};

export default WorkoutExerciseCardContent;
