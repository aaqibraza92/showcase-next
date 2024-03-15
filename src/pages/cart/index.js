import { cartLists, removeCart } from '@/helpers/apiUrl'
import { ApiHeader, isLogin, postOptions, userData } from '@/helpers/apiUrl/helpers'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { toast } from 'react-toastify';

const Cart = ({ cartItems }) => {

    console.log("cartItems", cartItems)
    const router = useRouter();
    const [ifcartEmpty, setifcartEmpty] = useState(false);
    const [loader, setLoader] = useState(true);
    const [cartLoader, setcartLoader] = useState(false);
    const [gift, setgift] = useState("");
    const [coupon, setcoupon] = useState("");
    const [instruction, setinstruction] = useState("");
    useEffect(() => {
        if (cartItems?.status == 1) {
            setLoader(false)
        }
        if (cartItems?.status == 2) {
            router.push("/login")
        }
        if (cartItems?.message === "Cart is empty") {
            setifcartEmpty(true)
            // router.push("/fine-jewelry") 
        }
    }, [cartItems?.message])

    const removeFromCart = (cartID) => {
        const data = {
            currency_code: "USD",
            cart_id: cartID,
            user_id: userData?.user_id ? userData?.user_id : "",
            session_id: "",
            token: isLogin ? userData?.token : "",
        }
        setcartLoader(true)
        axios.post(removeCart, data, ApiHeader)
            .then(res => {
                if (res.data.status == 1) {
                    toast.success(res.data.message, { autoClose: 3000 });
                    router.replace(router.asPath)
                    setcartLoader(false)

                } else if (res.data.status == 2) {
                    // localStorage.removeItem('bw-user')
                    // dispatch(whishlistlength(0))
                    // dispatch(cartlengthvalue(0))
                    // dispatch(sessionId(''))
                    // history.push("/")
                    // window.location.reload(true);
                    router.replace(router.asPath)
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
                <title> Cart - Belgium webnet</title>
                <meta charset="UTF-8" />
                <meta name="keywords" content="cart" />
                <meta name="author" content="Syamlal CM" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <section>
                <Container>
                    <h2 className='fs25'>
                        Your Cart
                    </h2>

                    {
                        ifcartEmpty ? <div class="mt-4 p-5 bg-primary text-white rounded mb-5">
                            <h3 className='mb15'>Your Cart is empty</h3>
                            <Link className='btn btn-secondary' href="/fine-jewelry">Shop Now</Link>
                        </div> : <> <section className='mt30 mb30'>

                            {
                                loader && <Row className="gy-4">
                                    {
                                        Array(6).fill().map((e, i) => (
                                            <Col key={i} lg={6}>
                                                <div className="skeleton" style={{ height: "300px" }}></div>
                                            </Col>
                                        ))
                                    }

                                </Row>}
                            {
                                cartItems?.status === 1 && cartItems?.data?.cart_data_combo && cartItems?.data?.cart_data_combo?.map((e, i) => (
                                    <div className='cartItemsList border mb20 pl15 pr15 pt15 pb15' key={i}>
                                        {
                                            console.log("eee", e?.combo_diamond)
                                        }
                                        <Row>
                                            <Col md={3}>
                                                <div className='d-flex align-items-center h-100'>
                                                    <Link href={`product-detail/${e?.slug}`}><Image width={200} height={200} src={e?.combo_diamond?.imagelink} /></Link>
                                                </div>

                                            </Col>
                                            <Col md={5}>
                                                <div className='d-flex align-items-center h-100'>
                                                    <div>
                                                        <h3 className='fs20'>
                                                            <Link className='colorBlack' href={`product-detail/${e?.combo_diamond?.slug}`}> {e?.combo_diamond?.name} </Link>
                                                        </h3>
                                                        <div>
                                                            SKU: #{e?.combo_diamond?.sku}
                                                        </div>
                                                        <div className='mb0'>
                                                            <button className='btn pl0 p-0' onClick={() => removeFromCart(e?.combo_diamond?.cart_id)}>
                                                                {cartLoader ? "Removing..." : "&#x2715; Remove From Cart"}
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <button className='btn pl0 p-0'>
                                                                &#10084;  Move to Wishlist
                                                            </button>
                                                        </div>

                                                    </div>

                                                </div>


                                            </Col>
                                            <Col md={2}>
                                                <div className='d-flex align-items-center h-100'>
                                                    Quantity:{e?.combo_diamond?.quantity}
                                                </div>


                                            </Col>
                                            <Col md={2}>
                                                <div className='d-flex align-items-center h-100'>
                                                    <strong>${e?.combo_diamond?.sale_price}</strong>
                                                </div>

                                            </Col>
                                        </Row>
                                    </div>


                                ))
                            }
                            {
                                cartItems?.status === 1 && cartItems?.data?.cart_data_jewelry && cartItems?.data?.cart_data_jewelry.map((e, i) => (
                                    <div className='cartItemsList border mb20 pl15 pr15 pt15 pb15' key={i}>
                                        <Row>
                                            <Col md={3}>
                                                <div className='d-flex align-items-center h-100'>
                                                    <Link href={`product-detail/${e?.slug}`}><Image width={200} height={200} src={e?.url} /></Link>
                                                </div>

                                            </Col>
                                            <Col md={5}>
                                                <div className='d-flex align-items-center h-100'>
                                                    <div>
                                                        <h3 className='fs20'>
                                                            <Link className='colorBlack' href={`product-detail/${e?.slug}`}> {e?.name} </Link>
                                                        </h3>
                                                        <div>
                                                            SKU: #{e?.sku}
                                                        </div>
                                                        <div className='mb0'>
                                                            <button className='btn pl0 p-0' onClick={() => removeFromCart(e?.cart_id)}>
                                                                {cartLoader ? "Removing..." : "Remove From Cart"}
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <button className='btn pl0 p-0'>
                                                                &#10084;  Move to Wishlist
                                                            </button>
                                                        </div>

                                                    </div>

                                                </div>


                                            </Col>
                                            <Col md={2}>
                                                <div className='d-flex align-items-center h-100'>
                                                    Quantity:{e?.quantity}
                                                </div>


                                            </Col>
                                            <Col md={2}>
                                                <div className='d-flex align-items-center h-100'>
                                                    <strong>${e?.sale_price}</strong>
                                                </div>

                                            </Col>
                                        </Row>
                                    </div>


                                ))
                            }
                            <div className='d-flex align-items-center justify-content-end   '>
                                {/* <button className='btn btn-secondary'>
                                &#x2715; Remove From Cart
                            </button> */}
                                <strong className='fs20'>Total Amount: ${cartItems?.data?.sub_total}</strong>
                            </div>

                        </section>

                            <section className='mb40'>
                                <Row>
                                    <Col md={6}>
                                        <div className='border pt30 pb30 pl30 pr30'>
                                            <h4 className='fs20 colorBlack fw700 mb20'>
                                                GIFT OPTIONS
                                            </h4>
                                            <div className='mb15'>
                                                <input type="text" onChange={(e) => setgift(e.target.value)} className='form-control' value={gift} placeholder='Gift Message' />
                                            </div>
                                            <div className='mb15'>
                                                <input type="text" onChange={(e) => setinstruction(e.target.value)} className='form-control' value={instruction} placeholder='Instruction' />
                                            </div>
                                            <div className='mb15'>
                                                <input type="text" onChange={(e) => setcoupon(e.target.value)} className='form-control' value={coupon} placeholder='USE A COUPON CODE' />
                                            </div>
                                            <div className='mb15'>
                                                <button className='btn btn-secondary'>Apply Coupon</button>
                                            </div>

                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className='border pt30 pb30 pl30 pr30'>
                                            <h4 className='fs20 colorBlack fw700 mb20'>
                                                ORDER TOTAL
                                            </h4>

                                            <table class="table table-striped">
                                                <tbody>
                                                    <tr>
                                                        <th>SUBTOTAL</th>
                                                        <td>${cartItems?.data?.sub_total}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>SHIPPING CHARGES</th>
                                                        <td>${cartItems?.data?.shipping}</td>

                                                    </tr>
                                                    <tr>
                                                        <th>Coupon Discount</th>
                                                        <td>$0</td>
                                                    </tr>
                                                    <tr>
                                                        <th>SALES TAX ESTIMATE</th>
                                                        <td>${cartItems?.data?.tax}</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <div className='d-flex align-items-center justify-content-between'>
                                                <span className='fw700 fs20'>
                                                    Total Amount
                                                </span>
                                                <strong className='fs20'>
                                                    ${cartItems?.data?.sub_total}
                                                </strong>

                                            </div>

                                            <div className='mt20'>
                                                <Link href="/checkout" className='btn btn-primary w-100'>Checkout</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </section>
                        </>
                    }





                </Container>


            </section>
        </>

    )
}

export default Cart


export async function getServerSideProps(props, context) {
    const userData = props?.req?.cookies?.userData;
    const userDataParsing = userData ? JSON.parse(userData) : []

    try {
        const cartPayload = {
            currency_code: "USD",
            session_id: "",
            token: userDataParsing?.token,
            user_id: userDataParsing?.user_id
        }
        return axios.post(cartLists, cartPayload, {
            headers: ApiHeader
        }).then((response) => {
            const cartItems = response.data;
            return {
                props: {
                    cartItems,
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