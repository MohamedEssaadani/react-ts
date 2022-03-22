import { createContext, ReactNode } from "react";
import { theme } from "./Theme";

type ThemeContextProviderProps = {
  children: ReactNode;
};

// create context
export const ThemeContext = createContext(theme);

// provide context
const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
