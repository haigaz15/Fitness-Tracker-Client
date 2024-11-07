import { Box } from "@mui/material";
import WorkoutEx from "../../components/Workout/WorkoutEx";
import WorkoutList from "../../components/Workout/WorkoutList";
import WorkoutPresenter from "./WorkoutPresenter";
import { useCallback, useEffect, useState } from "react";
import exerciseAPIServiceInstance from "../../services/ExerciseAPIService";
import { ExerciseListType } from "../../types/exercise-types";
import { detectAndReturnUniqueExerciseLists } from "../../utils/helper";

const mainStyle = {
  display: "flex",
  marginTop: "76px",
};
const workoutListStyle = {
  flex: 4,
};

const workoutExStyle = {
  flex: 18,
  marginLeft: 0.5,
  marginRight: 0.5,
};
const WorkoutContainer = () => {
  const [autoCompleteOpen, setAutoCompleteOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [exercises, setExercises] = useState<ExerciseListType[]>([]);
  const [loadingExercises, setLoadingExercises] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const autocompleteRefCall = useCallback(
    (node: HTMLDivElement | null) => {
      if (loadingExercises) return;
      const ob = new IntersectionObserver((enteries) => {
        if (enteries[0].isIntersecting && hasMore) {
          setCurrentPage((prev) => prev + 1);
          setAutoCompleteOpen(true);
        }
      });
      if (node) ob.observe(node);
    },
    [loadingExercises, hasMore]
  );

  useEffect(() => {
    if (!loadingExercises) {
      return;
    }

    const loadingDelay = setTimeout(() => {
      setLoadingExercises(false);
    }, 1000);

    return () => clearTimeout(loadingDelay);
  }, [loadingExercises]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setLoadingExercises(true);
        const newExercises =
          await exerciseAPIServiceInstance.getExercisesByType(
            "all",
            currentPage * 6
          );
        setHasMore(newExercises.length > 0);
        setExercises((prev) => {
          const tempExercises = [...prev, ...newExercises];
          return detectAndReturnUniqueExerciseLists(tempExercises);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchExercises();
  }, [currentPage]);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <WorkoutPresenter
        renderWorkoutList={() => <WorkoutList />}
        renderWorkoutEx={() => (
          <WorkoutEx
            exercsies={exercises}
            autoCompleteOpen={autoCompleteOpen}
            setAutoCompleteOpen={setAutoCompleteOpen}
            autocompleteRefCall={autocompleteRefCall}
            loadingExercises={loadingExercises}
          />
        )}
        mainStyle={mainStyle}
        workoutListStyle={workoutListStyle}
        workoutExStyle={workoutExStyle}
      />
    </Box>
  );
};

export default WorkoutContainer;
