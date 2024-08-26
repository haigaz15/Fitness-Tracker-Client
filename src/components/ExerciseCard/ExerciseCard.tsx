import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import ExerciseModal from "../modal/ExerciseModal";

export interface ExerciseCardProps {
  imageUrl: string;
  name: string;
  description: string;
}
const ExerciseCard: React.FC<ExerciseCardProps> = function ({
  imageUrl,
  name,
  description,
}) {
  const [openModal, setOpenModal] = React.useState(false);

  const handleExerciseModalClose = () => {
    setOpenModal(false);
  };
  return (
    <Card
      sx={{
        width: 300,
        height: 400,
        padding: "0 2% 2% 2%",
        marginTop: "1%",
        marginLeft: "2%",
        marginRight: "2%",
      }}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt={name}
        sx={{ height: 200, objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.length > 150
            ? description.slice(0, 150) + " ..."
            : description}
        </Typography>
      </CardContent>
      <Button size="small" onClick={() => setOpenModal(true)}>
        Learn More
      </Button>
      <ExerciseModal
        open={openModal}
        handleClose={handleExerciseModalClose}
        exerciseInfo={{
          imageUrl: imageUrl,
          name: name,
          description: description,
        }}
      />
    </Card>
  );
};

export default ExerciseCard;
