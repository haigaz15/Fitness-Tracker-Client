import axios from "axios";
import { EXERCISEURL } from "../types/url-enums";
import { ExerciseListType } from "../types/exercise-types";

class ExerciseAPI {
  async getExercisesByType(
    type: string = "barbell",
    skip: number = 0,
    take: number = 6
  ) {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/${EXERCISEURL.GET_EXERCISES}/${type}?skip=${skip}&take=${take}`
    );
    const exerciseList = (await response.data) as ExerciseListType[];
    return exerciseList;
  }
}
const exerciseAPIInstance = new ExerciseAPI();
export default exerciseAPIInstance;
