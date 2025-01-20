import { createTheme } from '@mui/material';
import { Color } from './colors';

export const createOaTheme = () =>
  createTheme({
    palette: {
      primary: {
        main: Color.primary
      },
      secondary: {
        main: Color.secondary
      },
      error: {
        main: Color.red
      },
      success: {
        main: Color.green
      },
      warning: {
        main: Color.amber
      }
    },
    typography: {
      fontFamily: "'Poppins', sans-serif"
    },
    components: {
      MuiButton: {
        defaultProps: {
          size: 'medium'
        }
      },
      MuiFilledInput: {
        defaultProps: {
          margin: 'dense'
        }
      },
      MuiFormControl: {
        defaultProps: {
          size: 'small'
        }
      },
      MuiFormHelperText: {
        defaultProps: {
          margin: 'dense'
        }
      },
      MuiIconButton: {
        defaultProps: {
          size: 'small'
        }
      },
      MuiInputBase: {
        defaultProps: {
          margin: 'dense'
        }
      },
      MuiInputLabel: {
        defaultProps: {
          margin: 'dense',
          size: 'small'
        }
      },
      MuiListItem: {
        defaultProps: {
          dense: true
        }
      },
      MuiOutlinedInput: {
        defaultProps: {
          size: 'small'
        }
      },
      MuiFab: {
        defaultProps: {
          size: 'small'
        }
      },
      MuiTable: {
        defaultProps: {
          size: 'small'
        }
      },
      MuiTextField: {
        defaultProps: {
          margin: 'dense'
        }
      },
      MuiToolbar: {
        defaultProps: {
          variant: 'dense'
        }
      }
    }
  });
