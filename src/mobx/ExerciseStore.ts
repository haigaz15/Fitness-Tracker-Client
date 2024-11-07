import { action, makeAutoObservable, observable } from "mobx";
import { ExerciseListType } from "../types/exercise-types";
import exerciseAPIServiceInstance from "../services/ExerciseAPIService";

export class ExerciseStore {
  exerciseList: ExerciseListType[] = [];
  exerciseListAll: ExerciseListType[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this, {
      exerciseList: observable,
      exerciseListAll: observable,
      loading: observable,
      error: observable,
      setExerciseList: action,
      setExerciseListAll: action,
    });
    this.initializeExercises();
    this.initializeAllExercises();
  }

  initializeExercises = async (): Promise<void> => {
    this.loading = true;
    try {
      this.exerciseList = await exerciseAPIServiceInstance.getExercisesByType();
      this.exerciseListAll =
        await exerciseAPIServiceInstance.getExercisesByType("all");
      this.error = null;
    } catch (err) {
      this.error = "failed to load exercise!";
    } finally {
      this.loading = false;
    }
  };

  initializeAllExercises = async (): Promise<void> => {
    this.loading = true;
    try {
      this.exerciseListAll =
        await exerciseAPIServiceInstance.getExercisesByType("all");
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
      this.exerciseList = await exerciseAPIServiceInstance.getExercisesByType(
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

  setExerciseListAll = async (value: string, skip: number): Promise<void> => {
    this.loading = true;
    try {
      this.exerciseListAll =
        await exerciseAPIServiceInstance.getExercisesByType(value, skip);
      this.error = null;
    } catch (err) {
      this.error = "failed to load exercise!";
    } finally {
      this.loading = false;
    }
  };
}
