import React from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap';

const blogDetail = () => {
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

export default blogDetail


// export async function generateStaticParams(){
//   const bloglist= ""
// }