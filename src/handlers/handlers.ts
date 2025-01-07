import {
  ExerciseOnWorkout,
  ExerciseVolume,
  ExerciseVoulmeItem,
} from "../types/exercise-types";
import { SignUpForm, SubmitProps } from "../types/signup-type";

export const handleRepsChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  exerciseVolume: ExerciseVolume
): void => {
  exerciseVolume.reps = e.target.value;
};
export const handleRestChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  exerciseVolume: ExerciseVolume
): void => {
  exerciseVolume.rest = e.target.value;
};
export const handleWeightChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  exerciseVolume: ExerciseVolume
): void => {
  exerciseVolume.weight = e.target.value;
};

export const handleRepsChangeExerciseOnWorkout = (
  item: ExerciseVoulmeItem,
  exerciseVolume: ExerciseOnWorkout,
  setNewItem: React.Dispatch<React.SetStateAction<string | null | undefined>>
): void => {
  exerciseVolume.reps = item;
  setNewItem(item);
};
export const handleRestChangeExerciseOnWorkout = (
  item: ExerciseVoulmeItem,
  exerciseVolume: ExerciseOnWorkout,
  setNewItem: React.Dispatch<React.SetStateAction<string | null | undefined>>
): void => {
  exerciseVolume.rest = item;
  setNewItem(item);
};
export const handleWeightChangeExerciseOnWorkout = (
  item: ExerciseVoulmeItem,
  exerciseVolume: ExerciseOnWorkout,
  setNewItem: React.Dispatch<React.SetStateAction<string | null | undefined>>
): void => {
  exerciseVolume.weight = item;
  setNewItem(item);
};

export const handleValidation = (formData: SignUpForm) => {
  const errors: { [key: string]: string } = {};
  const regex = new RegExp("[^@]+@([a-z0-9-]+\\.)+[a-z]{2,16}");
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (formData.firstName === "") {
    errors.firstName = "First Name is required";
  } else if (formData.firstName.length < 2) {
    errors.firstName = "First Name must be at least 2 characters long";
  }
  if (formData.lastName === "") {
    errors.lastName = "Last Name is required";
  } else if (formData.lastName.length < 2) {
    errors.lastName = "Last Name must be at least 2 characters long";
  }
  if (formData.email === "") {
    errors.email = "Email is required";
  } else if (!regex.test(formData.email)) {
    errors.email = "Invalid email address";
  }
  if (formData.password === "") {
    errors.password = "Password is required";
  } else if (!passwordRegex.test(formData.password)) {
    errors.password =
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character";
  }
  if (formData.confirmPassword === "") {
    errors.confirmPassword = "Confirm Password is required";
  } else if (formData.confirmPassword !== formData.password) {
    console.log(formData.confirmPassword, formData.password);
    errors.confirmPassword = "Passwords do not match";
  }
  return errors;
};

export const handleSignUpFormSubmit = (submitProps: SubmitProps) => {
  const { errors, dispatchFormData, setErrors, setVisited, setSubmitStatus } =
    submitProps;

  if (Object.keys(errors).length > 0) {
    setErrors((prev) => ({
      ...prev,
      submit: `Unable to submit! There are ${
        Object.keys(errors).length
      } errors`,
    }));
    setSubmitStatus("ERROR");
  } else {
    dispatchFormData({
      type: "SUBMIT",
      payload: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    });
    setSubmitStatus("SUCCESS");
    setErrors({});
    setVisited({});
  }
};
