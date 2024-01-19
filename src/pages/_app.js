import '@/styles/globals.css'
import '@/assets/css/common.css'
import Header from '../component/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../component/Footer';
import { Provider, useStore } from 'react-redux';
import Store, { wrapper } from '@/store';
export default function App({ Component, pageProps}) {

    
// const store=useStore();
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

// export default wrapper.withRedux(App);
