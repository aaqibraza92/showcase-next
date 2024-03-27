import React from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap';

const BlogDetail = () => {
  const router= useRouter();
    console.log("props",router?.query?.detail)
  return (
    <div>
      <Container>
      Dyanmic path : {router?.query?.detail}
      </Container>
    
    </div>
  )
}

export default BlogDetail


// export async function generateStaticParams(){
//   const bloglist= ""
// }