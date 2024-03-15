import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
const CartItems = ({ data }) => {

    console.log("DDD", data)
    return (
        <section className='border p-3'>
            <h4 className='mb20'>
            YOUR ORDER SUMMARY
            </h4>
            {
                data.length > 0 && data?.map((e,i) => (
                    <Row key={i} className='mb15 border-top pt15 pb15'>
                    <Col md={3}>
                        <div className='d-flex align-items-center h-100'>
                            <Link href={`product-detail/${e?.slug}`}><Image width={100} height={100} src={e?.url} /></Link>
                        </div>

                    </Col>
                    <Col md={9}>
                        <div className='d-flex align-items-center h-100'>
                            <div>
                                <h3 className='fs20'>
                                    <Link className='colorBlack' href={`product-detail/${e?.slug}`}> {e?.name} </Link>
                                </h3>
                                <div>
                                    SKU: #{e?.sku}
                                </div>
                              
                                <div className='d-flex align-items-center h-100'>
                            Quantity:{e?.quantity}
                        </div>

                        <div className='d-flex align-items-center h-100'>
                            <strong>${e?.sale_price}</strong>
                        </div>
                            </div>

                        </div>


                    </Col>
                 
                </Row>
                ))
            }

        </section>
    )
}

export default CartItems