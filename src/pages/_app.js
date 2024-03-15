import '@/styles/globals.css'
import '@/assets/css/common.css'
import '@/assets/css/productList.css'
// import Header from '../component/Header'
const Header = dynamic(() => import('../component/Header'), {
  ssr: true,
})
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../component/Footer';
import { Provider, useStore } from 'react-redux';
import Store, { wrapper } from '@/store';
import dynamic from 'next/dynamic';
import Layout from '@/component/Layout';
import Script from 'next/script';
export default function App({ Component, pageProps }) {


  // const store=useStore();
  return <>
    <Provider store={Store}>
   
        <Layout>
          <Header />
          <div className='mainBody'>
           <Component {...pageProps} />
          </div>
          <Footer />
          <Script src="https://www.paypal.com/sdk/js?client-id=AcgVyzh290ThuhPpodhS5qXybp7hmW8WzZhLdQrdlGQrFfGnkEgyV16ZATZGAOdBP2OCx8NGEVsDrrz8&currency=USD"/>
        </Layout>

    </Provider>

  </>
}

// export default wrapper.withRedux(App);
