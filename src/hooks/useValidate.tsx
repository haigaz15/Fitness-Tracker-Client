import { useReducer, useState } from "react";
import { formDataReducer } from "../reducers/signUpReducers";
import { SignUpForm, SubmitProps } from "../types/signup-type";

const useValidate = (
  initialState: SignUpForm,
  handleValidation: (formData: SignUpForm) => any,
  handleSignUpFormSubmit: (submitProps: SubmitProps) => void
) => {
  const [formData, dispatch] = useReducer(formDataReducer, initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [visited, setVisited] = useState<{ [key: string]: boolean }>({});
  const [submitStatus, setSubmitStatus] = useState<string>("NOT_SUBMITTED");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validationResult = handleValidation(formData);
    console.log(validationResult);
    setErrors(validationResult);
    dispatch({ type: e.target.id, payload: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const validationResult = handleValidation(formData);
    setErrors(validationResult);
    setVisited({ ...visited, [e.target.name]: true });
  };

  return {
    formData,
    errors,
    visited,
    handleChange,
    handleBlur,
    submitStatus,
    handleSubmit: () => {
      const submitProps: SubmitProps = {
        formData,
        errors,
        visited,
        dispatchFormData: dispatch,
        setErrors,
        setVisited,
        setSubmitStatus,
      };
      handleSignUpFormSubmit(submitProps);
    },
  };
};

export default useValidate;
