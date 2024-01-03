import Link from 'next/link'
import React from 'react'
import ButtonComp from './buttonComp'
import { Container } from 'react-bootstrap'
import custom from "@/styles/custom.module.css"
import localFont from 'next/font/local'
const myFont = localFont({ src: './my-font.woff2' })

const oswald = Oswald({
    weight: '700',
    subsets: ['latin'],
  })

const index = ({ repo }) => {
    return (
        <>
            <Container>
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
                        repo?.products?.map((e, i) => (
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
    // Fetch data from external API
    const res = await fetch('https://dummyjson.com/products')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
}