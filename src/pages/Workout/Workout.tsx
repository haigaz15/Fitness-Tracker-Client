import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  List,
  ListItem,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const workout = {
  workoutDate: "2024-08-27",
  exercises: [
    {
      exercise: {
        name: "Barbell Curl",
        type: "barbell",
        description:
          "Holds the bar with underhand grip slightly wider than shoulder width. Curl the barbell up until fully contacted motion then lower the barbell to the starting point.",
      },
      set: 4,
      reps: "12-4-6-8",
    },
    {
      exercise: {
        name: "Dumbbell Press",
        type: "dumbbell",
        description:
          "Press the dumbbells upwards while sitting on a bench with your back straight.",
      },
      set: 3,
      reps: "10-8-6",
    },
    {
      exercise: {
        name: "Deadlift",
        type: "barbell",
        description:
          "Lift the barbell from the ground to thigh level while keeping your back straight.",
      },
      set: 3,
      reps: "8-6-4",
    },
  ],
};

const Workout = () => {
  return (
    <Box>
      <Toolbar />
      <Typography variant="h1" color="text.secondary">
        Workouts
      </Typography>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Workout on {workout.workoutDate}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stepper orientation="vertical">
              {workout.exercises.map((item, index) => (
                <Step key={index}>
                  <StepLabel>{item.exercise.name}</StepLabel>
                  <Typography variant="body2">
                    Set: {item.set}, Reps: {item.reps}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.exercise.description}
                  </Typography>
                </Step>
              ))}
            </Stepper>
          </AccordionDetails>
        </Accordion>
      </div>
    </Box>
  );
};

export default Workout;
