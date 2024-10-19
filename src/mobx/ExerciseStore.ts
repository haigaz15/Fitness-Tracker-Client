import { makeAutoObservable } from "mobx";
import { ExerciseListType } from "../types/exercise-types";
import exerciseAPIInstance from "../services/ExerciseAPI";

export class ExerciseStore {
  exerciseList: ExerciseListType[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
    this.initializeExercises();
  }

  initializeExercises = async (): Promise<void> => {
    this.loading = true;
    try {
      this.exerciseList = await exerciseAPIInstance.getExercisesByType();
      this.error = null;
    } catch (err) {
      this.error = "failed to load exercise!";
    } finally {
      this.loading = false;
    }
  };

  setExerciseList = async (value: string, skip: number): Promise<void> => {
    this.loading = true;
    try {
      this.exerciseList = await exerciseAPIInstance.getExercisesByType(
        value,
        skip
      );
      this.error = null;
    } catch (err) {
      this.error = "failed to load exercise!";
    } finally {
      this.loading = false;
    }
  };
}
