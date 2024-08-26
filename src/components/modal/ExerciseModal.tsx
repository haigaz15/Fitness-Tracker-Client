import * as React from "react";
import Modal from "@mui/material/Modal";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ExerciseCardProps } from "../ExerciseCard/ExerciseCard";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface ExerciseModalProps {
  open: boolean;
  handleClose: () => void;
  exerciseInfo: ExerciseCardProps;
}

const ExerciseModal: React.FC<ExerciseModalProps> = function ({
  open,
  handleClose,
  exerciseInfo,
}) {
  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Card sx={style}>
          <CardMedia>
            <CardMedia
              component="img"
              height={400}
              image={exerciseInfo.imageUrl}
              alt={exerciseInfo.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {exerciseInfo.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {exerciseInfo.description}
              </Typography>
            </CardContent>
          </CardMedia>
        </Card>
      </Modal>
    </React.Fragment>
  );
};

export default ExerciseModal;
