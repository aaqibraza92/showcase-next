import {  addToCartUrl, productDetail, productDetailEndPoint, productDetailFilter, relatedProduct } from '@/helpers/apiUrl'
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
import { isLogin, postOptions, userData,ApiHeader } from '@/helpers/apiUrl/helpers';
import Head from 'next/head';

const ProductDetail = ({ data1, related, filter }) => {
  const [btnLoader,setbtnLoader]=useState(false);
  const [filterData, setfilterData] = useState(filter);
  const [variations, setvariations] = useState({});
  const allData = data1?.data?.[0];

  console.log("allData",allData?.product_id)

  const addToCart=()=>{
    const data = {
      currency_code: "USD",
      user_id: userData?.user_id ? userData?.user_id : '',
      session_id: "",
      product_id: allData?.product_id,
      quantity: '1',
      ring_size: "",
      engraving_text: "Demo Examples",
      engraving_font: "great_vibes",
      token: isLogin ? userData?.token : '',
      type: 'jewelry',
    };
    setbtnLoader(true)
    axios.post(addToCartUrl, data,{
      // 'authorization':`Token e222085edc871220cae528152b73c1317ba2addf`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }).then((res) => {
      if (res.data.status == 1) {
        
        // toast.success(res.data.message, { autoClose: 3000 });
      } else if (res.data.status == 2) {
        // localStorage.removeItem('bw-user');
        // store.dispatch(whishlistlength());
        // store.dispatch(cartlengthvalue(0));
        // store.dispatch(sessionId(''));
        // this.props.history.push('/');
        // window.location.reload(true);
      } else {
        toast.error(res.data.message, { autoClose: 3000 });
      }
      setbtnLoader(false)
    })
    


  }

  const variationHandle=(event)=>{
    setvariations({ ...variations, [event.target.name]: event.target.value });
  }
  return (
    <>
     <Head>
     <title> {allData?.name} - Belgium webnet</title>
        <meta charset="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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


          <div className='mb25 mt15'>
            {
              filterData.length > 0 && filterData?.map((e, i) => (
                <div className='form-group mb12' key={i}>
                  <label className='d-block t5' htmlFor="">{e.title}</label>
                  <select name={e.title.replaceAll(" ","_")} id="" className='form-control' onChange={variationHandle}>


                    {
                      e.data.map((inner, ind) => (
                        <option key={ind} value={inner.value}>
                          {inner.name}
                        </option>
                      ))
                    }

                  </select>
                </div>
              ))
            }
          </div>



        </div>

        <div className='mt15'>
          <button onClick={addToCart} className='btnTheme w-100'>
            {btnLoader ? "Adding to cart..." : "Add to cart"}
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
    </>
  


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
        filter: filter?.data
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


