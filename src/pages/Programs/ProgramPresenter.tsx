import { Box, Button } from "@mui/material";
import { WorkoutSession } from "../../types/workout-type";

interface ProgramPresenterProps {
  name: string;
  description: string;
  workouts: WorkoutSession[];
  style: { [key: string]: any };
  handleAddition: (e: React.MouseEvent) => void;
  scrollRef: React.RefObject<HTMLDivElement>;
}
const ProgramPresenter: React.FC<ProgramPresenterProps> = ({
  name,
  description,
  workouts,
  style,
  handleAddition,
  scrollRef,
}) => {
  return (
    <Box sx={style.containerStyle}>
      <h1>{name}</h1>
      <Button onClick={handleAddition}>Add Program</Button>
      <Box ref={scrollRef} sx={style.programStyle}>
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
