import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Head from 'next/head';
import Image from 'next/image';
const About = () => {
    return (
        <>
            <Head>
                <title>About Us - Belgium Webnet</title>
                <meta
                    name="description"
                    content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
                    key="desc"
                />
            </Head>
            <section className='pt80 pb80'>
                <Container>

                    <Row className='align-items-center gy-5'>
                        <Col lg={6} md={6}>
                            <h2 className='mb15'>
                                About Us
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde voluptate iure nemo porro error consequatur doloribus sint velit cum amet repellat, saepe fuga in facilis impedit tempore voluptatem nobis.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde voluptate iure nemo porro error consequatur doloribus sint velit cum amet repellat, saepe fuga in facilis impedit tempore voluptatem nobis.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde voluptate iure nemo porro error consequatur doloribus sint velit cum amet repellat, saepe fuga in facilis impedit tempore voluptatem nobis.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde voluptate iure nemo porro error consequatur doloribus sint velit cum amet repellat, saepe fuga in facilis impedit tempore voluptatem nobis.
                            </p>
                        </Col>

                        <Col lg={6} md={6}>

                            <Image className='img-fluid' src={require("@/assets/img/home/banner.jpg")} />
                        </Col>

                        <Col lg={6} md={6}>

                            <Image className='img-fluid' src={require("@/assets/img/home/banner.jpg")} />
                        </Col>

                        <Col lg={6} md={6}>
                            <h2 className='mb15'>
                                About Us
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde voluptate iure nemo porro error consequatur doloribus sint velit cum amet repellat, saepe fuga in facilis impedit tempore voluptatem nobis.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde voluptate iure nemo porro error consequatur doloribus sint velit cum amet repellat, saepe fuga in facilis impedit tempore voluptatem nobis.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde voluptate iure nemo porro error consequatur doloribus sint velit cum amet repellat, saepe fuga in facilis impedit tempore voluptatem nobis.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde voluptate iure nemo porro error consequatur doloribus sint velit cum amet repellat, saepe fuga in facilis impedit tempore voluptatem nobis.
                            </p>
                        </Col>


                    </Row>

                </Container>
            </section>


        </>

    )
}

export default About