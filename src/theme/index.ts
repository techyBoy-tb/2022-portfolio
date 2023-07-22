import { createTheme } from '@mui/material/styles';

import palette from './palette';

const theme = createTheme({
  typography: {
    fontSize: 20,

    allVariants: { color: palette.blue },
    fontFamily: 'Jaldi',
  },
  palette: {
    primary: {
      main: palette.blue,
    },
    secondary: {
      main: palette.orange,
    },
    action: {
      active: palette.accent,
    },
    error: {
      main: palette.error,
    },
    warning: {
      main: palette.warning,
    },
    info: {
      main: palette.info,
    },
    success: {
      main: palette.success,
    },
    grey: {
      '100': palette.light,
    },
    background: {
      default: palette.background,
      paper: palette.background,
    },
  },
});

export default theme;
