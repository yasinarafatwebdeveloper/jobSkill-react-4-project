

// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import image1 from"../../../../../react-assignment-job-Skill-client/Image/03.png"
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // import './styles.css';

// // import required modules
// import { Pagination, Navigation } from 'swiper/modules';

//     export default function SliderSection() {
//         return (
//           <>
//             <Swiper
//               slidesPerView={1}
//               spaceBetween={30}
//               loop={true}
//               pagination={{
//                 clickable: true,
//               }}
//               navigation={true}
//               modules={[Pagination, Navigation]}
//               className="mySwiper"
//             >
//               <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
//               <SwiperSlide>Slide 2</SwiperSlide>
//               <SwiperSlide>Slide 3</SwiperSlide>
//               <SwiperSlide>Slide 4</SwiperSlide>
//               <SwiperSlide>Slide 5</SwiperSlide>
//               <SwiperSlide>Slide 6</SwiperSlide>
//               <SwiperSlide>Slide 7</SwiperSlide>
//               <SwiperSlide>Slide 8</SwiperSlide>
//               <SwiperSlide>Slide 9</SwiperSlide>
//             </Swiper>
//           </>
//         );
//       }
      


// export default SliderSection;

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import image1 from"../../../../../react-assignment-job-Skill-client/Image/01.png"

import image2 from"../../../../../react-assignment-job-Skill-client/Image/04 (2).png"

import image3 from"../../../../../react-assignment-job-Skill-client/Image/05 (1).png"
import image4 from"../../../../../react-assignment-job-Skill-client/Image/Frame 4887 (3).png"
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import AutoSlider from './AutoSlider';
import OldSlider from './OldSlider';

// import React from 'react';

// const SliderSection = () => {
    export default function SliderSection() {
    return (
        <div className='mt-20'>
            <div className='flex'>
                <div className='w-1/2'>

          

    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='w-full h-[570px]' src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[570px]' src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[570px]' src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[570px]' src={image4} />
        </SwiperSlide>
      </Swiper>
    </>
  
{/* } */}
                </div>
                <div className='w-1/2'>
                {/* <AutoSlider></AutoSlider> */}
                {/* <OldSlider></OldSlider> */}
                </div>
            </div>
        </div>
    );
};

// export default SliderSection;