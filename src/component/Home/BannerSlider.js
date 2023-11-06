import React from 'react'
import { Container } from 'react-bootstrap';
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
                <Image src={require('@/assets/img/home/banner.jpg')} className='img-fluid' alt='banner'/>
            </SwiperSlide>
          ))}


        </Swiper>
    </section>
  )
}

export default BannerSlider