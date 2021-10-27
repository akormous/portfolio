import * as React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import theme from '../../src/theme';
import Helmet from 'react-helmet'
import Avatar from '../../src/images/Avatar.jpg'

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet
      meta={[
        {
          name: `description`,
          content: `Hi, I am Akshat :)`,
        },
        {
          property: `og:title`,
          content: `Akshat Chauhan`,
        },
        {
          property: `og:description`,
          content: `Hi, I am Akshat :)`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
      >
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