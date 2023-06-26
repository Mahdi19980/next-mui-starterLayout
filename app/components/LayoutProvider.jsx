"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeChanger from "./DarkMode/themeChanger";
import ThemeProviders from "./DarkMode/themeProvider";
import { useEffect, useState } from "react";
import { Box, Button, GlobalStyles, Grid } from "@mui/material";
import { css } from "@mui/material/styles";
// import theme, { darkTheme, lightTheme } from "./DarkMode/theme";
import { useTheme } from "next-themes";
import { useStore } from "../store/store";
import Loading from "./loading";

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
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#fff",
          margin: "0px !important",
          justifyContent: "center",
        }}
      >
        <Grid
          height="100vh"
          width="100vw"
          container
          spacing={2}
          justifyContent="center"
          alignContent="center"
        >
          <Grid item>
            <Loading />
          </Grid>
        </Grid>
      </Box>
    );
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
