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
                background:
                  "linear-gradient(90deg, transparent 0%, var(--accent) 60%)",
                color: "var(--background)",
                backgroundSize: "200% 100%",
                transition: "0.4s ease-out",
                transitionProperty: "background-position, color",
                backgroundPosition: "99% 0",
                ":hover": {
                  backgroundPosition: "10% 0",
                  color: "var(--foreground)",
                },
                ":not(:hover)": {
                  transition: "background-position 0.4s ease-in",
                  transitionProperty: "background-position, color",
                },
              },
            },
            {
              props: { variant: "text" },
              style: {
                background: "transparent",
                color: "var(--foreground)",
                transition: "0.4s ease-out",
                transitionProperty: "color",
                textTransform: "capitalize",
                width: "fit-content",
                ":hover": {
                  color: "var(--accent)",
                },
                ":not(:hover)": {
                  transition: "background-position 0.4s ease-in",
                  transitionProperty: "color",
                },
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
