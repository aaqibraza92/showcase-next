import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../assets/img/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Navigation from './Navigation';

const Header = () => {
  const router = useRouter();
  useEffect(()=>{
    document.body.className = window.location.pathname==="/" ? "body-Home" : "body-"+window.location.pathname.replaceAll("/", "");
    return () => { document.body.className = ''; }
  },[router?.pathname])

  return (
  <header className={`mainHeader pt20 pb20 bgWhite`}>
    <Container fluid>

        <Row>
            <Col lg={3}>
                <Link href="/"><Image src={logo} className='img-fluid' alt="logo" /></Link>
            </Col>
            <Col lg={6}>
              <div className='text-center'>
              <Navigation/>
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