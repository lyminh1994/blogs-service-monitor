import { Palette } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    neutral: {
      [key in number]: string;
    };
    common?: CommonColors;
    contrastThreshold?: number;
    tonalOffset?: PaletteTonalOffset;
    secondary?: PaletteColor;
    grey?: Color;
    getContrastText?: (background: string) => string;
    augmentColor?: (options: PaletteAugmentColorOptions) => PaletteColor;
  }

  interface PaletteColor {
    lightest: string;
    darkest: string;
    alpha4?: string;
    alpha8?: string;
    alpha12?: string;
    alpha30?: string;
    alpha50?: string;
  }

  interface TypeAction {
    hoverOpacity?: number;
    selectedOpacity?: number;
    disabledOpacity?: number;
    focusOpacity?: number;
    activatedOpacity?: number;
  }
}
