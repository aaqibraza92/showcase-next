import { heart } from '@/assets/svg';
import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap';

const ProductListGrid = (props) => {
    const { data } = props;
    return (
        <div className='productMainWrapper'>
            <Row>
                <Col lg={4}>
                    <div className='proList'>
                        <Image width={300} height={300} className='img-fluid' src={data?.product_image?.[0]?.url} />
                    </div>
                </Col>
                <Col lg={8}>
                    <div className='productTitle fs15 fw600 mt8'>
                        {data?.name}
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