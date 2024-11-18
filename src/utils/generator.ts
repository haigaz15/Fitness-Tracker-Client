import { ExerciseListType, ExerciseOnWorkout } from "../types/exercise-types";

export const genorateExercises = () => {
  const exercises: ExerciseListType[] = [];

  // for (let i = 0; i < 10; i++) {
  //   exercises.push({
  //     name: "barbell curl",
  //     type: "barbell",
  //     description:
  //       "Hold the barbell in a standing position with a shoulder-width reverse grip. Tuck the elbows to the side of the torso and keep the scapula pressed, so the shoulders remain stable. Drive the barbell towards the shoulder until the biceps are fully contracted. Then return the barbell to starting position for another repetition.Typically, a bicep curl begins with the arm fully extended with a supinated (palms facing up) grip on a weight. A full repetition consists of bending or currling the elbow until it is fully flexed, then slowly lowering the weight to the starting position. The torso should remain upright instead of swinging back and forth, as doing so transfers the load away from the biceps and onto other muscles, reducing the effectiveness of the exercise. The elbows are also usually kept stationary at the side of the torso, as allowing the elbows to move in front of the weight's center of gravity removes tension on the biceps before full contraction is achieved.To maximize the activation of biceps, conducting this exercise using the full range of motion is generally recommended.",
  //   });
  // }
  return exercises;
};

export const mockItems: ExerciseOnWorkout[] = [
  {
    name: "Bench Press",
    set: 4,
    reps: "10-12",
    rest: "90 seconds",
    weight: "70 kg",
  },
  {
    name: "Squats",
    set: 4,
    reps: "8-10",
    rest: "2 minutes",
    weight: "100 kg",
  },
  {
    name: "Deadlift",
    set: 3,
    reps: "5-6",
    rest: "3 minutes",
    weight: "120 kg",
  },
  {
    name: "Pull-Ups",
    set: 3,
    reps: "12-15",
    rest: "1 minute",
    weight: "Bodyweight",
  },
  {
    name: "Overhead Press",
    set: 4,
    reps: "10-12",
    rest: "90 seconds",
    weight: "40 kg",
  },
  {
    name: "Barbell Row",
    set: 4,
    reps: "8-10",
    rest: "2 minutes",
    weight: "60 kg",
  },
  {
    name: "Dumbbell Curls",
    set: 3,
    reps: "10-12",
    rest: "1 minute",
    weight: "15 kg each arm",
  },
  {
    name: "Tricep Dips",
    set: 3,
    reps: "12-15",
    rest: "1 minute",
    weight: "Bodyweight",
  },
  {
    name: "Lunges",
    set: 3,
    reps: "10-12 per leg",
    rest: "1 minute",
    weight: "20 kg dumbbells",
  },
  {
    name: "Plank",
    set: 3,
    reps: "Hold for 60 seconds",
    rest: "30 seconds",
    weight: "Bodyweight",
  },
];
