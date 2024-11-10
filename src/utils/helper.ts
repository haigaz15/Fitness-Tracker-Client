import {
  ExerciseListType,
  ExerciseVolume,
  ExerciseVoulmeItem,
} from "../types/exercise-types";

export const exerciseVolumeDashedStringConverter = (
  exerciseVolumes: ExerciseVolume[]
): Omit<ExerciseVolume, "set"> => {
  const result = new Array(3).fill("");
  exerciseVolumes.forEach((exerciseVolume, index) => {
    result[0] +=
      index !== exerciseVolumes.length - 1
        ? exerciseVolume.reps + "-"
        : exerciseVolume.reps;
    result[1] +=
      index !== exerciseVolumes.length - 1
        ? exerciseVolume.rest + "-"
        : exerciseVolume.rest;
    result[2] +=
      index !== exerciseVolumes.length - 1
        ? exerciseVolume.weight + "-"
        : exerciseVolume.weight;
  });
  return { reps: result[0], rest: result[1], weight: result[2] };
};

export const detectAndReturnUniqueExerciseLists = (
  exerciseLists: ExerciseListType[]
): ExerciseListType[] => {
  const setExerciseNames = new Set(
    exerciseLists.map((exerciseList) => exerciseList.name)
  );
  const uniqueExercises: { [key: string]: {} } = {};
  setExerciseNames.forEach((exerciseName) => {
    uniqueExercises[exerciseName] = {};
  });
  exerciseLists.forEach((exerciseList) => {
    uniqueExercises[exerciseList.name] = exerciseList;
  });
  return Object.values(uniqueExercises) as ExerciseListType[];
};

export const dashedExerciseVolumeUpdater = (
  exerciseVolumeItem: ExerciseVoulmeItem,
  index: number,
  newValue: string
): ExerciseVoulmeItem => {
  const volume = exerciseVolumeItem.split("-");
  volume[index] = newValue;
  return volume.reduce((acc, current) => {
    return acc + "" + current;
  });
};

export const arrayWorkoutVolumeToDashedWorkoutVolume = (
  workoutVolume: Array<string>
): ExerciseVoulmeItem => {
  return workoutVolume.reduce((acc, current) => {
    return acc + "-" + current;
  });
};

export const dashedExerciseVolumeSplitter = (
  exerciseVolumeItem: ExerciseVoulmeItem
): ExerciseVoulmeItem[] => {
  const volume = exerciseVolumeItem.split("-");
  return volume;
};
