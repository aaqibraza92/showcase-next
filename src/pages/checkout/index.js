import { addrList, cartLists } from '@/helpers/apiUrl'
import axios from 'axios'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { setCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import Address from './Address'
import CartItems from './CartItems'
import Total from './Total'
import Image from 'next/image'
const Checkout = ({ addrResp, cartItems }) => {
  console.log("cartItems", cartItems)
  const [loader, setloader] = useState(true)

  useEffect(() => {
    if (addrResp?.status === 1) {
      setloader(false)
    }

  }, [])
  return (
    <>
      <Head>
        <title> Checkout - Belgium webnet</title>
        <meta charset="UTF-8" />
        <meta name="keywords" content="cart" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section>
        <Container>
          <h3 className='fs36 fw700 mb30'>
            Checkout
          </h3>

          <section>
            <h3 className='mb15'>
              Shipping Address
            </h3>
            <Row>

              <Col md={7}>

                {
                  addrResp?.status !== 1 ? <div className="skeleton" style={{ height: "300px" }}></div> :
                    <Address data={addrResp?.data?.address} />
                }

              </Col>

              <Col md={5}>
                {
                  cartItems?.status !== 1 ? <div className="skeleton" style={{ height: "300px" }}></div> :
                    <CartItems data={cartItems?.data?.cart_data_jewelry} />
                }

              </Col>
            </Row>

          </section>

          <section className='mt30 mb30'>
            <Row>
            <Col md={7}>
                {
                  cartItems?.status !== 1 ? <div className="skeleton" style={{ height: "300px" }}></div> :
                    <Total data={cartItems?.data} />
                }

              </Col>
              <Col md={5}>
                <div className='text-center'>
                  <h4>
                    Select Payment Method
                  </h4>

                  <div className='mt20 mb20'>
                    <Image src={require("@/assets/img/paypal.png")} alt="paypal" />
                  </div>

                  <button className='btn btn-secondary w-100'>
                    Continue
                  </button>
                </div>

              </Col>
         
            </Row>
          </section>
        </Container>
      </section>
    </>

  )
}

export default Checkout

export async function getServerSideProps(props, context) {
  const userData = props?.req?.cookies?.userData;
  const userDataParsing = userData ? JSON.parse(userData) : []

  try {
    const payload = {
      currency_code: "USD",
      token: userDataParsing?.token ? userDataParsing?.token : "",
      user_id: userDataParsing?.user_id ? userDataParsing?.user_id : "",
      session_id: "",
    };

    const options = {
      method: "POST",
      headers: {
        // if file upload "Content-Type": "multipart/form-data",
        Accept: "application/json"
      },
    };

    const responses = await Promise.all([
      axios.post(addrList, payload, options),
      axios.post(cartLists, payload, options)
    ]);

    const addrResp = responses[0].data;
    const cartItems = responses[1].data;
    // const proFilter = responses[1].data;

    return {
      props: {
        addrResp,
        cartItems
      },
    };
  } catch (error) {
    console.error(error);

    // Pass only serializable error information (like a message)
    return {
      props: {
        error: error.message || 'An error occurred'
      }
    };
  }
}