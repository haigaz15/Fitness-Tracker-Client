import axios from "axios";
import { WORKOUTURL } from "../types/url-enums";
import { WorkoutSession } from "../types/workout-type";

class WorkoutAPIService {
  async getWorkoutWithExercises() {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/${WORKOUTURL.GET_WORKOUTWITHEXERCISE}`
    );
    return (await response.data) as WorkoutSession[];
  }

  async postWorkoutSessionWithExercises(payload: WorkoutSession) {
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/${WORKOUTURL.POST_WORKOUTWITHEXERCISE}`,
        payload,
        config
      );
      return await response.data.message;
    } catch (error) {
      console.log(error);
    }
  }
}

const workoutAPIServiceInstance = new WorkoutAPIService();

export default workoutAPIServiceInstance;
