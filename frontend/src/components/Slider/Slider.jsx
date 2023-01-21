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
                    <SwiperSlide><img className='slider-image' src="https://preview.colorlib.com/theme/hexa/images/slider-1.jpg.webp" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='slider-image' src="https://preview.colorlib.com/theme/hexa/images/slider-2.jpg.webp" alt="" /></SwiperSlide>

                </Swiper>
            </div>
        </>

    );
};