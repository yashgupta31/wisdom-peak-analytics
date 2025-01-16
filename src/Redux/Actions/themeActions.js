export const TOGGLE_THEME= 'TOGGLE_THEME';

export const toggleTheme = () => {
    return (dispatch, getState) => {
      const currentTheme = getState().theme.theme;
  
      const newTheme = currentTheme === "light" ? "dark" : "light";
  
      localStorage.setItem("theme", newTheme);
  
      dispatch({ type: TOGGLE_THEME, theme: newTheme });
    };
  };
  