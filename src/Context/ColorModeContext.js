import { useState, createContext, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export const ColorModeContext = createContext({
  toggleMode: () => {},
  mode: "light",
});
export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
      mode,
    }),
    [mode]
  );
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
