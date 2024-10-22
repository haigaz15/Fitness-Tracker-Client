import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CardMedia,
  Toolbar,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export const workouts = {
  name: "chest and beiceps",
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

const workoutBoxStyle = {
  padding: "8px 16px",
  backgroundColor: "white",
  color: "white",
  borderRadius: "4px",
  cursor: "pointer",
  textAlign: "center",
  boxShadow: 1,
  "&:hover": {
    backgroundColor: "#BBDEFB",
    boxShadow: 2,
  },
  "&:active": {
    backgroundColor: "#1565C0",
    boxShadow: 0,
  },
  width: {
    xs: "60%",
    sm: "70%",
    md: "80%",
    lg: "90%",
  },
};

const Workout = () => {
  return (
    <Box>
      <Toolbar />
      <Typography variant="h1" color="text.secondary">
        Workouts
      </Typography>
      <div style={{ marginLeft: "2%" }}>
        <Accordion sx={{ width: "1000px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Workout on {workouts.workoutDate}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stepper orientation="vertical">
              {workouts.exercises.map((item, index) => (
                <Step key={index}>
                  <Box
                    onClick={() => console.log("yello")}
                    sx={{ width: "100%" }}
                  >
                    <Box sx={workoutBoxStyle}>
                      <Box sx={{ display: "flex" }}>
                        <StepLabel>{item.exercise.name}</StepLabel>
                        <CardMedia
                          component="img"
                          height="110"
                          image={
                            "https://www.shutterstock.com/image-illustration/closegrip-barbell-bench-press-3d-600nw-430936051.jpg"
                          }
                          alt={item.exercise.name}
                        />
                      </Box>
                      <Typography variant="body2" color="black">
                        Set: {item.set}, Reps: {item.reps}
                      </Typography>
                    </Box>
                  </Box>
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
