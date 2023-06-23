import React from "react";

import { ThemeProvider } from "next-themes";
import ThemeChanger from "./themeChanger";

export default function ThemeProviders({ children }) {
  return (
    <ThemeProvider theme={"dark"}>
      <ThemeChanger />
      {children}
    </ThemeProvider>
  );
}
