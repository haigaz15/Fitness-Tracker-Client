import { makeAutoObservable } from "mobx";
import { WorkoutSession } from "../types/workout-type";
import workoutAPIServiceInstance from "../services/WorkoutAPIService";
import { ExerciseOnWorkoutUpdate } from "../types/exercise-types";

export class WorkoutStore {
  workoutSessions: WorkoutSession[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
    this.initializeWorkoutSessions();
  }

  initializeWorkoutSessions = async (): Promise<void> => {
    this.loading = true;
    try {
      this.workoutSessions =
        await workoutAPIServiceInstance.getWorkoutWithExercises();
      this.error = null;
    } catch (err) {
      this.error = "failed to load workouts!";
    } finally {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  };

  setWorkoutSessions = async (payload: WorkoutSession): Promise<void> => {
    this.loading = true;
    try {
      await workoutAPIServiceInstance.postWorkoutSessionWithExercises(payload);
      this.workoutSessions =
        await workoutAPIServiceInstance.getWorkoutWithExercises();
    } catch (error) {
      this.error = "failed to post to workouts";
    } finally {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  };

  updateWorkoutExercise = async (
    workoutId: string,
    payload: ExerciseOnWorkoutUpdate
  ): Promise<void> => {
    this.loading = true;
    try {
      await workoutAPIServiceInstance.putUpdateWorkoutExercise(
        workoutId,
        payload
      );
      this.workoutSessions =
        await workoutAPIServiceInstance.getWorkoutWithExercises();
    } catch (error) {
      this.error = "failed to add exercise to workout";
    } finally {
      this.loading = false;
    }
  };
}
