import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Insta = () => {
    return (
        <>
            <Container>
                <Row>
                    <div className="rcs_news_content1 w-100 mt-5 mb-3" >
                        <h2 className='text-center'>View our Instagram</h2>
                    </div>
                </Row>
            </Container>
            <iframe src="https://instagram.demobw.live/showcase/" frameborder="0" width="100%" class="insta-iframe"></iframe>
        </>

    )
}

export default Insta