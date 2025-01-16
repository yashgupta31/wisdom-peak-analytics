import { TOGGLE_THEME } from "../Actions/themeActions";

// Get the initial theme from localStorage (default to light if not found)
const initialState = {
  theme: localStorage.getItem("theme") || "light",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};

export default themeReducer;
