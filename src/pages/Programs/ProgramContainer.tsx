import ProgramPresenter from "./ProgramPresenter";
import { useEffect, useRef, useState } from "react";
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
  containerStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "700px",
    marginTop: "76px",
    padding: "10px",
    width: "100%",
    backgroundColor: "#f0f0f0",
  },
  programStyle: {
    Height: "100vh",
    maxHeight: "100vh",
    width: "100%",
    overflowY: "scroll",
  },
};
const ProgramContainer = () => {
  const [program, setProgram] = useState(mockProgram);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleAddition = (e: React.MouseEvent) => {
    e.preventDefault();
    setProgram((prev) => {
      return {
        ...prev,
        workouts: [
          ...prev.workouts,
          {
            id: `${prev.workouts.length + 1}`,
            name: "Workout " + (prev.workouts.length + 1),
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
    });
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scroll({
        left: 0,
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [program]);

  return (
    <ProgramPresenter
      style={programPresenterStyle}
      name={program.name}
      description={program.description}
      workouts={program.workouts}
      handleAddition={handleAddition}
      scrollRef={scrollRef}
    />
  );
};

export default ProgramContainer;
