import '@/styles/globals.css'
import '@/assets/css/common.css'
import Header from '../component/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../component/Footer';
import { Provider } from 'react-redux';
import Store from '@/store';
export default function App({ Component, pageProps }) {

  return <>
  <Provider store={Store}>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </Provider>

  </>
}
