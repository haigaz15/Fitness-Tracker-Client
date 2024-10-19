import React from "react";
import { Typography, Button, Box, IconButton } from "@mui/material";
import { ExerciseCardProps } from "../../types/exercise-types";
import ExCard from "../Card/ExCard";
import ExModal from "../modal/ExModal";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const childStyle = {
  position: "absolute",
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
const parentStyle = {
  width: 300,
  height: 400,
  padding: "0 2% 2% 2%",
  marginTop: "1%",
  marginLeft: "2%",
  marginRight: "2%",
};
const ExerciseContent: React.FC<ExerciseCardProps> = ({
  name,
  description,
}) => {
  return (
    <>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description.length > 150
          ? description.slice(0, 150) + " ..."
          : description}
      </Typography>
    </>
  );
};
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
const ExerciseModal: React.FC<ExerciseCardProps> = ({
  imageUrl,
  name,
  description,
}) => {
  return (
    <>
      <ExCard
        cardStyle={childStyle}
        cardContentStyle={{ overflowY: "auto", maxHeight: "50vh" }}
        cardMediaStyle={{
          component: "img",
          height: 400,
          image: imageUrl,
          name: name,
        }}
        cardContentLayout={() => (
          <ExerciseModalCardContent name={name} description={description} />
        )}
        cardEndLayout={() => (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <IconButton>
              <ArrowBack />
            </IconButton>
            <IconButton>
              <ArrowForward />
            </IconButton>
          </Box>
        )}
      />
    </>
  );
};
const Exercise: React.FC<ExerciseCardProps> = function ({
  imageUrl,
  name,
  description,
}) {
  const [openModal, setOpenModal] = React.useState(false);

  const handleExerciseModalClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <ExCard
        cardStyle={parentStyle}
        cardContentStyle={{}}
        cardMediaStyle={{
          component: "img",
          image: imageUrl,
          name: name,
          sx: { height: 200, objectFit: "contain" },
        }}
        cardContentLayout={() => (
          <ExerciseContent name={name} description={description} />
        )}
        cardEndLayout={() => (
          <Box>
            <Button size="small" onClick={() => setOpenModal(true)}>
              Learn More
            </Button>
            <Button size="small">Add to Workout</Button>
          </Box>
        )}
      />

      <ExModal
        open={openModal}
        handleClose={handleExerciseModalClose}
        renderModalContent={() => (
          <ExerciseModal
            imageUrl={imageUrl}
            description={description}
            name={name}
          />
        )}
      />
    </>
  );
};

export default Exercise;
