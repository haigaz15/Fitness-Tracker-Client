import {
  Avatar,
  Box,
  Collapse,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import {
  ExerciseOnWorkout,
  ExerciseVoulmeItem,
} from "../../types/exercise-types";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { dashedExerciseVolumeSplitter } from "../../utils/helper";
import React, { useState } from "react";

const WorkoutExercise: React.FC<{
  exerciseIndex: number;
  exercise: ExerciseOnWorkout;
  workoutVolumeExpantion: { expanded: boolean }[];
  handleDeleteWorkoutExercise: () => void;
  handleEditWorkoutVolume: (
    exercise: ExerciseOnWorkout,
    exerciseIndex: number,
    workoutVolume: {
      [key: ExerciseVoulmeItem]: Array<string>;
    },
    setWorkoutVolume: React.Dispatch<
      React.SetStateAction<{
        [key: string]: string[];
      }>
    >,
    setWorkoutVolumeExpantion: React.Dispatch<
      React.SetStateAction<
        {
          expanded: boolean;
        }[]
      >
    >
  ) => void;
  setWorkoutVolumeExpantion: React.Dispatch<
    React.SetStateAction<
      {
        expanded: boolean;
      }[]
    >
  >;
  handleExpantion: (index: number) => void;
}> = ({
  exerciseIndex,
  exercise,
  workoutVolumeExpantion,
  setWorkoutVolumeExpantion,
  handleDeleteWorkoutExercise,
  handleEditWorkoutVolume,
  handleExpantion,
}) => {
  const setArray = new Array(exercise.set).fill(exercise.set);
  const [workoutVolume, setWorkoutVolume] = useState<{
    [key: ExerciseVoulmeItem]: Array<string>;
  }>({
    reps: dashedExerciseVolumeSplitter(exercise.reps),
    rest: dashedExerciseVolumeSplitter(exercise.rest),
    weight: dashedExerciseVolumeSplitter(exercise.weight),
  });
  const handleVolumeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    itemType: ExerciseVoulmeItem
  ) => {
    const newWorkoutVolume = { ...workoutVolume };
    newWorkoutVolume[itemType][index] = e.target.value;
    setWorkoutVolume(newWorkoutVolume);
  };

  return (
    <Paper
      sx={{
        width: "98%",
        transition: "height 0.3s ease",
        marginTop: 2,
        padding: 1,
        marginBottom: 2,
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Avatar
            alt={exercise.name}
            src="https://weighttraining.guide/wp-content/uploads/2016/05/barbell-curl-resized.png"
            sx={{ width: 56, height: 56 }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", width: "90%" }}>
            <Typography variant="inherit" align="left" color="primary.main">
              {exercise.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1%",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ width: "100px" }}
                align="left"
              >
                sets {exercise.set}
              </Typography>
              <Typography
                variant="inherit"
                sx={{ width: "200px" }}
                align="left"
              >
                reps {exercise.reps}
              </Typography>
              <Typography
                variant="inherit"
                sx={{ width: "200px" }}
                align="left"
              >
                rest {exercise.rest}
              </Typography>
              <Typography
                variant="inherit"
                sx={{ width: "300px" }}
                align="left"
              >
                weight {exercise.weight}
              </Typography>
              <IconButton onClick={handleDeleteWorkoutExercise}>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={() => handleExpantion(exerciseIndex)}>
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() =>
                  handleEditWorkoutVolume(
                    exercise,
                    exerciseIndex,
                    workoutVolume,
                    setWorkoutVolume,
                    setWorkoutVolumeExpantion
                  )
                }
              >
                <SaveIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Collapse
        in={workoutVolumeExpantion[exerciseIndex].expanded}
        timeout="auto"
        unmountOnExit
      >
        <Divider sx={{ marginTop: "1%" }} />
        <Box sx={{ marginTop: "1%" }}>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography variant="body2" sx={{ width: "80px" }}>
              Set
            </Typography>
            <Typography variant="body2" sx={{ width: "80px" }}>
              Reps
            </Typography>
            <Typography variant="body2" align="left" sx={{ width: "80px" }}>
              Rest(SEC)
            </Typography>
            <Typography variant="body2" align="left" sx={{ width: "80px" }}>
              Weight(KG)
            </Typography>
          </Box>
        </Box>
        {setArray.map((_, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "1%",
              }}
            >
              <TextField
                size="small"
                name="set"
                sx={{ width: "80px" }}
                value={index + 1}
              />
              <TextField
                size="small"
                name="reps"
                sx={{ width: "80px" }}
                value={workoutVolume.reps[index]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleVolumeChange(e, index, "reps")
                }
              />
              <TextField
                size="small"
                name="rest"
                sx={{ width: "80px" }}
                value={workoutVolume.rest[index]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleVolumeChange(e, index, "rest")
                }
              />
              <TextField
                size="small"
                name="weight"
                sx={{ width: "80px" }}
                value={workoutVolume.weight[index]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleVolumeChange(e, index, "weight")
                }
              />
            </Box>
          );
        })}
      </Collapse>
    </Paper>
  );
};

export default WorkoutExercise;
