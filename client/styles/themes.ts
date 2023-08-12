import { createTheme } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";

export const brightTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ef5350",
    },
    secondary: {
      main: green[500],
    },
  },
});
