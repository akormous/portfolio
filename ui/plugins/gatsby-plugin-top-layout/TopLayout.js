import * as React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import theme from '../../src/theme';

export default function TopLayout(props) {
  return (
    <React.Fragment>
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