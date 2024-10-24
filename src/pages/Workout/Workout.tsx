import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Toolbar,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkoutSummary from "../../components/Workout/WorkoutSummary";
import WorkoutHead from "../../components/Workout/WorkoutHead";
import { useStore } from "../../hooks/userStore";
import WorkoutExercise from "../../components/Workout/WorkoutExercise";

const Workout = () => {
  const { workoutStore } = useStore();
  return (
    <Box>
      <Toolbar />
      <WorkoutHead />
      {workoutStore.workoutSessions.map((workout) => (
        <Box sx={{ marginLeft: "2%" }}>
          <Accordion sx={{ width: "1100px", padding: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <WorkoutSummary workout={workout} />
            </AccordionSummary>
            <AccordionDetails sx={{ maxHeight: 800, overflowY: "auto" }}>
              {workout.exercises.map((exercise) => {
                return (
                  <WorkoutExercise key={exercise.name} exercise={exercise} />
                );
              })}
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
};

export default Workout;
