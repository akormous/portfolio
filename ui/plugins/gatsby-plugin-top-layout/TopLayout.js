import * as React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import theme from '../../src/theme';
import Helmet from 'react-helmet'

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};