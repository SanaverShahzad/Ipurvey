import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import "tailwindcss/tailwind.css";
import '../styles/sass/globals.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StylesProvider } from '@material-ui/core/styles';
import Layouts from '../layouts';
import Layout from '../layouts/dashboard layouts/layout'
import Appbar from '../components/appbar/Appbar'
import Appfooter from '../components/appfooter/appfooter';
import { useRouter } from 'next/router'
import {
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


export default function MyApp(props) {
  const { Component, pageProps  } = props;
  const [state, setstate] = React.useState({
    data:""
  })
  let location = useRouter();
  const data = (v) => {
  setstate({...state,data:v})
};
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>Ipurvey</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {['dashboard'].includes(location.pathname.split('/')[1]) ? 
        
        <Layout main={data} >
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Appbar/> 
        <Component {...pageProps} data={state.data} />
        </MuiPickersUtilsProvider>
        </Layout>
        :
        <Layouts>
        <Appbar/> 
        <Component {...pageProps} />
        <Appfooter/>
        </Layouts>

        
}
        </StylesProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

