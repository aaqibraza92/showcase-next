import { ApiHeader, productDetail, productDetailEndPoint, productDetailFilter, relatedProduct } from '@/helpers/apiUrl'
import axios from 'axios'
import Link from 'next/link'
import React, { useRef, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import ProductGridComp from '../fine-jewelry/ProductGridComp';

const ProductDetail = ({ data1, related, filter }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const allData = data1?.data?.[0];
  console.log("related", related)
  return (
    <section>
      <Container>
        <ul className='d-flex noUl mb15'>
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
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                {allData?.product_image.map((e, i) => (
                  <SwiperSlide key={i}>
                    <div className='position-relative d-flex align-items-center text-center justify-content-center'>
                      <Image width={500} height={300} src={e?.url} className='img-fluid' alt='banner' />
                    </div>

                  </SwiperSlide>
                ))}


              </Swiper>

            </Col>

            <Col lg={5}>
              <div className=''>
                <h2 className='fs25'>
                  {allData?.name}
                </h2>
                <div className='fw600 fs18'>
                  SKU: {allData?.sku}
                </div>
                <div className='fw600 fs18'>
                  Price: ${allData?.sale_price}
                </div>
                <div className='form-group'>
                  <label htmlFor="">Material</label>
                  <select name="" id="">
                    <option value="">

                    </option>
                  </select>
                </div>

              </div>

              <div className='mt15'>
                <button onClick={() => { }} className='btnTheme w-100'>
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
              </div>

            </Col>
          </Row>
        </Container>
      </div>

      <div className='productDetails mt30 mb50'>
        <Container>
          <h3>
            PRODUCT DETAILS
          </h3>
          <ul className='noUl row gy-2'>
            {
              allData?.attribute?.map((e, i) => (
                <li key={i} className='col-md-4'>
                  <strong>{e.title}: </strong> <div>{e.value}</div>
                </li>
              ))
            }
          </ul>

        </Container>
      </div>

      <div className='productDetails mt30 mb30'>
        <Container>
          <h3 className='mb20'> 
            Related Products
          </h3>
          <Row>
            {
              related?.result?.map((e, i) => (
                <Col key={i} lg={3} sm={3}>
                  <ProductGridComp data={e} />
                </Col>
              ))
            }
          </Row>


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
    const payloadRelated = {
      category: "bracelets",
      currency_code: "USD",
      metal_color: "14K-White-Gold",
      product_id: "390867",
      session_id: "",
      user_id: ""
    };
    const payloadFilter = {
      currency_code: "USD",
      slug: context?.query?.index
    };
    const options = {
      method: "POST",
      headers: {
        // if file upload "Content-Type": "multipart/form-data",
        Accept: "application/json"
      },
    };

    const responses = await Promise.all([
      axios.post(productDetailEndPoint, data, options),
      axios.post(relatedProduct, payloadRelated, options),
      axios.post(productDetailFilter, payloadFilter, options)
    ]);

    const data1 = responses[0].data;
    const related = responses[1].data;
    const filter = responses[2].data;

    return {
      props: {
        data1: data1,
        related: related?.data,
        filter
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        error: error.message || 'An error occurred'
      }
    };
  }
}


