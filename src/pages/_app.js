import '@/styles/globals.css'
import Header from './Header'
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return <>
  <Header/>
  <Component {...pageProps} />
  <h3>
    Footer
  </h3>
  </>
}
