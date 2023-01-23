import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "../Testimonial/Testimonial.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import '../Testimonial/TestmonialCard.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonial = () => {


    const [authors, setAuthors] = useState(null)

    const getData = () => {
        return fetch('http://localhost:3050/authors')
            .then(response => response.json())
            .then(data => setAuthors(data));
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
                                slidesPerView={3}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                {
                                    authors?.map((author) => (
                                        <SwiperSlide>
                                            <div className='card-wrapper'>
                                                <div className='card-top' >
                                                    <div className='card-img'>
                                                        <img src={author.image} alt="" />
                                                    </div>
                                                    <div className='card-author'>
                                                        <h5>{author.author}</h5>
                                                        <h5>CEO,Co-Founder</h5>
                                                    </div>
                                                </div>
                                                <div className='card-bottom'>
                                                    <p>
                                                        {author.comment}
                                                    </p>
                                                </div>
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