import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const data=[
    {
        title: "Service One",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat natus vitae voluptatibus architecto? Ipsum ex consectetur consequuntur earum neque quibusdam commodi. Explicabo saepe amet beatae itaque harum velit natus."
    },
    {
        title: "Lorem Ipsum 2",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat natus vitae voluptatibus architecto? Ipsum ex consectetur consequuntur earum neque quibusdam commodi. Explicabo saepe amet beatae itaque harum velit natus."
    },
    {
        title: "Lorem Ipsum 3",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat natus vitae voluptatibus architecto? Ipsum ex consectetur consequuntur earum neque quibusdam commodi. Explicabo saepe amet beatae itaque harum velit natus."
    }
];
const CallToAction = () => {
  return (
  <section className='pt80 pb80'>
    <Container>
        <Row>
            {
                data.map((e,i)=>(
                    <Col lg={4} md={4} key={i}>
                    <h3>
                        {e.title}
                    </h3>
                    <p>
                    {e.para}
                    </p>
                    </Col>
                ))
            }
        
        </Row>
    </Container>
  </section>
  )
}

export default CallToAction