import Head from 'next/head'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Checkout = () => {
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
            <h3 className='fs36 fw700'>
                Checkout
            </h3>

            <section>
              <Row>
                <Col md={6}>
                <h3>
                Shipping Address
            </h3>
                </Col>

                <Col md={6}>
                </Col>
              </Row>
            </section>
        </Container>
    </section>
    </>

  )
}

export default Checkout