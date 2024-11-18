import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";

interface ExTableProps {
  exercises: any[];
}

const WorkoutExTable: React.FC<ExTableProps> = ({ exercises }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="a dense table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "secondary.main" }}>
            <TableCell></TableCell>
            <TableCell sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
              ExerciseName
            </TableCell>
            <TableCell sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
              Set
            </TableCell>
            <TableCell sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
              Reps
            </TableCell>
            <TableCell sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
              Rest (SEC)
            </TableCell>
            <TableCell sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
              Weight (KG)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exercises.map((exercise) => (
            <TableRow
              key={exercise.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:nth-of-type(odd)": { backgroundColor: "#FAFAFA" },
                "&:hover": {
                  backgroundColor: "rgba(255, 61, 0, 0.1)",
                  cursor: "pointer",
                },
              }}
            >
              <TableCell>
                <Avatar
                  alt={exercise.name}
                  src="https://weighttraining.guide/wp-content/uploads/2016/05/barbell-curl-resized.png"
                  sx={{ width: 56, height: 56 }}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                {exercise.name}
              </TableCell>
              <TableCell>{exercise.set}</TableCell>
              <TableCell>{exercise.reps}</TableCell>
              <TableCell>{exercise.rest}</TableCell>
              <TableCell>{exercise.weight}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WorkoutExTable;
