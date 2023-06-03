import { createTheme } from 'tamagui';
import { tokens } from '../token/tokens';

const light = createTheme({
  primary: tokens.color.violet,
  primaryContrast: tokens.color.white,
});

const allThemes = {
  light,
  dark: light,
};

export const themes = allThemes;
