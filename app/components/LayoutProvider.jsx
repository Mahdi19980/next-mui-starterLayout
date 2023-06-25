"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeChanger from "./DarkMode/themeChanger";
import ThemeProviders from "./DarkMode/themeProvider";
import { useEffect, useState } from "react";
import { Button, GlobalStyles } from "@mui/material";
import { css } from "@mui/material/styles";
// import theme, { darkTheme, lightTheme } from "./DarkMode/theme";
import { useTheme } from "next-themes";
import { useStore } from "../store/store";

export default function LayoutProvider({ children }) {
  const [themes, setThemes] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "dark"; // get the theme from the local storage and set to dark if it's not available

      setThemes(storedTheme);
    }
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: themes,
    },
  });

  if (!themes) {
    return <div>Loading...</div>;
  }
  return (
    <ThemeProviders themes={themes} setThemes={setThemes}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        {children}

        <Button variant="contained">fd</Button>
      </ThemeProvider>
    </ThemeProviders>
  );
}
