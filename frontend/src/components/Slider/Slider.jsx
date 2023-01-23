import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import '../Slider/Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    return (
        <>
            <div className='slider-wrapper'>
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
                >
                    <SwiperSlide><img className='slider-image' src="https://preview.colorlib.com/theme/hexa/images/slider-1.jpg.webp" alt="" />
                        <div className='slider-content' >
                            <h2>CREATIVE DESIGN</h2>
                            <p style={{ color: "white" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci harum totam nostrum doloribus
                                repellat perspiciatis laudantium blanditiis? Nihil, atque odio.</p>
                            <div>
                                <button className='slider-get__button' style={{ width: "100px" }}>GET STARTED</button>
                                <button className='slider-down__button' style={{ width: "100px" }}>DOWNLOAD</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img className='slider-image' src="https://preview.colorlib.com/theme/hexa/images/slider-2.jpg.webp" alt="" />
                        <div className='slider-content' >
                            <h2>MODERN DESIGN</h2>
                            <p style={{ color: "white" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci harum totam nostrum doloribus
                                repellat perspiciatis laudantium blanditiis? Nihil, atque odio.</p>
                            <div>
                                <button className='slider-get__button' style={{ width: "100px" }}>GET STARTED</button>
                                <button className='slider-down__button' style={{ width: "100px" }}>DOWNLOAD</button>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>

    );
};