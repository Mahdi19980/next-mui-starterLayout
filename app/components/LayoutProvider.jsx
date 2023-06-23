"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeChanger from "./DarkMode/themeChanger";
import ThemeProviders from "./DarkMode/themeProvider";
import { useEffect, useState } from "react";
import { GlobalStyles } from "@mui/material";
import { css } from "@mui/material/styles";
import theme, { darkTheme, lightTheme } from "./DarkMode/theme";
import { useTheme } from "next-themes";

export default function LayoutProvider({ children }) {
  const { resolvedTheme } = useTheme();
  const [themes, setThemes] = useState(darkTheme);

  useEffect(() => {
    resolvedTheme === "light" ? setThemes(lightTheme) : setThemes(darkTheme);
  }, [resolvedTheme]);

  return (
    <ThemeProviders>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        <GlobalStyles
          styles={css`
            :root {
              body {
                background-color: #fff;
                color: #121212;
              }
            }
            [data-theme="dark"] {
              body {
                background-color: #0f1729;
                color: #fff;
              }
            }
          `}
        />
        {children}
      </ThemeProvider>
    </ThemeProviders>
  );
}
