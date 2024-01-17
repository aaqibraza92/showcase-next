import '@/styles/globals.css'
import '@/assets/css/common.css'
import Header from '../component/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../component/Footer';
import { Provider } from 'react-redux';
import Store from '@/store';
import { apiBaseUrl, megaMenu } from '@/helpers/apiUrl';
export default function App({ Component, pageProps,props }) {

  console.log(props)

  return <>
  <Provider store={Store}>
  <Header/>
  <div className='mainBody'>
  <Component {...pageProps} />
  </div>
  <Footer/>
  </Provider>

  </>
}

