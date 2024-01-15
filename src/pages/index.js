import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import BannerSlider from '@/component/Home/BannerSlider'
import CallToAction from '@/component/Home/CallToAction'
import axios from 'axios'
import { apiBaseUrl, megaMenu } from '@/helpers/apiUrl'
import { useDispatch } from 'react-redux'
import { Navigation } from '@/store/reducers/SomeAuth'
import Consult from '@/component/Home/Consult'
import Insta from '@/component/Home/Insta'
import Newsletter from '@/component/Home/Newsletter'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  const dispatch= useDispatch();
  dispatch(Navigation(props)) 
  
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
//   // const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   // const repo = await res.json()
//   // return { props: { repo } }

// const {data}=  await axios.get(apiBaseUrl + megaMenu);
// // console.log("data11",data?.data)
// return {
//   props: data || {}
// }
// // MegaMenu()
// }

// const MegaMenu=async()=>{
//   await axios.get(apiBaseUrl + megaMenu).then((res)=>{
     
//       if(res.status==200){
//         return {
//           props: res?.data?.data
//         }
//         console.log("res",res?.data)
//       }
//   })
// }

