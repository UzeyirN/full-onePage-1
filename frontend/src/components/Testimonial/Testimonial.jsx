import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "../Testimonial/Testimonial.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import '../Testimonial/TestmonialCard.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';

const Testimonial = () => {


    const [authors, setAuthors] = useState(null)

    const getData = () => {
        return fetch('http://localhost:3050/authors')
            .then(response => response.json())
            .then(data => setAuthors(data));
    }
    const handleDelete = async (id) => {
        await axios.delete(`http://www.localhost:3050/authors/${id}`);
        getData()
    }

    useEffect(() => {
        getData()
    }, [])

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
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}

                                breakpoints={{
                                    300: {
                                        width: 300,
                                        slidesPerView: 1,
                                    },

                                    640: {
                                        width: 640,
                                        slidesPerView: 1,
                                    },

                                    768: {
                                        width: 768,
                                        slidesPerView: 2,
                                    },
                                    992: {
                                        width: 992,
                                        slidesPerView: 3
                                    },
                                    1200: {
                                        width: 1200,
                                        slidesPerView: 3
                                    },
                                    1400: {
                                        width: 1400,
                                        slidesPerView: 3
                                    },
                                    2000: {
                                        width: 2000,
                                        slidesPerView: 3
                                    }
                                }}
                            >
                                {
                                    authors?.map(({ _id, author, image, comment, specialty }) => (
                                        <SwiperSlide>
                                            <div className='card-wrapper'>
                                                <div className='card-top' >
                                                    <div className='card-img'>
                                                        <img src={image} alt="" />
                                                    </div>
                                                    <div className='card-author'>
                                                        <h5>{author}</h5>
                                                        <h5>{specialty}</h5>
                                                    </div>
                                                </div>
                                                <div className='card-bottom'>
                                                    <p>
                                                        {comment}
                                                    </p>
                                                </div>
                                                <button className='delete-btn' onClick={() => handleDelete(_id)}>DELETE</button>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial