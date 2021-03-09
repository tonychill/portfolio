import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
// Create a theme instance.
//box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12345) !important;
//0px 1px 2px rgba(0, 0, 0, 0.17897) !important;
//0px 2px 8px rgba(0, 0, 0, 0.1612) !important;
const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "MuiButton-label": {
          marginTop: -3,
        },
      },
    },
  },
  props: {
    // Name of the component ⚛️

    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
    MuiCheckbox: {
      root: { color: "red" },
    },
  },
  grow: {
    flexGrow: 1,
  },
  typography: {
    fontSize: 16,
    fontFamily: "sofia-pro-soft, sans-serif",

    h1: {
      fontSize: "72px", //Shout
    },
    h2: {
      // Display
      fontSize: "3.375rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.75rem", //Heading
    },
    caption: {
      fontSize: "1.3125rem", //Caption
    },
    // caption: {
    //   fontSize: "1.3125rem",
    // },
    // su: { //Title (for cards)
    //   fontSize: "1.3125rem", //Caption
    // },
    subtitle1: {
      //Title for card
      fontSize: "1.125rem",
    },
    subtitle2: {
      //features
      fontSize: "0.875rem",
      fontWeight: 300,
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      //link
      fontSize: "0.9375rem",
      fontWeight: 425,
    },
    button: {
      fontStyle: "",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  //

  palette: {
    text: {
      primary: "#151d34", //000345
    },
    background: {
      // paper: "#f9fbfe",
      // primary: "#f9fbfe",
    },
    primary: {
      main: "#5dbbff",
    },
    error: {
      main: red.A400,

      secondary: {
        main: "#19857b",
      },
      basic: { main: "ffffff" },
      error: {
        main: red.A400,
      },
      background: {
        default: "#fff",
      },
    },
    shape: {
      borderRadius: 8,
    },
  },
});
// theme.palette.background.paper = "#f9fbfe";
// theme.palette.background.default = "#f9fbfe";

theme.shadows[1] = "0px 3px 6px rgba(0, 0, 0, 0.06)";
theme.shadows[2] = "0px 3px 6px rgba(0, 0, 0, 0.18)";
theme.shadows[4] = "0 1px 3px 0 #e6ebf1"; //shadow from stripe input form.
// console.log(theme);
export default theme;
