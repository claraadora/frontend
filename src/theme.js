import { createMuiTheme } from "@material-ui/core/styles";
import lightGreen from "@material-ui/core/colors/lightGreen";
import teal from "@material-ui/core/colors/teal";
import grey from "@material-ui/core/colors/grey";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[700],
    },
    secondary: {
      main: lightGreen[300],
    },
    background: {
      main: grey[300],
      default: grey[100],
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: '"Metropolis", sans-serif',
    fontSize: 13,
    fontWeight: 400,
    h1: {
      fontFamily: '"Metropolis", sans-serif',
      fontWeight: 400,
      fontSize: "2.125rem",
      letterSpacing: 2,
    },
    h6: {
      fontFamily: '"Metropolis", sans-serif',
      fontWeight: 500,
      fontSize: "0.9375rem",
    },
    subtitle1: {
      fontFamily: '"Metropolis", sans-serif',
      fontWeight: "normal",
      fontSize: "0.6875rem",
    },
    body1: {
      fontFamily: '"Metropolis", sans-serif',
      fontWeight: "normal",
      fontSize: "0.8125rem",
      lineHeight: 1.38,
      letterSpacing: "normal",
      color: grey[900],
    },
    button: {
      fontFamily: '"Metropolis", sans-serif',
      fontWeight: 500,
      fontSize: "1.3rem",
      letterSpacing: 1,
      textTransform: "none",
      color: grey[100],
    },
  },
});
