enum MuscleGroup {
  ABDUCTORS = "Abductors",
  ADDUCTORS = "Adductors",
  BICEPS = "Biceps",
  CALVES = "Calves",
  DELTOIDS = "Deltoids",
  ERECTOR_SPINAE = "Erector Spinae",
  FOREARMS = "Forearms",
  GLUTES = "Glutes",
  HAMSTRINGS = "Hamstrings",
  LATS = "Lats",
  OBLIQUES = "Obliques",
  PECTORALS = "Pectorals",
  QUADRICEPS = "Quadriceps",
  SERRATUS = "Serratus",
  TRAPEZIUS = "Trapezius",
  TRICEPS = "Triceps",
  UPPER_ABS = "Upper Abs",
  LOWER_ABS = "Lower Abs",
  SOLEUS = "Soleus",
  WRIST_FLEXORS = "Wrist Flexors",
  BRACHIORADIALIS = "Brachioradialis",
  LOWER_BACK = "Lower Back", // Custom value
}

export enum ExerciseCategory {
  CHEST = "Chest",
  SHOULDERS = "Shoulders",
  LEGS = "Legs",
  ARMS = "Arms",
  BACK = "Back",
  CARDIO = "Cardio",
  STRETCH = "Stretch",
}

export enum ExerciseDifficulty {
  EASY = "Easy",
  MEDIUM = "Medium",
  HARD = "Hard",
}
export interface ExerciseListType {
  name: string;
  type: string;
  description: string;
  primaryMuscle: MuscleGroup;
  secondaryMuscles: string;
  category: ExerciseCategory;
  difficulty: ExerciseDifficulty;
}
export interface ExerciseOnWorkoutUpdate {
  name: string;
  set: number;
  reps: string;
  rest: string;
  weight: string;
}
export interface ExerciseCardProps {
  imageUrl?: string;
  name: string;
  description: string;
}

export interface ExerciseModalProps {
  open: boolean;
  handleClose: () => void;
  renderModalContent: () => React.ReactElement;
}

export interface ExerciseOnWorkout {
  name: string;
  set: number;
  reps: string;
  rest: string;
  weight: string;
}

export interface ExerciseVolume {
  set: string;
  reps: string;
  rest: string;
  weight: string;
}

export type ExerciseVoulmeItem =
  | ExerciseVolume["reps"]
  | ExerciseVolume["rest"]
  | ExerciseVolume["weight"]
  | ExerciseVolume["set"];

export type ExerciseOnWorkoutWithError = Omit<
  ExerciseOnWorkout,
  "set" | "name"
> & {
  error: boolean;
  errorType: string;
};
