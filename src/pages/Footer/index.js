import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../assets/img/bw-logo-footer.png";
import Image from 'next/image';
import Link from 'next/link'

const Footer = () => {
    return (
        <section className='pt-5 pb-5 footerMain'>
            <Container>
                <Row>
                    <Col lg={3} xl={3}>
                        <Link href="/">
                            <Image src={logo} className='img-fluid'></Image>
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
    )
}

export default Footer