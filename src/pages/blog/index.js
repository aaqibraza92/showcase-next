import Link from 'next/link'
import React from 'react'


const index =  ({repo}) => {
 console.log("hello",repo);
    return (
        <>
            <div>Blog list</div>
            <ul>
                <li>
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
                    repo?.products?.map((e,i)=>(
                            <li key={i}>
                                {e.title}
                            </li>
                    ))
                }
            </ul>
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