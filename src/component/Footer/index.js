import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../assets/img/bw-logo-footer.png";
import Image from 'next/image';
import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <section className='pt80 pb80 footerMain'>
                <Container>
                    <Row>
                        <Col lg={3} xl={3}>
                            <Link href="/">
                                <Image src={logo} className='img-fluid' alt='footer logo' />
                            </Link>
                        </Col>
                        <Col lg={3} xl={3}>
                            <div className=''>
                                <h3 className='text-light mb15'>
                                    Information
                                </h3>
                                <ul className='noUl'>
                                    <li className='mb7'>
                                        <Link className='text-light' href="/">About Us</Link>  </li>
                                    <li className='mb7'>  <Link className='text-light' href="/">Blog</Link> </li>
                                    <li className='mb7'>
                                        <Link className='text-light' href="/">Privacy Policy</Link>
                                    </li>
                                    <li>     <Link className='text-light' href="/">Terms & Condition</Link> </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3} xl={3}>
                            <div className=''>
                                <h3 className='text-light mb15'>
                                    Information
                                </h3>
                                <ul className='noUl'>
                                    <li className='mb7'>
                                        <Link className='text-light' href="/about">About Us</Link>  </li>
                                    <li className='mb7'>  <Link className='text-light' href="/">Blog</Link> </li>
                                    <li className='mb7'>
                                        <Link className='text-light' href="/">Privacy Policy</Link>
                                    </li>
                                    <li>     <Link className='text-light' href="/">Terms & Condition</Link> </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3} xl={3}>
                            <div className=''>
                                <h3 className='text-light mb15'>
                                    Information
                                </h3>
                                <ul className='noUl'>
                                    <li className='mb7'>
                                        <a className='text-light' href="mailto:example@gmail.com">example@gmail.com</a>  </li>
                                    <li className='mb7'>   <a className='text-light' href="tel:+918269315646">+918269315646</a></li>
                                    <li>
                                        <Link className='text-light' target='_blank' href="https://www.google.com/">Google</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='copyright text-center bg-light'>
                <Container>
                    <p className='mb0 fs14 pt12 pb12'>
                        Belgium webnet © {new Date().getFullYear()} All rights reserved. Designed and Developed by: Belgium webnet
                    </p>
                </Container>
            </section>
        </footer>

    )
}

export default Footer