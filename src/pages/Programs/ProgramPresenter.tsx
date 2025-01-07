import { Box } from "@mui/material";
import { WorkoutSession } from "../../types/workout-type";

interface ProgramPresenterProps {
  name: string;
  description: string;
  workouts: WorkoutSession[];
  style: { [key: string]: string };
}
const ProgramPresenter: React.FC<ProgramPresenterProps> = ({
  name,
  description,
  workouts,
  style,
}) => {
  return (
    <Box sx={style}>
      <h1>{name}</h1>
      <p>{description}</p>
      <Box>
        {workouts.map((workout) => (
          <Box key={workout.id}>
            <h2>{workout.name}</h2>
            <p>{workout.workoutDate.toDateString()}</p>
            <p>{workout.notes}</p>
            <Box>
              {workout.exercises.map((exercise) => (
                <Box key={exercise.name}>
                  <p>{exercise.name}</p>
                  <p>{exercise.set}</p>
                  <p>{exercise.reps}</p>
                  <p>{exercise.weight}</p>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProgramPresenter;
