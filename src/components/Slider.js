// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Sunah from '../images/Logo-SUNNAH-Hs.jpg';
import cart from '../images/sunnahCards.jpg';
import etiquette from '../images/etiqutteSunnah.jpg';
import Pic from '../images/pic02.jpg';

import mockups from '../images/brand/mockups.jpg';
import guapita from '../images/brand/Guapita.jpg';
import guapitaBusinessCard from '../images/brand/guapita-business-card.png';
import guapitaPackaging from '../images/brand/Guapita-Plastic-Pouch-Packaging.jpg';
import art from '../images/logo/art.png';
import delices from '../images/logo/delices.png';
import delysDeRym from '../images/logo/delysDeRym.jpg';
import flatDesign from '../images/logo/flat-design.png';
import salvaDelivery from '../images/logo/Flyer_Mockup_salva delivery.png';

const Slider =  () => {
  return (
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
        <SwiperSlide><img src={guapita} alt="" width={'100%'} height={200}/></SwiperSlide>
        <SwiperSlide><img src={guapitaBusinessCard} alt="" width={'100%'} height={200} /></SwiperSlide>
        <SwiperSlide><img src={guapitaPackaging} alt="" width={'100%'} height={200} /></SwiperSlide>
        <SwiperSlide><img src={Sunah} alt="" width={'100%'} height={200} /></SwiperSlide>
        <SwiperSlide><img src={cart} alt="" width={'100%'} height={200} /></SwiperSlide>
        <SwiperSlide><img src={etiquette} alt="" width={'100%'} height={200}/></SwiperSlide>
        <SwiperSlide><img src={salvaDelivery} alt="" width={'100%'} height={200} /></SwiperSlide>
        <SwiperSlide><img src={flatDesign} alt="" width={'100%'} height={200} /></SwiperSlide>
        <SwiperSlide><img src={mockups} alt="" width={'100%'} height={200} /></SwiperSlide>
        <SwiperSlide><img src={delices} alt="" width={'100%'} height={200} /></SwiperSlide>
        <SwiperSlide><img src={delysDeRym} alt="" width={'100%'} height={200} /></SwiperSlide>
    </Swiper>
  );
};

export default Slider;