import { ApiHeader, productDetail, productDetailEndPoint } from '@/helpers/apiUrl'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ProductDetail = ({ data }) => {
  const allData=data?.data?.[0];
  console.log("data",allData)
  return (
    <section>
      <Container>
        <ul className='d-flex noUl'>
          <li className='mr10'>
            <Link href="/">Home</Link> /
          </li>
          <li>
            {allData?.name}
          </li>
        </ul>

      </Container>

      <div className='galleryArea'>
        <Container>
          <Row>
             <Col lg={7}>
             </Col>

             <Col lg={5}>
              <h2 className='fs22'>
              {allData?.name}
              </h2>
              <div className='fw600 fs18'>
                SKU: {allData?.sku}
              </div>
              <div className='fw600 fs18'>
                Price: ${allData?.sale_price}
              </div>

              <button onClick={()=>{}} className='btnTheme w-100'>
                Add to cart
              </button>

              <div className='d-flex w-100 justify-content-between mt15'>
                <div>
                  <button className='btnTheme'>
                  Add to wishlist
                  </button>
                </div>

                <div>
                  <button className='btnTheme'>
                  Schedule an Appointment
                  </button>
                </div>
              </div>
             </Col>
          </Row>
        </Container>
      </div>

      <div className='productDetails mt30'>
        <Container>
          <h3>
          PRODUCT DETAILS
          </h3>
          <ul className='noUl'>
          {
            allData?.attribute?.map((e,i)=>(
              <li key={i}>
                <strong>{e.title}: </strong> <span>{e.value}</span>
              </li>
            ))
          }
          </ul>
    
        </Container>
      </div>
    </section>


  )
}

export default ProductDetail


export async function getServerSideProps(context) {

  try {
    const data = {
      currency_code: "USD",
      selecteddata: "featured",
      slug: context?.query?.index,
      user_id: "",
      session_id: "",
    };
    return axios.post(productDetailEndPoint, data, {
      headers: ApiHeader
    }).then((response) => {
      const data = response.data;
      return {
        props: {
          data,
        },
      };
    })
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        data: {},
      },
    };
  }
}