import '../styles/globals.css'
import Layout from '../components/Layout';
// Custome theme provider
import CustomThemeProvider from '../theme/CustomThemeProvider';

function MyApp({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </CustomThemeProvider>
  );
}

export default MyApp;
