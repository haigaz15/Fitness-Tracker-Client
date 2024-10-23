import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Toolbar,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import WorkoutSummary from "../../components/Workout/WorkoutSummary";
import WorkoutHead from "../../components/Workout/WorkoutHead";
import { useStore } from "../../hooks/userStore";
import ExCard from "../../components/Card/ExCard";
import WorkoutExerciseCardContent from "../../components/Workout/WorkoutExerciseCardContent";

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
  const { workoutStore } = useStore();
  return (
    <Box>
      <Toolbar />
      <WorkoutHead />
      {workoutStore.workoutSessions.map((workout) => (
        <Box style={{ marginLeft: "2%" }}>
          <Accordion sx={{ width: "1000px", padding: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <WorkoutSummary workout={workout} />
            </AccordionSummary>
            <AccordionDetails>
              <Stepper orientation="vertical">
                {workout.exercises.map((exercise, index) => (
                  <Step key={index}>
                    <Box
                      onClick={() => console.log("yello")}
                      sx={{ width: "100%" }}
                    >
                      <Box sx={workoutBoxStyle}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <StepLabel>{exercise.name}</StepLabel>
                          <ExCard
                            cardStyle={{
                              display: "flex",
                              alignItems: "center",
                            }}
                            cardContentStyle={{ flex: "1 0 auto" }}
                            cardMediaStyle={{
                              component: "img",
                              image:
                                "https://weighttraining.guide/wp-content/uploads/2016/10/dumbbell-shrug-resized.png",
                              name: exercise.name,
                              sx: {
                                height: 200,
                                objectFit: "contain",
                                width: 400, // Adjust width to fit your layout
                                flexShrink: 0, // Prevent the image from shrinking
                              },
                            }}
                            cardContentLayout={() => (
                              <WorkoutExerciseCardContent exercise={exercise} />
                            )}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Step>
                ))}
              </Stepper>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
};

export default Workout;
