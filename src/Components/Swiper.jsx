// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import image_1 from '../Assets/picture_png/img_1.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
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
      <SwiperSlide className='w-full'>
        <img src={image_1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={image_1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={image_1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={image_1} alt="" />
      </SwiperSlide>
      ...
    </Swiper>
  );
};