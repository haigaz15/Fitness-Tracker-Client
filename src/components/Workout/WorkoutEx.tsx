import { useEffect, useRef, useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  CircularProgress,
  Divider,
  FormControlLabel,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Date from "../Date/Date";
import {
  arrayWorkoutVolumeToDashedWorkoutVolume,
  dashedExerciseVolumeSplitter,
  exerciseVolumeDashedStringConverter,
} from "../../utils/helper";
import {
  handleRepsChange,
  handleRestChange,
  handleWeightChange,
} from "../../handlers/handlers";
import ExerciseVolumeAdder from "../Exercise/ExerciseVolumeAdder";
import RemoveWorkoutVolumeButton from "../Button/RemoveWorkoutVolumeButton";
import AddWorkoutVolumeButton from "../Button/AddWorkoutVolumeButton";
import {
  ExerciseCategory,
  ExerciseOnWorkout,
  ExerciseVolume,
  ExerciseVoulmeItem,
} from "../../types/exercise-types";
import { CreateNewWorkoutModalProps } from "../../types/workout-type";
import SaveButton from "../Button/SaveButton";
import SaveIcon from "@mui/icons-material/Save";
import CancelButton from "../Button/CancelButton";
import WorkoutExercise from "./WorkoutExercise";
import ThinTextField from "../Textfield/ThinTextfield";
import TextArea from "../TextArea/TextArea";
import dayjs, { Dayjs } from "dayjs";
import TextEditToolbar from "../Toolbar/TextEditToolbar";

const WorkoutEx: React.FC<CreateNewWorkoutModalProps> = ({
  exercises,
  autoCompleteOpen,
  setAutoCompleteOpen,
  loadingExercises,
  autocompleteRefCall,
  handleSaveWorkout,
  handleSearchedExercises,
}) => {
  const categories = Object.values(ExerciseCategory);
  const [exerciseVolumes, setExerciseVolumes] = useState<ExerciseVolume[]>([]);
  const [workoutExercises, setWorkoutExercises] = useState<ExerciseOnWorkout[]>(
    []
  );
  const [exerciseName, setExerciseName] = useState<string | undefined>("");
  const [workoutForum, setWorkoutForum] = useState<{
    name: string;
    date: Dayjs | null; // Date is now of type Dayjs or null
    notes: string;
  }>({
    name: "",
    date: null, // Initialize as null or dayjs()
    notes: "",
  });
  // experimental
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [workoutVolumeExpantion, setWorkoutVolumeExpantion] = useState<
    { expanded: boolean }[]
  >([]);

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
    setWorkoutVolumeExpantion((prev) => [...prev, { expanded: false }]);
  };
  const handleWorkoutVolumeRemoval = () => {
    setExerciseVolumes(exerciseVolumes.slice(0, exerciseVolumes.length - 1));
  };

  const handleEditWorkoutVolume = (
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
  ) => {
    setWorkoutExercises((prev) => {
      const newWorkoutExercises = [...prev];
      newWorkoutExercises[exerciseIndex] = {
        name: exercise.name,
        set: exercise.set,
        reps: arrayWorkoutVolumeToDashedWorkoutVolume(workoutVolume.reps),
        rest: arrayWorkoutVolumeToDashedWorkoutVolume(workoutVolume.rest),
        weight: arrayWorkoutVolumeToDashedWorkoutVolume(workoutVolume.weight),
      };
      return newWorkoutExercises;
    });
    setWorkoutVolume({
      reps: dashedExerciseVolumeSplitter(exercise.reps),
      rest: dashedExerciseVolumeSplitter(exercise.rest),
      weight: dashedExerciseVolumeSplitter(exercise.weight),
    });
    setWorkoutVolumeExpantion((prev) => {
      const newExpantion = [...prev];
      newExpantion[exerciseIndex].expanded = false;
      return newExpantion;
    });
  };

  const handleExpantion = (index: number) => {
    setWorkoutVolumeExpantion((prev) => {
      const newExpantion = [...prev];
      newExpantion[index].expanded = !newExpantion[index].expanded;
      return newExpantion;
    });
  };
  const handleExerciseVolumeSave = (e: React.SyntheticEvent) => {
    if (!exerciseVolumes || exerciseVolumes.length === 0) {
      return;
    }
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

  const handleDeleteWorkoutExercise = (index: number) => {
    const newWorkoutExercises = [
      ...workoutExercises.slice(0, index),
      ...workoutExercises.slice(index + 1, workoutExercises.length),
    ];
    setWorkoutExercises(newWorkoutExercises);
  };
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [exerciseVolumes]);

  return (
    <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
      <Card sx={{ marginTop: 2 }}>
        <CardContent>
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
                width: "100%",
                height: "50px",
              }}
            >
              <Box
                flexGrow={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  textAlign="left"
                  variant="h5"
                  sx={{
                    background:
                      "linear-gradient(90deg, #333333, #555555, #777777)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                  }}
                >
                  Create Your Workout
                </Typography>
              </Box>
              <Button
                variant="text"
                sx={{ borderBottom: "solid", borderBottomColor: "primary" }}
                onClick={() =>
                  handleSaveWorkout(
                    workoutForum.name,
                    workoutForum.date,
                    workoutForum.notes,
                    workoutExercises,
                    setWorkoutExercises,
                    setWorkoutForum
                  )
                }
              >
                Save Workout <SaveIcon sx={{ marginLeft: 1 }} />
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: 2,
              }}
            >
              <ThinTextField
                label="Enter your Workout name"
                fullWidth
                value={workoutForum.name}
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  const newForum = { ...workoutForum };
                  newForum.name = e.target.value;
                  setWorkoutForum(newForum);
                }}
              />
              <Box>
                <Date
                  value={workoutForum.date}
                  onChange={(newValue) => {
                    const newForum = { ...workoutForum };
                    newForum.date = newValue || dayjs();
                    setWorkoutForum(newForum);
                  }}
                />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ marginTop: 2 }}>
        <CardContent>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" textAlign="left">
              Workout Notes
            </Typography>{" "}
            <Typography variant="body2" textAlign="left">
              Add your personal workout notes
            </Typography>
          </Box>
          <Divider />
          <Stack spacing={2} sx={{ my: 1 }}>
            <TextEditToolbar />
            <TextArea
              value={workoutForum.notes}
              rows={3}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                const newForum = { ...workoutForum };
                newForum.notes = e.target.value;
                setWorkoutForum(newForum);
              }}
            />
          </Stack>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: 2 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: 2,
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" textAlign="left">
                Exercise Creator
              </Typography>
              <Typography variant="body2" textAlign="left">
                Choose your exercise and add the desired volume
              </Typography>
            </Box>
            <Divider />
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
                options={exercises}
                open={autoCompleteOpen}
                onOpen={() => setAutoCompleteOpen(true)}
                onClose={() => setAutoCompleteOpen(false)}
                onChange={(e: React.SyntheticEvent, newValue) =>
                  setExerciseName(newValue?.name)
                }
                onInputChange={handleSearchedExercises}
                getOptionLabel={(option) => {
                  return option.name;
                }}
                loading={loadingExercises}
                renderInput={(params) => (
                  <ThinTextField
                    {...params}
                    label="Add Exercise"
                    fullWidth
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setExerciseName(e.target.value)
                    }
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
                  index === exercises.length - 1 ? (
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
          <Divider sx={{ mt: 3 }} />
          <Box sx={{ marginTop: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              {" "}
              <AddWorkoutVolumeButton
                handleWorkoutVolume={handleWorkoutVolumeAdition}
                style={{
                  borderRadius: "8px",
                  padding: "5px 10px",
                  width: "49%",
                  height: "32px",
                }}
              />{" "}
              <RemoveWorkoutVolumeButton
                handleWorkoutVolume={handleWorkoutVolumeRemoval}
                style={{
                  borderRadius: "8px",
                  padding: "5px 10px",
                  width: "49%",
                  height: "32px",
                }}
              />
            </Box>
            <ExerciseVolumeAdder
              exerciseVolumes={exerciseVolumes}
              containerRef={containerRef}
              handleRepsChange={handleRepsChange}
              handleRestChange={handleRestChange}
              handleWeightChange={handleWeightChange}
            />
            <Divider sx={{ mt: 5 }} />
            <CardActions sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
              <SaveButton
                handleClick={handleExerciseVolumeSave}
                color="primary"
                style={{
                  borderRadius: "8px",
                  padding: "5px 10px",
                  width: "20%",
                  height: "40px",
                }}
                buttonTitle="save exercise"
              />
              <CancelButton
                handleClick={() => setExerciseVolumes([])}
                style={{
                  borderRadius: "8px",
                  padding: "5px 10px",
                  width: "20%",
                  height: "40px",
                }}
                buttonTitle="Cancel"
              />
            </CardActions>
          </Box>
        </CardContent>
      </Card>
      <Card
        sx={{
          marginTop: 2,
        }}
      >
        <CardContent>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" textAlign="left">
              Added Exercises
            </Typography>{" "}
            <Typography variant="body2" textAlign="left">
              Your newly added exercises will appear bellow!
            </Typography>
          </Box>
          <Divider />
          <Stack
            sx={{
              my: 1,
              width: "900px",
            }}
          >
            {workoutExercises.map((workoutExercise, index) => (
              <WorkoutExercise
                exerciseIndex={index}
                exercise={workoutExercise}
                handleDeleteWorkoutExercise={() =>
                  handleDeleteWorkoutExercise(index)
                }
                handleEditWorkoutVolume={handleEditWorkoutVolume}
                workoutVolumeExpantion={workoutVolumeExpantion}
                handleExpantion={handleExpantion}
                setWorkoutVolumeExpantion={setWorkoutVolumeExpantion}
              />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
export default WorkoutEx;
