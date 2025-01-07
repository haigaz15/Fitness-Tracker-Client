export interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SubmitProps {
  formData: SignUpForm;
  errors: { [key: string]: string };
  visited: { [key: string]: boolean };
  dispatchFormData: React.Dispatch<any>;
  setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  setVisited: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
  setSubmitStatus: React.Dispatch<React.SetStateAction<string>>;
}
