import { Box, MenuItem, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import AddWorkoutVolumeButton from "../Button/AddWorkoutVolumeButton";
import RemoveWorkoutVolumeButton from "../Button/RemoveWorkoutVolumeButton";
import SaveButton from "../Button/SaveButton";
import CancelButton from "../Button/CancelButton";
import { useStore } from "../../hooks/userStore";
import ExerciseVolumeAdder from "../Exercise/ExerciseVolumeAdder";
import { ExerciseVolume } from "../../types/exercise-types";
import {
  handleRepsChange,
  handleRestChange,
  handleWeightChange,
} from "../../handlers/handlers";
interface AddWorkoutFormProps {
  choosenExercise: string;
  handleSaveExerciseToWorkout: (
    workoutId: string,
    exerciseVolumes: ExerciseVolume[]
  ) => void;
  setAddWorkoutModal: (value: React.SetStateAction<boolean>) => void;
}
const AddWorkoutForm: React.FC<AddWorkoutFormProps> = ({
  choosenExercise,
  handleSaveExerciseToWorkout,
  setAddWorkoutModal,
}) => {
  const { workoutStore } = useStore();
  const [workoutId, setWorkoutId] = useState("");
  const AddWorkoutList = () => {
    return workoutStore.workoutSessions.map((workout) => (
      <MenuItem
        key={new Date(workout.workoutDate).toISOString()}
        value={workout.name}
        onClick={() => setWorkoutId(workout.id)}
      >
        {workout.name}
      </MenuItem>
    ));
  };

  const [exerciseVolumes, setExerciseVolumes] = useState<ExerciseVolume[]>([]);
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

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scroll({
        left: 0,
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [exerciseVolumes]);
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        height: 700,
        bgcolor: "background.paper",
        boxShadow: 24,
        pt: 3,
        px: 5,
        pb: 6,
        borderRadius: "2%",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "56px",
          marginRight: "10px",
        }}
      >
        <Typography variant="h6" color="secondary.main">
          {" "}
          Workout{" "}
        </Typography>
      </Box>
      <TextField
        id="outlined-select-workout"
        select
        label="Add Workout"
        helperText="Please select your workout or create a new one"
        fullWidth
      >
        {AddWorkoutList()}
      </TextField>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "56px",
          marginRight: "10px",
        }}
      >
        <Typography variant="h6" color="secondary.main">
          {" "}
          Exercise{" "}
        </Typography>
      </Box>
      <TextField
        id="outlined-select-exercise"
        label="Add exercise"
        value={choosenExercise}
        inputProps={{ readOnly: true }}
        helperText="your choosen exercise"
        fullWidth
      />
      <span>
        {" "}
        <AddWorkoutVolumeButton
          handleWorkoutVolume={handleWorkoutVolumeAdition}
          style={{ borderRadius: "8px", padding: "10px 20px", width: "49%" }}
        />{" "}
        <RemoveWorkoutVolumeButton
          handleWorkoutVolume={handleWorkoutVolumeRemoval}
          style={{ borderRadius: "8px", padding: "10px 20px", width: "49%" }}
        />
      </span>
      <ExerciseVolumeAdder
        exerciseVolumes={exerciseVolumes}
        containerRef={containerRef}
        handleRepsChange={handleRepsChange}
        handleRestChange={handleRestChange}
        handleWeightChange={handleWeightChange}
      />
      <span>
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 20,
            padding: 2.7,
            width: "294px",
          }}
        >
          <SaveButton
            handleClick={() =>
              handleSaveExerciseToWorkout(workoutId, exerciseVolumes)
            }
            style={{ borderRadius: "8px", padding: "10px 20px", width: "100%" }}
            buttonTitle="save"
          />
        </Box>
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            right: 25,
            padding: 2.7,
            width: "294px",
          }}
        >
          <CancelButton
            handleClick={() => setAddWorkoutModal(false)}
            style={{ borderRadius: "8px", padding: "10px 20px", width: "100%" }}
            buttonTitle="Cancel"
          />
        </Box>
      </span>
    </Box>
  );
};

export default AddWorkoutForm;
