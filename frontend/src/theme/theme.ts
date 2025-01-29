"use client";

import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  typography: {
    fontFamily: "var(--font-montserrat)",
  },
  cssVariables: true,

  palette: {
    primary: {
      main: "#fafaf9",
      contrastText: "#fafaf9",
    },
    text: {
      secondary: "#fafaf9",
      primary: "#fafaf9",
    },
    action: {
      active: "#fafaf9",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "var(--rounded)",

          variants: [
            {
              props: { variant: "contained" },
              style: {
                backgroundColor: "transparent",
                backgroundImage: "var(--button)",
              },
            },
          ],
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "&:after": {
            color: "var(--foreground)",
          },
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          "&::before": {
            borderBottomColor: "var(--foreground)",
          },
        },
      },
    },
  },
});

export default customTheme;
