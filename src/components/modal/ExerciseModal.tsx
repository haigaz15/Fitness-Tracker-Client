import * as React from "react";
import Modal from "@mui/material/Modal";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { ExerciseCardProps } from "../ExerciseCard/ExerciseCard";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import CloseButton from "../Button/CloseButton";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  overflowY: "auto",
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
          <CloseButton onClose={handleClose} />
          <CardMedia>
            <CardMedia
              component="img"
              height={400}
              image={exerciseInfo.imageUrl}
              alt={exerciseInfo.name}
            />
            <CardContent sx={{ overflowY: "auto", maxHeight: "50vh" }}>
              <Typography gutterBottom variant="h5" component="div">
                {exerciseInfo.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {exerciseInfo.description}
              </Typography>
            </CardContent>
          </CardMedia>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <IconButton>
              <ArrowBack />
            </IconButton>
            <IconButton>
              <ArrowForward />
            </IconButton>
          </Box>
        </Card>
      </Modal>
    </React.Fragment>
  );
};

export default ExerciseModal;
