import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../assets/img/logo.png";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
  <header className={`mainHeader pt20 pb20 bgWhite`}>
    <Container>

        <Row>
            <Col lg={3}>
                <Link href="/"><Image src={logo} className='img-fluid' alt="logo" /></Link>
            </Col>
            <Col lg={6}>
              <div className='text-center'>
              <h3>
                Navigation
               </h3>
              </div>
            </Col>

            <Col lg={3}>
              <div className='d-flex justify-content-end'>
              <h3>
                cart items
               </h3>
              </div>
    
            </Col>
        </Row>
    </Container>
  </header>
  )
}

export default Header