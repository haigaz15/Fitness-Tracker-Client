import ProgramPresenter from "./ProgramPresenter";

const mockProgram = {
  name: "My Program",
  description: "This is a program",
  workouts: [
    {
      id: "1",
      name: "Workout 1",
      workoutDate: new Date(),
      notes: "This is a note",
      exercises: [
        {
          name: "Exercise 1",
          set: 3,
          reps: "10",
          weight: "100",
          rest: "60s",
        },
        {
          name: "Exercise 2",
          set: 3,
          reps: "10",
          weight: "100",
          rest: "60s",
        },
      ],
    },
    {
      id: "2",
      name: "Workout 2",
      workoutDate: new Date(),
      notes: "This is a note",
      exercises: [
        {
          name: "Exercise 1",
          set: 3,
          reps: "10",
          weight: "100",
          rest: "60s",
        },
        {
          name: "Exercise 2",
          set: 3,
          reps: "10",
          weight: "100",
          rest: "60s",
        },
      ],
    },
  ],
};
const programPresenterStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  backgroundColor: "#f0f0f0",
};
const ProgramContainer = () => {
  return (
    <ProgramPresenter
      style={programPresenterStyle}
      name={mockProgram.name}
      description={mockProgram.description}
      workouts={mockProgram.workouts}
    />
  );
};

export default ProgramContainer;
