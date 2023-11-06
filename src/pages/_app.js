import '@/styles/globals.css'
import '@/assets/css/common.css'
import Header from '../component/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../component/Footer';

export default function App({ Component, pageProps }) {
  return <>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
}
