import { ExerciseListType } from "../types/exercise-types";

function genorateExercises(): ExerciseListType[] {
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
}

export default genorateExercises;
