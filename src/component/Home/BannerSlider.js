import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';


const BannerSlider = () => {
  return (
    <section>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {Array(10).fill().map((e, i) => (
            <SwiperSlide key={i}>
              <div className='position-relative d-flex align-items-center'>
              <Image src={require('@/assets/img/home/banner.jpg')} className='img-fluid' alt='banner'/>
              <div className='position-absolute textOverlap w-100'>
                <Container>
                  <Row>
                    <Col lg={6}>
                    <h3>
                    Slide {i}
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolore dignissimos nobis ab nihil adipisci dicta pariatur excepturi.
                  </p>
                    </Col>
                  </Row>
             
                </Container>
            
              </div>
              </div>
             
            </SwiperSlide>
          ))}


        </Swiper>
    </section>
  )
}

export default BannerSlider