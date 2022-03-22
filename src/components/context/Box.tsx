import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.primary.main }}>
      <h3 style={{ color: theme.primary.text }}> Hey</h3>
    </div>
  );
};

export default Box;
