import { addrList, buyApi, cartLists } from '@/helpers/apiUrl'
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
import { isLogin, postOptions, userData } from '@/helpers/apiUrl/helpers'
import { useSelector } from 'react-redux'
import Paypal from '@/component/Paypal'
const Checkout = ({ addrResp, cartItems }) => {
  const [enablePaypal, setenablePaypal] = useState(false)
  const [loader, setloader] = useState(true)
  const [paypalreq, setPaypalreq] = useState([]);
  const selector = useSelector((state) => {
    return state?.CheckoutReducer?.checkoutData
  })

  useEffect(() => {
    if (addrResp?.status === 1) {
      setloader(false)
    }
  }, [])

  const checkout = () => {
    const data = {
      currency_code: "USD",
      user_id: userData.user_id ? userData.user_id : "",
      coupan_code: selector?.coupon,
      session_id: "",
      order_total: cartItems?.data?.sub_total,
      gift_message: selector?.gift,
      instructions: selector?.instruction,
      tax_amount: cartItems?.data?.tax ? cartItems?.data?.tax : "",
      s_address_id: addrResp?.data?.address?.[0]?.address_id,
      b_address_id: addrResp?.data?.address?.[0]?.address_id,
      shipping_cost: 10,
      shipping_option_id: "",
      token: isLogin ? userData.token : "",
      password: "",
      email: addrResp?.data?.address?.[0]?.email,
      sfirst_name: addrResp?.data?.address?.[0]?.first_name,
      slast_name: addrResp?.data?.address?.[0]?.last_name,
      sphone: addrResp?.data?.address?.[0]?.phone,
      saddress1: addrResp?.data?.address?.[0]?.address1,
      saddress2: addrResp?.data?.address?.[0]?.address2,
      scity: addrResp?.data?.address?.[0]?.city,
      sstate: addrResp?.data?.address?.[0]?.state,
      scountry: addrResp?.data?.address?.[0]?.country,
      szip: addrResp?.data?.address?.[0]?.zip,
      bfirst_name: addrResp?.data?.address?.[0]?.first_name,
      blast_name: addrResp?.data?.address?.[0]?.last_name,
      bphone: addrResp?.data?.address?.[0]?.phone,
      baddress1: addrResp?.data?.address?.[0]?.address1,
      baddress2: addrResp?.data?.address?.[0]?.address2,
      bcity: addrResp?.data?.address?.[0]?.city,
      bstate: addrResp?.data?.address?.[0]?.state,
      bcountry: addrResp?.data?.address?.[0]?.country,
      bzip: addrResp?.data?.address?.[0]?.zip,
      payment_mode: 1
    }




    axios.post(buyApi, data, postOptions)
      .then(res => {
        if (res.data.status == 1) {
          console.log("res.data.status",res.data.status)
          setPaypalreq(res.data.data)
          setenablePaypal(true)
        } else if (res.data.status == 2) {
          // localStorage.removeItem('bw-user')
          // dispatch(whishlistlength(0))
          // dispatch(cartlengthvalue(0))
          // dispatch(sessionId(''))
          // history.push("/")
          // window.location.reload(true);
        } else {
          toast.error(res.data.message, { autoClose: 3000 });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
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
                    {
                      enablePaypal ? <Paypal id="paypalbutton" data={paypalreq} /> : <Image src={require("@/assets/img/paypal.png")} alt="paypal" />
                    }


                  </div>

                  {
                    !enablePaypal &&   <button className='btn btn-secondary w-100' onClick={checkout}>
                    Continue
                  </button>
                  }

                
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