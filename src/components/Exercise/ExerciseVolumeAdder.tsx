import {
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
import { ExerciseVolume } from "../../types/exercise-types";

const ExerciseVolumeAdder: React.FC<{
  exerciseVolumes: ExerciseVolume[];
  containerRef: React.RefObject<HTMLDivElement>;
  handleRepsChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    exerciseVolume: ExerciseVolume
  ) => void;
  handleRestChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    exerciseVolume: ExerciseVolume
  ) => void;
  handleWeightChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    exerciseVolume: ExerciseVolume
  ) => void;
}> = ({
  exerciseVolumes,
  containerRef,
  handleRepsChange,
  handleRestChange,
  handleWeightChange,
}) => {
  return (
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
          {exerciseVolumes &&
            exerciseVolumes.length !== 0 &&
            exerciseVolumes.map((exerciseVolume, index) => {
              return (
                <TableRow key={index} sx={{ borderBottom: "none" }}>
                  <TableCell sx={{ padding: "4px 8px", borderBottom: "none" }}>
                    <Typography>{index + 1}</Typography>
                  </TableCell>
                  <TableCell sx={{ padding: "4px 8px", borderBottom: "none" }}>
                    <TextField
                      type="number"
                      name="reps"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleRepsChange(e, exerciseVolume)
                      }
                      InputProps={{ inputProps: { min: 0 } }}
                      sx={{
                        width: 80,
                        "& .MuiInputBase-root": { height: "35px" },
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ padding: "4px 8px", borderBottom: "none" }}>
                    <TextField
                      name="rest"
                      InputProps={{ inputProps: { min: 0 } }}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleRestChange(e, exerciseVolume)
                      }
                      sx={{
                        width: 80,
                        "& .MuiInputBase-root": { height: "35px" },
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ padding: "4px 8px", borderBottom: "none" }}>
                    <TextField
                      name="weight"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleWeightChange(e, exerciseVolume)
                      }
                      InputProps={{ inputProps: { min: 0 } }}
                      sx={{
                        width: 80,
                        "& .MuiInputBase-root": { height: "35px" },
                      }}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExerciseVolumeAdder;
