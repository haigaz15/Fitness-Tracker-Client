import { Box } from "@mui/material";
import WorkoutEx from "../../components/Workout/WorkoutEx";
import WorkoutList from "../../components/Workout/WorkoutList";
import WorkoutPresenter from "./WorkoutPresenter";
import { useCallback, useEffect, useState } from "react";
import exerciseAPIServiceInstance from "../../services/ExerciseAPIService";
import {
  ExerciseListType,
  ExerciseOnWorkout,
} from "../../types/exercise-types";
import { detectAndReturnUniqueExerciseLists } from "../../utils/helper";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { WorkoutSession } from "../../types/workout-type";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "../../hooks/userStore";
import { observer } from "mobx-react";
import Loading from "../../components/Loading/Loading";
import { Dayjs } from "dayjs";
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
const WorkoutContainer = observer(() => {
  const [autoCompleteOpen, setAutoCompleteOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [exercises, setExercises] = useState<ExerciseListType[]>([]);
  const [loadingExercises, setLoadingExercises] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [workoutCreator, setWorkoutCreator] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const { workoutStore } = useStore();

  const handleSaveWorkout = (
    workoutName: string,
    workoutDate: Dayjs | null,
    workoutNotes: string,
    workoutExercises: ExerciseOnWorkout[],
    setWorkoutExercises: React.Dispatch<
      React.SetStateAction<ExerciseOnWorkout[]>
    >,
    setWorkoutForum: React.Dispatch<
      React.SetStateAction<{
        name: string;
        date: Dayjs | null;
        notes: string;
      }>
    >
  ) => {
    const lastWorkoutSessionId = uuidv4();
    workoutStore.setWorkoutSessions({
      id: lastWorkoutSessionId,
      name: workoutName,
      workoutDate: workoutDate?.toDate(),
      exercises: workoutExercises,
      notes: workoutNotes,
    } as WorkoutSession);
    setWorkoutExercises([]);
    setWorkoutForum({ name: "", notes: "", date: null });
    setWorkoutCreator(false);
    navigate(`${lastWorkoutSessionId}`);
  };

  useEffect(() => {}, [workoutStore.loading]);

  useEffect(() => {
    if (!id) setWorkoutCreator(true);
  }, [id]);

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
        renderWorkoutList={() => (
          <WorkoutList
            workoutSessions={workoutStore.workoutSessions}
            setWorkoutCreator={setWorkoutCreator}
            loading={workoutStore.loading}
          />
        )}
        renderWorkoutListItem={() =>
          workoutCreator ? (
            <WorkoutEx
              exercises={exercises}
              autoCompleteOpen={autoCompleteOpen}
              setAutoCompleteOpen={setAutoCompleteOpen}
              autocompleteRefCall={autocompleteRefCall}
              loadingExercises={loadingExercises}
              handleSaveWorkout={handleSaveWorkout}
            />
          ) : workoutStore.loading ? (
            <Loading />
          ) : (
            <Outlet
              context={[
                workoutStore.workoutSessions,
                exercises,
                autoCompleteOpen,
                setAutoCompleteOpen,
                autocompleteRefCall,
                loadingExercises,
                handleSaveWorkout,
              ]}
            />
          )
        }
        mainStyle={mainStyle}
        workoutListStyle={workoutListStyle}
        workoutExStyle={workoutExStyle}
      />
    </Box>
  );
});

export default WorkoutContainer;
