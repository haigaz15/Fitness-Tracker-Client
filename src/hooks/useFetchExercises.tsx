import { useEffect, useState } from "react";
import { ExerciseListType } from "../types/exercise-types";
import axios from "axios";
import { EXERCISEURL } from "../types/url-enums";
const useFetchExercises = (type: string = "all"): ExerciseListType[] | null => {
  const [exercises, setExercises] = useState<ExerciseListType[] | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/${EXERCISEURL.GET_EXERCISES}/${type}`
      );
      setExercises(response.data);
    })();
  }, [type]);

  return exercises;
};

export default useFetchExercises;
