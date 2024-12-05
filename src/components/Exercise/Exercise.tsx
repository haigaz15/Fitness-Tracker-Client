import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import {
  ExerciseCardProps,
  ExerciseOnWorkoutUpdate,
  ExerciseVolume,
} from "../../types/exercise-types";
import ExCard from "../Card/ExCard";
import ExModal from "../modal/ExModal";
import ExerciseContent from "./ExerciseContent";
import ExerciseModal from "./ExerciseModal";
import AddWorkoutForm from "../AddWorkoutForm/AddWorkoutForm";
import { arrayWorkoutVolumeToDashedWorkoutVolume } from "../../utils/helper";
import { useStore } from "../../hooks/userStore";
import { observer } from "mobx-react";

const parentStyle = {
  width: 300,
  height: 400,
  padding: "0 2% 2% 2%",
  marginTop: "1%",
  marginLeft: "2%",
  marginRight: "2%",
};

const Exercise: React.FC<ExerciseCardProps> = function ({
  imageUrl,
  name,
  description,
}) {
  const [openExerciseModal, setOpenExerciseModal] = useState(false);
  const [openAddWorkoutModal, setAddWorkoutModal] = useState(false);
  const { workoutStore } = useStore();
  const handleExerciseModalClose = () => {
    setOpenExerciseModal(false);
  };

  const handleSaveExerciseToWorkout = (
    workoutId: string,
    exerciseVolumes: ExerciseVolume[]
  ) => {
    const set = exerciseVolumes.map(
      (exerciseVolume) => exerciseVolume.set
    ).length;
    const reps = arrayWorkoutVolumeToDashedWorkoutVolume(
      exerciseVolumes.map((exerciseVolume) => exerciseVolume.reps)
    );
    const rest = arrayWorkoutVolumeToDashedWorkoutVolume(
      exerciseVolumes.map((exerciseVolume) => exerciseVolume.rest)
    );
    const weight = arrayWorkoutVolumeToDashedWorkoutVolume(
      exerciseVolumes.map((exerciseVolume) => exerciseVolume.weight)
    );
    setAddWorkoutModal(false);
    const payload: ExerciseOnWorkoutUpdate = {
      name,
      set,
      reps,
      rest,
      weight,
    };
    workoutStore.updateWorkoutExercise(workoutId, payload);
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
            <Button size="small" onClick={() => setOpenExerciseModal(true)}>
              Learn More
            </Button>
            <Button size="small" onClick={() => setAddWorkoutModal(true)}>
              Add to Workout
            </Button>
          </Box>
        )}
      />

      <ExModal
        open={openExerciseModal}
        handleClose={handleExerciseModalClose}
        renderModalContent={() => (
          <ExerciseModal
            imageUrl={imageUrl}
            description={description}
            name={name}
          />
        )}
      />

      <ExModal
        open={openAddWorkoutModal}
        handleClose={() => setAddWorkoutModal(false)}
        renderModalContent={() => (
          <AddWorkoutForm
            choosenExercise={name}
            setAddWorkoutModal={setAddWorkoutModal}
            handleSaveExerciseToWorkout={handleSaveExerciseToWorkout}
          />
        )}
      />
    </>
  );
};

export default observer(Exercise);
