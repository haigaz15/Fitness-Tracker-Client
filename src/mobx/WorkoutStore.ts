import { makeAutoObservable } from "mobx";
import { WorkoutSession } from "../types/workout-type";
import workoutAPIServiceInstance from "../services/WorkoutAPIService";

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
      this.loading = false;
    }
  };
}
