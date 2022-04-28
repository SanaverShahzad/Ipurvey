import { createMuiTheme } from '@material-ui/core/styles';
import { red,blue } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2E58A6',
    },
    secondary: {
      main: '#F0F4FC',
    },
    default: {
    main:"#ffffff"
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ffffff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 992,
      xl: 1500
    }
  },
  typography:{
    fontFamily:'Poppins',
    body1:{
      fontFamily:'Poppins',
    }
  }

});

export default theme;