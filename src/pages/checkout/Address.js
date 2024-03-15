import React from 'react'
import { Col, Row } from 'react-bootstrap';

const Address = (props) => {
    const {data}= props;
  return (
    <div class="card">
    <div class="card-body">

      <Row>
        <Col md={6}>
          <div className='mb15'>
            <strong>Name:</strong>
            <p>{data?.[0]?.first_name + " " + data?.[0]?.last_name
            }</p>
          </div>
        </Col>
        <Col md={6}>
          <div className='mb15'>
            <strong>Address:</strong>
            <p>{data?.[0]?.address1 + " " + data?.[0]?.address2
            }</p>
          </div>
        </Col>
        <Col md={6}>
          <div className='mb15'>
            <strong>Email:</strong>
            <p>{data?.[0]?.email
            }</p>
          </div>
        </Col>
        <Col md={6}>
          <div className='mb15'>
            <strong>Mobile:</strong>
            <p>{data?.[0]?.phone
            }</p>
          </div>
        </Col>
        <Col md={6}>
        <div className='mb15'>
            <strong>Country:</strong>
            <p>{data?.[0]?.country
            }</p>
          </div>
        </Col>
        <Col md={6}>
        <div className='mb15'>
            <strong>State:</strong>
            <p>{data?.[0]?.state
            }</p>
          </div>
        </Col>
        <Col md={6}>
        <div className='mb15'>
            <strong>City:</strong>
            <p>{data?.[0]?.city
            }</p>
          </div>
        </Col>

        <Col md={6}>
        <div className='mb15'>
            <strong>Zip:</strong>
            <p>{data?.[0]?.zip
            }</p>
          </div>
        </Col>
      </Row>







    </div>
  </div>
  )
}

export default Address