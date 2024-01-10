import Link from 'next/link'
import React, { useEffect } from 'react'
import ButtonComp from './buttonComp'
import { Container } from 'react-bootstrap'
import custom from "@/styles/custom.module.css"
import localFont from 'next/font/local'
const myFont = localFont({ src: "../../assets/font/Avenir-Black.ttf" })
import Head from 'next/head';
import getUsers from '@/component/users'
import UserLists from './userLists'




const index = ({products,userslist}) => {


    // const router = useRouter();
    // useEffect(()=>{
    //     router.push("/");
    // },[])

   
    return (
        <>
          <Head>
        <title>
        Our Blog 
        </title>
        <meta
          name="This is our blog"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
            <Container>

                <h2>
                    User lists
                </h2>
                {/* {
userslist?.map((e,i)=>(
    <div className='listingUser' key={i}>
        {e.name} 
    </div>
))
                } */}
                <UserLists data={userslist}/>
                <div className={myFont.className} >Blog list</div>
                <ul>
                    <li className={custom.colorBlue}>
                        <Link href="/blog/1">Link 1</Link>
                    </li>
                    <li>
                        <Link href="/blog/2"> Link 2</Link>
                    </li>
                    <li>
                        <Link href="/blog/3"> Link 3</Link>
                    </li>
                </ul>

                <ul>
                   
                    {
                    products?.products.length < 33 && <h2>Aaqib</h2>
                        
                    }
                    {
                        products?.products?.map((e, i) => (
                            <li key={i} className='mb-2'>
                                {e.title} <ButtonComp count={i} title={e.title} />
                            </li>
                        ))
                    }
                </ul>
            </Container>

        </>

    )
}

export default index
// export const getServerSideProps = wrapper.getServerSideProps(
//     (store) => async (context) => {
//     let {counter} = store.getState();
//       const data = await fetchData();
//       return { props: data };
//     }
//   );
export async function getServerSideProps() {
    const res = await fetch('https://dummyjson.com/products')
    const repo = await res.json()

    let getUserData= getUsers();
    let resUser= await getUserData;

    return { props: {products: repo, userslist: resUser } }
}

export async function generateStaticParams(){
    const res= getUsers();
    // const res=  await fetch("https://jsonplaceholder.typicode.com/users")
    // return res.map((user)=>({
    //     detail: user.id.toString()
    // }))
}