import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Consult = () => {
    return (
        <section className=''>
            <Container fluid>
                <Row>
                    <Col lg={6} className='pt100 pb100'>
                        <div className='text-center h-100 d-flex align-items-center justify-content-center pl30 pr30'>
                            <div>
                                <h2>
                                    Consult with a Jewelry Specialist
                                </h2>
                                <p>
                                orem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat natus vitae voluptatibus architecto? Ipsum ex consectetur consequuntur earum neque quibusdam commodi. Explicabo saepe amet beatae itaque harum velit natus.
                                </p>
                                <div className='mt30'>
                                    <Link href="/" className="btnTheme">
                                        Appointment
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </Col>
                    <Col lg={6}>
                        <Image src={require('@/assets/img/home/right_img.jpeg')} className='img-fluid' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Consult