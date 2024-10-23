import {
  Box,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import AddWorkoutVolumeButton from "../Button/AddWorkoutVolumeButton";
import RemoveWorkoutVolumeButton from "../Button/RemoveWorkoutVolumeButton";
import SaveButton from "../Button/SaveButton";
import CancelButton from "../Button/CancelButton";
import { useStore } from "../../hooks/userStore";

const AddWorkoutList = () => {
  const { workoutStore } = useStore();
  return workoutStore.workoutSessions.map((workout) => (
    <MenuItem key={workout.workoutDate} value={workout.name}>
      {workout.name}
    </MenuItem>
  ));
};
interface WorkoutVolume {
  set: string;
  rep: string;
}
const AddWorkoutForm: React.FC<{ choosenExercise: string }> = ({
  choosenExercise,
}) => {
  const [workoutVolumes, setWorkoutVolumes] = useState<WorkoutVolume[]>(
    [] as WorkoutVolume[]
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const handleWorkoutVolumeAdition = () => {
    const newWorkoutVolume = [...workoutVolumes, { set: "", rep: "" }];
    setWorkoutVolumes(newWorkoutVolume);
  };
  const handleWorkoutVolumeRemoval = () => {
    setWorkoutVolumes(workoutVolumes.slice(0, workoutVolumes.length - 1));
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [workoutVolumes]);
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
        />{" "}
        <RemoveWorkoutVolumeButton
          handleWorkoutVolume={handleWorkoutVolumeRemoval}
        />
      </span>
      <TableContainer
        component={Paper}
        sx={{ marginTop: 2, maxHeight: "320px" }}
        ref={containerRef}
      >
        <Table size="small">
          <TableHead>
            <TableRow sx={{ borderBottom: "none" }}>
              <TableCell
                sx={{
                  padding: "4px 8px",
                  fontSize: "0.9rem",
                  borderBottom: "none",
                }}
              >
                <b>Sets</b>
              </TableCell>
              <TableCell
                sx={{
                  padding: "4px 8px",
                  fontSize: "0.9rem",
                  borderBottom: "none",
                }}
              >
                <b>Reps</b>
              </TableCell>
              <TableCell
                sx={{
                  padding: "4px 8px",
                  fontSize: "0.9rem",
                  borderBottom: "none",
                }}
              >
                <b>Rest (SEC) </b>
              </TableCell>
              <TableCell
                sx={{
                  padding: "4px 8px",
                  fontSize: "0.9rem",
                  borderBottom: "none",
                }}
              >
                <b>Weight (KG) </b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workoutVolumes &&
              workoutVolumes.length !== 0 &&
              workoutVolumes.map((workoutVolume, index) => {
                return (
                  <TableRow key={index} sx={{ borderBottom: "none" }}>
                    <TableCell
                      sx={{ padding: "4px 8px", borderBottom: "none" }}
                    >
                      <Typography>{index + 1}</Typography>
                    </TableCell>
                    <TableCell
                      sx={{ padding: "4px 8px", borderBottom: "none" }}
                    >
                      <TextField
                        type="number"
                        name="reps"
                        defaultValue={workoutVolume.rep}
                        InputProps={{ inputProps: { min: 0 } }}
                        sx={{
                          width: 80,
                          "& .MuiInputBase-root": { height: "40px" },
                        }}
                      />
                    </TableCell>
                    <TableCell
                      sx={{ padding: "4px 8px", borderBottom: "none" }}
                    >
                      <TextField
                        name="rest"
                        defaultValue={workoutVolume.rep}
                        InputProps={{ inputProps: { min: 0 } }}
                        sx={{
                          width: 80,
                          "& .MuiInputBase-root": { height: "40px" },
                        }}
                      />
                    </TableCell>
                    <TableCell
                      sx={{ padding: "4px 8px", borderBottom: "none" }}
                    >
                      <TextField
                        name="rest"
                        defaultValue={workoutVolume.rep}
                        InputProps={{ inputProps: { min: 0 } }}
                        sx={{
                          width: 80,
                          "& .MuiInputBase-root": { height: "40px" },
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
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
          <SaveButton handleClick={() => console.log("saved")} />
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
          <CancelButton handleClick={() => console.log("canceled")} />
        </Box>
      </span>
    </Box>
  );
};

export default AddWorkoutForm;
