export const formDataReducer = (formData: any, action: any) => {
  switch (action.type) {
    case "FIRST_NAME": {
      return { ...formData, firstName: action.payload };
    }
    case "LAST_NAME": {
      return { ...formData, lastName: action.payload };
    }
    case "EMAIL": {
      return { ...formData, email: action.payload };
    }
    case "PASSWORD": {
      return { ...formData, password: action.payload };
    }
    case "CONFIRM_PASSWORD": {
      return { ...formData, confirmPassword: action.payload };
    }
    case "SUBMIT": {
      return {
        ...action.payload,
      };
    }
  }
};
