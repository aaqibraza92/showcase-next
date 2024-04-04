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
import { useMemo, useState } from 'react';
import axios from 'axios';
import { megaMenu } from '@/helpers/apiUrl';
export default function App({ Component, pageProps,data }) {
  console.log("data11",data)
  // const headerApi = async () => {
  //   const [headerData,setheaderData]=useState([])
  //   await axios.get(megaMenu).then((res) => {
  //     console.log("res", res)
      
  //     setheaderData(res?.data?.data)
  //   })
  // }
  // useMemo(() => {
  //   headerApi()
  // }, [])


  // const store=useStore();
  return <>
    <Provider store={Store}>

      <Layout>
        <Header />
        <div className='mainBody'>
          <Component {...pageProps} />
        </div>
        <Footer />
        <Script src="https://www.paypal.com/sdk/js?client-id=AcgVyzh290ThuhPpodhS5qXybp7hmW8WzZhLdQrdlGQrFfGnkEgyV16ZATZGAOdBP2OCx8NGEVsDrrz8&currency=USD" />
      </Layout>

    </Provider>

  </>
}

// export default wrapper.withRedux(App);


export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/products')
  const repo = await res.json()
  console.log("repo",repo)
  return { props: {data: repo } }
}