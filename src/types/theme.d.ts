import { ThemeOptions, Theme } from "@mui/material";

declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    'neutral': true,
  }
}

