import axios from "axios";
import { WORKOUTURL } from "../types/url-enums";
import { WorkoutSession } from "../types/workout-type";

class WorkoutAPIService {
  async getWorkoutWithExercises() {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/${WORKOUTURL.GET_WORKOUTWITHEXERCISE}`
    );
    return response.data as WorkoutSession[];
  }
}

const workoutAPIServiceInstance = new WorkoutAPIService();

export default workoutAPIServiceInstance;
