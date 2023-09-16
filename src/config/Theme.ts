import {
    createTheme,
    PaletteOptions,
    responsiveFontSizes,
    ThemeOptions,
  } from "@mui/material/styles";
  
  declare module "@mui/material/styles" {
    interface Palette {
      default: Palette["primary"];
    }
  
    // allow configuration using `createTheme`
    interface PaletteOptions {
      default?: PaletteOptions["primary"];
    }
  }
  
  // Update the Button's color prop options
  declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
      default: true;
    }
  
    interface SimplePaletteColorOptions {
      default?: string;
    }
  }
  
  declare module "@mui/material/InputLabel" {
    interface InputLabelPropsOverrides {
      default: true;
    }
  }
  
  const fontFamily: string = "Roboto, sans-serif";
  export const themeColor: unknown = {
    primary: {
      main: "#1E346B",
      light: "#294793",
      dark: "#132143",
    },
  };
  
  const lightPalette: PaletteOptions = {
    mode: "light",
    primary: {
      main: "#2E7ED1",
      light: "#86B5E7",
      dark: "#1466BA",
      contrastText:"#F9FBFF",
    },
    secondary: {
      main: "#4DC9E0",
      light: "#61E6FF",
      dark: "#3FA8BA",
      contrastText:"#F9FBFF",
    },
    error: {
      main: "#D14C4C",
      light: "#FF6D6D",
      dark: "#CD2C2C",
    },
    success: {
      main: "#1ECA7B",
      light: "#2EEE96",
      dark: "#45AA63",
    },
    warning: {
      main: "#EDB738",
      light: "#FCF2DB",
      dark: "#E7A828",
    },
    info: {
      main: "#9DA6C7",
      light: "#D2DAFB",
      dark: "#7F8AB6",
    },
    background: {
      default: "#F2F5FA",
      paper: "#FFFFFF",
    },
  };
  
  const darkPalette: PaletteOptions = {
    mode: "dark",
    primary: {
      main: "#2E7ED1",
      light: "#86B5E7",
      dark: "#1466BA",
      contrastText:"#F9FBFF"
    },
    secondary: {
      main: "#4DC9E0",
      light: "#61E6FF",
      dark: "#3FA8BA",
      contrastText:"#ABBCDD",
    },
    error: {
      main: "#D14C4C",
      light: "#FF6D6D",
      dark: "#CD2C2C",
    },
    success: {
      main: "#1ECA7B",
      light: "#2EEE96",
      dark: "#45AA63",
    },
    warning: {
      main: "#EDB738",
      light: "#FCF2DB",
      dark: "#E7A828",
    },
    info: {
      main: "#9DA6C7",
      light: "#D2DAFB",
      dark: "#7F8AB6",
    },
    background: {
      default: "#2B2D3C",
      paper: "#313445",
    },
  };
  
  const commonStyles: ThemeOptions = {
    breakpoints: {
      values: {
        xs: 360,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
      },
    },
    typography: {
      fontFamily: fontFamily,
      fontSize: 14,
      body1: {
        fontSize: "16px",
      },
      body2: {
        fontSize: "14px",
      },
      h1: {
        fontSize: "26px",
        fontWeight: "bold", // Bold H1
      },
      h2: {
        fontSize: "24px", //from 23px to 24px
        fontWeight: "bold",
      },
      h3: {
        fontSize: "22px",
        fontWeight: "bold",
      },
      h4: {
        fontSize: "18px",
        fontWeight: "bold",
      },
      h5: {
        fontSize: "16px",
        fontWeight: "bold",
      },
      h6: {
        fontSize: "14px",
        fontWeight: "bold",
      },
      subtitle1: {
        fontSize: 16,
      },
      subtitle2: {
        fontSize: 14,
      },
      button: {
        fontSize: 14,
        fontWeight: 500,
        textTransform: "capitalize",
      },
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontSize: '14px',
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            fontSize: '14px',
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          label: {
            fontSize: '14px',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "initial",
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            fontWeight: 700,
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontSize: '14px',
          },
        },
      },
    },
  };
  
  
  export const LightTheme = responsiveFontSizes(createTheme({
        ...commonStyles,
        palette: lightPalette,
      })
  );
  
  export const DarkTheme = responsiveFontSizes(createTheme({
        ...commonStyles,
        palette: darkPalette,
      })
  );
  
  export default { LightTheme, DarkTheme };
  