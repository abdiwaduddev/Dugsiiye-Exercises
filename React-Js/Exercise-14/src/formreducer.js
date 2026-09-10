// formReducer.js

export const initialState = {
  step: 1, // Start at step 1
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value, // dynamically update the field
      };
    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };
    case "PREV_STEP":
      return {
        ...state,
        step: state.step - 1,
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}
