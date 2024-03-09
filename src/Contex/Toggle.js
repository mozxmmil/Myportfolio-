import { createContext, useContext } from "react";
export const ThemeContext = createContext({
  
  thememode: "light",
  darkTheme:() => {},
  lightTheme:() => {},

});
export const ThemeProvider = ThemeContext.Provider;

export function useTheme() {
    return useContext(ThemeContext);
  }