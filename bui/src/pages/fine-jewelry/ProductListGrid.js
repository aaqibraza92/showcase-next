import { heart } from '@/assets/svg';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Col, Row } from 'react-bootstrap';

const ProductListGrid = (props) => {
    const { data } = props;
    return (
        <div className='productMainWrapper'>
            <Row>
                <Col lg={4}>
                    <div className='proList'>
                    <Link href={`/product-detail/${data?.slug}`}> <Image width={300} height={300} className='img-fluid' src={data?.product_image?.[0]?.url} alt={data?.name} /> </Link>
                    </div>
                </Col>
                <Col lg={8}>
                    <div className='productTitle fs15 fw600 mt8'>
                    <Link className="colorBlack" href={`/product-detail/${data?.slug}`}> {data?.name} </Link>
                    </div>
                    <div className='d-flex w-100 justify-content-between'>
                        <div>
                            ${data?.sale_price}
                        </div>
                        <div>
                            {heart}
                        </div>
                    </div>
                </Col>
            </Row>


        </div>
    )
}

export default ProductListGrid