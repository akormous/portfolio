import '../styles/globals.css'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
// Custome theme provider
import CustomThemeProvider from '../theme/CustomThemeProvider';

function MyApp({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
    <Navbar />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </CustomThemeProvider>
  );
}

export default MyApp
