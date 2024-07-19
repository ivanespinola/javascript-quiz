import { createTheme } from "@mui/material/styles"

const commonThemeSettings = {
  typography: {
    fontFamily: "Onest, sans-serif",
  },
}
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f9f9f9", // beige color
      paper: "#ffffff",
    },
  },
  ...commonThemeSettings,
})

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    },
  },
  ...commonThemeSettings,
})
