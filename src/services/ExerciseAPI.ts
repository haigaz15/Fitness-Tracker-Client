import axios from "axios";
import { EXERCISEURL } from "../types/url-enums";
import { ExerciseListType } from "../types/exercise-types";

class ExerciseAPI {
  async getExercisesByType(type: string = "barbell") {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/${EXERCISEURL.GET_EXERCISES}/${type}`
    );
    const exerciseList = (await response.data) as ExerciseListType[];
    return exerciseList;
  }
}
const exerciseAPIInstance = new ExerciseAPI();
export default exerciseAPIInstance;
