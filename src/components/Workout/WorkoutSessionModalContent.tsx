import {
  Box,
  Button,
  Paper,
  Popover,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import {
  ExerciseOnWorkout,
  ExerciseOnWorkoutWithError,
} from "../../types/exercise-types";
import ExTimeField from "../Date/ExTimeField";
import { Dayjs } from "dayjs";
import { calculateElapsedTimeWithDaysJs } from "../../utils/helper";
import workoutAPIServiceInstance from "../../services/WorkoutAPIService";

const WorkoutSessionModalContent: React.FC<{
  exercises: ExerciseOnWorkout[];
  workoutId: string | undefined;
  handleEndWorkoutSession: (
    logs: ExerciseOnWorkoutWithError[],
    endTime: Date
  ) => void;
}> = ({ exercises, workoutId, handleEndWorkoutSession }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [exerciseLogs, setExerciseLogs] = useState<
    ExerciseOnWorkoutWithError[]
  >(
    exercises.map(
      () =>
        ({
          reps: "",
          rest: "",
          weight: "",
          error: false,
          errorType: "",
        } as ExerciseOnWorkoutWithError)
    )
  );
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [startTime, setStartTime] = useState<Dayjs | null>(null);
  const [endTime, setEndTime] = useState<Dayjs | null>(null);
  const [manualTime, setManualTime] = useState(false);
  const [timerIsRunning, setTimerIsRunning] = useState(true);
  const startTimeRef = useRef(Date.now());
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [startEndTimeError, setStartEndTimeError] = useState(false);

  const handleClickTimeManually = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleCloseTimeManually = () => {
    setAnchorEl(null);
  };

  const handleSaveTimeManually = () => {
    if (startTime && endTime) {
      if (endTime.diff(startTime) < 0) {
        setStartEndTimeError(true);
      } else {
        setTimerIsRunning(false);
        setManualTime(true);
        setAnchorEl(null);
      }
    }
  };

  const openManualTime = Boolean(anchorEl);
  const id = openManualTime ? "add-time-popover" : undefined;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinishWorkout = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setTimerIsRunning(false);
  };

  const handleRepsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const input = e.target.value;
    const isValid = /^(\d+(-\d+)*|)?$/.test(input);
    const newValues = [...exerciseLogs];
    newValues[index].reps = input;
    newValues[index].error = !isValid;
    newValues[index].errorType = "reps";
    setExerciseLogs(newValues);
  };

  const handleRestChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const input = e.target.value;
    const isValid = /^(\d+(-\d+)*|)?$/.test(input);
    const newValues = [...exerciseLogs];
    newValues[index].rest = input;
    newValues[index].error = !isValid;
    newValues[index].errorType = "rest";
    setExerciseLogs(newValues);
  };

  const handleWeightChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const input = e.target.value;
    const isValid = /^(\d+(-\d+)*|)?$/.test(input);
    const newValues = [...exerciseLogs];

    newValues[index].weight = input;
    newValues[index].error = !isValid;
    newValues[index].errorType = "weight";

    setExerciseLogs(newValues);
  };

  useEffect(() => {
    if (!timerIsRunning) return;
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const totalSeconds = Math.floor(elapsed / 1000);
      setSeconds(totalSeconds % 60);
      setMinutes(Math.floor(totalSeconds / 60) % 60);
      setHours(Math.floor(totalSeconds / 3600));
    }, 1000);

    return () => clearInterval(interval);
  }, [timerIsRunning]);

  const handleStartTimeChange = (newValue: Dayjs | null) => {
    setStartTime(newValue);
  };

  const handleEndTimeChange = (newValue: Dayjs | null) => {
    setEndTime(newValue);
  };

  useEffect(() => {
    if (startTime) {
      workoutAPIServiceInstance
        .putStartWorkoutSession({
          id: workoutId,
          startTime: startTime.toDate(),
        })
        .then((result) => console.log(result));
    }
  }, [startTime, workoutId]);

  return (
    <Paper
      sx={{
        position: "absolute",
        top: "50%",
        left: "55%",
        transform: "translate(-50%, -50%)",
        width: 600,
        height: 650,
        bgcolor: "background.paper",
        padding: 4,
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          marginBottom: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {" "}
        <Typography variant="h6">
          {" "}
          Workout Time:{" "}
          {manualTime && startTime && endTime
            ? calculateElapsedTimeWithDaysJs(
                startTime.toDate(),
                endTime.toDate()
              )
            : `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
                2,
                "0"
              )}:${String(seconds).padStart(2, "0")}`}
        </Typography>
        <Box>
          <Button
            onClick={handleClickTimeManually}
            sx={{
              padding: "8px 16px",
              borderRadius: "4px",
              textTransform: "none",
            }}
          >
            Add Time Manually
          </Button>

          <Popover
            id={id}
            open={openManualTime}
            anchorEl={anchorEl}
            onClose={handleCloseTimeManually}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Box
              sx={{
                padding: 2,
                width: 250,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                backgroundColor: "background.paper",
              }}
            >
              <Typography variant="h6">Add Time</Typography>
              <ExTimeField
                label="start time"
                handleTimeChange={handleStartTimeChange}
              />
              <ExTimeField
                label="end time"
                handleTimeChange={handleEndTimeChange}
              />
              <Button
                variant="contained"
                sx={{ alignSelf: "flex-end", textTransform: "none" }}
                onClick={handleSaveTimeManually}
              >
                Save
              </Button>
              {startEndTimeError && (
                <Typography variant="subtitle2">
                  End time is before Start time are you sure you did a negative
                  workout?🤔😆
                </Typography>
              )}
            </Box>
          </Popover>
        </Box>
      </Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {exercises.map((step, index) => (
          <Step key={step.name}>
            <StepLabel
              optional={
                index === exercises.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.name}
            </StepLabel>
            <StepContent>
              <Box sx={{ mt: 2 }}>
                <Box sx={{ mt: 1, mb: 1 }}>
                  <Typography>Reps: {step.reps}</Typography>
                  <Typography>Rest: {step.rest}</Typography>
                  <Typography>Weight: {step.weight}</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2">
                    Log Actual Performance:
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      mt: 1,
                    }}
                  >
                    <TextField
                      label="Reps"
                      size="small"
                      value={
                        exerciseLogs[index]?.reps
                          ? exerciseLogs[index].reps
                          : ""
                      }
                      helperText={
                        exerciseLogs[index]?.error &&
                        exerciseLogs[index]?.errorType === "reps"
                          ? "Invalid format. Use numbers separated by dashes (e.g., 12-12-12)."
                          : exerciseLogs[index]?.error
                          ? "                                                                 "
                          : ""
                      }
                      onChange={(e) => handleRepsChange(e, index)}
                      sx={{
                        "& .MuiFormHelperText-root": {
                          minHeight: "39.83px", // Reserve space for helper text,
                        },
                      }}
                    />
                    <TextField
                      label="Rest (sec)"
                      size="small"
                      value={
                        exerciseLogs[index]?.rest
                          ? exerciseLogs[index].rest
                          : ""
                      }
                      helperText={
                        exerciseLogs[index]?.error &&
                        exerciseLogs[index]?.errorType === "rest"
                          ? "Invalid format. Use numbers separated by dashes (e.g., 12-12-12)."
                          : exerciseLogs[index]?.error
                          ? "                                                                 "
                          : ""
                      }
                      sx={{
                        "& .MuiFormHelperText-root": {
                          minHeight: "39.83px", // Reserve space for helper text
                        },
                      }}
                      onChange={(e) => handleRestChange(e, index)}
                    />
                    <TextField
                      label="Weight (kg)"
                      size="small"
                      value={
                        exerciseLogs[index]?.weight
                          ? exerciseLogs[index].weight
                          : ""
                      }
                      helperText={
                        exerciseLogs[index]?.error &&
                        exerciseLogs[index]?.errorType === "weight"
                          ? "Invalid format! Use numbers separated by dashes (e.g., 12-12-12)."
                          : exerciseLogs[index]?.error
                          ? "                                                                 "
                          : ""
                      }
                      onChange={(e) => handleWeightChange(e, index)}
                      sx={{
                        "& .MuiFormHelperText-root": {
                          minHeight: "39.83px", // Reserve space for helper text
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={
                    !(index === exercises.length - 1)
                      ? handleNext
                      : handleFinishWorkout
                  }
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === exercises.length - 1 ? "Finish" : "Continue"}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === exercises.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>
            All exercises are completed - you&apos;re finished
          </Typography>
          <Button
            onClick={() =>
              handleEndWorkoutSession(
                exerciseLogs,
                manualTime && endTime ? endTime.toDate() : new Date()
              )
            }
            sx={{ mt: 1, mr: 1 }}
          >
            End Workout
          </Button>
        </Paper>
      )}
    </Paper>
  );
};

export default WorkoutSessionModalContent;
