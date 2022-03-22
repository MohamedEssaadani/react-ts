import { createContext, ReactNode } from "react";
import { theme } from "./Theme";

type ThemeContextProviderProps = {
  children: ReactNode;
};

/**
 * * Create Context
 */
export const ThemeContext = createContext(theme);

/**
 * * Provide Context
 * @param children
 * @returns JSX
 */
const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
