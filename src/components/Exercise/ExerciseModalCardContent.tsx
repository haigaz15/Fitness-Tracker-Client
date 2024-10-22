import { Typography } from "@mui/material";
import { ExerciseCardProps } from "../../types/exercise-types";

const ExerciseModalCardContent: React.FC<ExerciseCardProps> = ({
  name,
  description,
}) => {
  return (
    <>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </>
  );
};

export default ExerciseModalCardContent;
