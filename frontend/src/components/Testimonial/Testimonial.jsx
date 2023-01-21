import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "../Testimonial/Testimonial.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TestMontialCard from './TestmonialCard';

const Testimonial = () => {
    return (
        <>
            <div className='testimonial-wrapper'>
                <div className="container">
                    <div className="row">
                        <div className='testimonial-text'>
                            <div style={{ width: "50%", textAlign: "center", margin: "0 auto", padding: "50px" }}>
                                <h2 style={{ fontSize: "3em" }}>Testimonial</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
                            </div>
                        </div>
                        <div className='testimonial-slider'>
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={3}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide>
                                    <TestMontialCard />
                                </SwiperSlide>
                                {/* <SwiperSlide><div style={{ border: "1px solid black", height: "200px" }}>
                                </div></SwiperSlide>
                                <SwiperSlide><div style={{ border: "1px solid black", height: "200px" }}>
                                </div></SwiperSlide>
                                <SwiperSlide><div style={{ border: "1px solid black", height: "200px" }}>
                                </div></SwiperSlide>
                                <SwiperSlide><div style={{ border: "1px solid black", height: "200px" }}>
                                </div></SwiperSlide>
                                <SwiperSlide><div style={{ border: "1px solid black", height: "200px" }}>
                                </div></SwiperSlide>
                                <SwiperSlide><div style={{ border: "1px solid black", height: "200px" }}>
                                </div></SwiperSlide> */}
                            </Swiper>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Testimonial