import { ThemeProvider, createTheme } from '@mui/material/styles';

import Nav from '../components/common/nav'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
  const theme = createTheme({
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            padding: '2rem 4rem !important',
          }
        }
      }
    },
    palette: {
      primary: {
        main: '#004A98',
        contrastText: '#ffffff',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
