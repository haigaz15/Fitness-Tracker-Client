import axios from "axios";
import { WORKOUTURL } from "../types/url-enums";
import { WorkoutSession, WorkoutSessionVolume } from "../types/workout-type";

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

  async putStartWorkoutSession(payload: {
    id: string | undefined;
    startTime: Date;
  }) {
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/${WORKOUTURL.PUT_STARTWORKOUTSESSION}`,
        payload,
        config
      );
      return response.data.message;
    } catch (err) {
      console.log(err);
    }
  }

  async putEndWorkoutSession(payload: {
    id: string | undefined;
    endTime: Date;
  }): Promise<{ workoutSessionId: string } | undefined> {
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/${WORKOUTURL.PUT_ENDWORKOUTSESSION}`,
        payload,
        config
      );
      return response.data.updatedSession;
    } catch (err) {
      console.log(err);
    }
  }

  async putUpdateWorkoutSession(
    id: string | undefined,
    payload: WorkoutSessionVolume
  ) {
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/${WORKOUTURL.PUT_UPDATEWORKOUTSESSION}/${id}`,
        payload,
        config
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

const workoutAPIServiceInstance = new WorkoutAPIService();

export default workoutAPIServiceInstance;
