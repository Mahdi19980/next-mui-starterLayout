import React from "react";

import { ThemeProvider } from "next-themes";
import ThemeChanger from "./themeChanger";

export default function ThemeProviders({ children, setThemes, themes }) {
  return (
    <ThemeProvider>
      <ThemeChanger themes={themes} setThemes={setThemes} />
      {children}
    </ThemeProvider>
  );
}
