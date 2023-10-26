import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../assets/img/logo.png";
import Image from 'next/image';

const Header = () => {
  return (
  <section>
    <Container>

        <Row>
            <Col lg={2}>
                <Image src={logo} className='img-fluid' alt="" />
            </Col>
            <Col lg={6}>
               <h3>
                Navigation
               </h3>
            </Col>

            <Col lg={4}>
            <h3>
                cart items
               </h3>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Header