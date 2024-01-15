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

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  return { props: { repo } }

// const {data}=  await axios.get(apiBaseUrl + megaMenu);
// // console.log("data11",data?.data)
// return {
//   props: data || {}
// }
// MegaMenu()
}
