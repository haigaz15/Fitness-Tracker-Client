import { useEffect, useRef, useState } from "react";
import {
  Autocomplete,
  Box,
  Checkbox,
  CircularProgress,
  Divider,
  FormControlLabel,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import Date from "../Date/Date";
import { exerciseVolumeDashedStringConverter } from "../../utils/helper";
import {
  handleRepsChange,
  handleRestChange,
  handleWeightChange,
} from "../../utils/handlers";
import ExerciseVolumeAdder from "../Exercise/ExerciseVolumeAdder";
import RemoveWorkoutVolumeButton from "../Button/RemoveWorkoutVolumeButton";
import AddWorkoutVolumeButton from "../Button/AddWorkoutVolumeButton";
import { ExerciseOnWorkout, ExerciseVolume } from "../../types/exercise-types";
import { CreateNewWorkoutModalProps } from "../../types/workout-type";
import SaveButton from "../Button/SaveButton";
import CancelButton from "../Button/CancelButton";
import WorkoutExercise from "./WorkoutExercise";

const categories = ["Strength", "Cardio", "Flexibility", "all"];
const WorkoutEx: React.FC<CreateNewWorkoutModalProps> = ({
  exercsies,
  autoCompleteOpen,
  setAutoCompleteOpen,
  loadingExercises,
  autocompleteRefCall,
}) => {
  const [exerciseVolumes, setExerciseVolumes] = useState<ExerciseVolume[]>([]);
  const [workoutExercises, setWorkoutExercises] = useState<ExerciseOnWorkout[]>(
    []
  );
  const [exerciseName, setExerciseName] = useState<string | undefined>("");

  // experimental
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const handleWorkoutVolumeAdition = () => {
    const newExerciseVolume = [
      ...exerciseVolumes,
      { set: "", reps: "", rest: "", weight: "" },
    ];
    setExerciseVolumes(newExerciseVolume);
  };
  const handleWorkoutVolumeRemoval = () => {
    setExerciseVolumes(exerciseVolumes.slice(0, exerciseVolumes.length - 1));
  };

  const handleExerciseVolumeSave = (e: React.SyntheticEvent) => {
    const result = exerciseVolumeDashedStringConverter(exerciseVolumes);
    setWorkoutExercises([
      ...workoutExercises,
      {
        name: exerciseName ? exerciseName : "",
        set: exerciseVolumes.length,
        ...result,
      },
    ]);
    setExerciseVolumes([]);
  };
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    console.log("Scrolled:", target.scrollTop);
  };
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [exerciseVolumes]);
  return (
    <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "90%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            marginTop: 2,
          }}
        >
          <TextField
            label="Enter your Workout name"
            fullWidth
            sx={{ marginRight: 2 }}
          />
          <Date />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: 2,
          }}
        >
          <Typography variant="h6">Choose catagory </Typography>
          {/* Category Checkboxes */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              gap: 1,
              marginTop: 1,
            }}
          >
            {categories.map((category) => (
              <FormControlLabel
                key={category}
                control={
                  <Checkbox
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                }
                label={category}
              />
            ))}
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <Autocomplete
              options={exercsies}
              open={autoCompleteOpen}
              onOpen={() => setAutoCompleteOpen(true)}
              onClose={() => setAutoCompleteOpen(false)}
              onChange={(e: React.SyntheticEvent, newValue) =>
                setExerciseName(newValue?.name)
              }
              getOptionLabel={(option) => {
                return option.name;
              }}
              loading={loadingExercises}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Add Exercise"
                  fullWidth
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loadingExercises ? (
                          <CircularProgress
                            color="primary"
                            size={28}
                            style={{ marginRight: 10 }}
                          />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
              renderOption={(props, option, { index }) =>
                index === exercsies.length - 1 ? (
                  <Paper
                    {...props}
                    onScroll={handleScroll}
                    sx={{ p: 2, width: "100%", overflowY: "auto" }}
                    ref={autocompleteRefCall}
                    component="article"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6">{option.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Primary Muscle: {option.primaryMuscle}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Secondary Muscles: {option.secondaryMuscles}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Difficulty: {option.difficulty}
                      </Typography>
                    </Box>
                  </Paper>
                ) : (
                  <Paper
                    {...props}
                    onScroll={handleScroll}
                    sx={{ p: 2, width: "100%", overflowY: "auto" }}
                    component="article"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6">{option.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Primary Muscle: {option.primaryMuscle}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Secondary Muscles: {option.secondaryMuscles}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Difficulty: {option.difficulty}
                      </Typography>
                    </Box>
                  </Paper>
                )
              }
            />
          </Box>
        </Box>
        <Box sx={{ marginTop: 1 }}>
          <span>
            {" "}
            <AddWorkoutVolumeButton
              handleWorkoutVolume={handleWorkoutVolumeAdition}
            />{" "}
            <RemoveWorkoutVolumeButton
              handleWorkoutVolume={handleWorkoutVolumeRemoval}
            />
          </span>
          <ExerciseVolumeAdder
            exerciseVolumes={exerciseVolumes}
            containerRef={containerRef}
            handleRepsChange={handleRepsChange}
            handleRestChange={handleRestChange}
            handleWeightChange={handleWeightChange}
          />
          <Box sx={{ display: "flex", marginTop: 1 }}>
            <Box sx={{ width: "49%" }}>
              <SaveButton
                handleClick={handleExerciseVolumeSave}
                style={{
                  borderRadius: "8px",
                  padding: "10px 20px",
                  width: "100%",
                }}
                buttonTitle="save exercise"
              />
            </Box>
            <Box sx={{ width: "49%", marginLeft: 0.7 }}>
              <CancelButton
                handleClick={() => console.log("canceled")}
                style={{
                  borderRadius: "8px",
                  padding: "10px 20px",
                  width: "100%",
                }}
                buttonTitle="Cancel"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Divider sx={{ marginTop: "2.5%" }} />
        <Typography sx={{ marginTop: 2 }} variant="h6">
          Added Exercises
        </Typography>{" "}
        {workoutExercises.map((workoutExercise) => (
          <Box sx={{ display: "flex" }}>
            <WorkoutExercise exercise={workoutExercise} hasExpantion={false} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "inherit", // Prevent background color change on hover
                  },
                  marginLeft: 2,
                  width: 40,
                  height: 40,
                }}
              >
                <CancelIcon fontSize="medium" />
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "inherit", // Prevent background color change on hover
                  },
                  marginLeft: 2,
                  width: 40,
                  height: 40,
                }}
              >
                <EditIcon fontSize="medium" />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default WorkoutEx;
