import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import BannerSlider from '@/component/Home/BannerSlider'
import CallToAction from '@/component/Home/CallToAction'
import axios from 'axios'
import { apiBaseUrl, megaMenu } from '@/helpers/apiUrl'
import { useDispatch } from 'react-redux'
import Consult from '@/component/Home/Consult'
import Insta from '@/component/Home/Insta'
import Newsletter from '@/component/Home/Newsletter'
import { wrapper } from '@/store'
import { Navigation } from '@/store/reducers/HeaderReducer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  const dispatch= useDispatch();
  // dispatch(Navigation(data)) 

  console.log("props",data)
  
  return (
    <>
      <Head>
        <title>Home - Belgium Webnet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
      <BannerSlider/>
      <Consult/>
      <CallToAction/>

      <Insta/>
      <Newsletter/>
      </main>
    </>
  )
}



// export async function getServerSideProps() {
//   try {
//     return axios.get(megaMenu)
//       .then((response) => {
//         const data = response.data;
        
//         return {
//           props: {
//             data,
//           },
//         };
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error.message);
//         return {
//           props: {
//             data: {},
//           },
//         };
//       });
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//     return {
//       props: {
//         data: {},
//       },
//     };
//   }
// }


// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (context) => {
//     // const filter_normal1 = store.getState()
//   // let {counter} = useStore.getState();
//   const apires = await fetch(megaMenu)
//   const repo = await apires.json()
//   // const repo = fetch(`${base_url}/api/productlist_api`)
//   console.log("repo",repo)
//   store.dispatch(Navigation([{
//     day: "val"
// }]))
//   const aa = store.getState()
//   console.log("aaqib===>>>",aa);
//   return { props: {menu: repo.data } };
//   }
// );