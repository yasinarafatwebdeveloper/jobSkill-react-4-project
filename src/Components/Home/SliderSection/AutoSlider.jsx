import React from 'react';
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import logo from"../../../../../react-assignment-job-Skill-client/logo/logo.jpg"



    export default function AutoSlider() {
        return (
          <>
            <Swiper
              slidesPerView={2}
              // centeredSlides={true}
              spaceBetween={15}
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay,Pagination]}
              className="mySwiper"
            >
                {/* <div className='flex overflow-hidden border border-red-600'> */}
              <SwiperSlide>

              <div className="card card-compact bg-base-100 px-5 py-4 my-4 shadow-xl  h-[250px]">
         
                <div className='flex justify-center items-center'>
  <figure>
    <img className='w-20 h-16 rounded-lg'
      src={logo}
      alt="logo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Eila</h2>
    <p>Product Manager</p>
    </div>
 </div>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
    <p>Their services exceeded expectations! The design flexibility and cloud performance have truly impressed our team.</p>


    <div>
    <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-6"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
   <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-6"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
     <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-6"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  
</div>
    </div>

</div>
              </SwiperSlide>


              <SwiperSlide>

<div className="card card-compact bg-base-100 px-5 py-4 my-4 shadow-xl  h-[250px]">

  <div className='flex justify-center items-center'>
<figure>
<img className='w-20 h-16 rounded-lg'
src={logo}
alt="logo" />
</figure>
<div className="card-body">
<h2 className="card-title">Eila</h2>
<p>Product Manager</p>
</div>
</div>
{/* <div className="card-actions justify-end">
<button className="btn btn-primary">Buy Now</button>
</div> */}
<p>Their services exceeded expectations! The design flexibility and cloud performance have truly impressed our team.</p>


<div>
<div className="rating rating-sm">
<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
<input
type="radio"
name="rating-6"
className="mask mask-star-2 bg-orange-400"
defaultChecked />
<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
<input
type="radio"
name="rating-6"
className="mask mask-star-2 bg-orange-400"
defaultChecked />
<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
<input
type="radio"
name="rating-6"
className="mask mask-star-2 bg-orange-400"
defaultChecked />

</div>
</div>

</div>
</SwiperSlide>

 <SwiperSlide>

<div className="card card-compact bg-base-100 px-5 py-4 my-4 shadow-xl  h-[250px]">

  <div className='flex justify-center items-center'>
<figure>
<img className='w-20 h-16 rounded-lg'
src={logo}
alt="logo" />
</figure>
<div className="card-body">
<h2 className="card-title">Eila</h2>
<p>Product Manager</p>
</div>
</div>
{/* <div className="card-actions justify-end">
<button className="btn btn-primary">Buy Now</button>
</div> */}
<p>Their services exceeded expectations! The design flexibility and cloud performance have truly impressed our team.</p>


<div>
<div className="rating rating-sm">
<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
<input
type="radio"
name="rating-6"
className="mask mask-star-2 bg-orange-400"
defaultChecked />
<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
<input
type="radio"
name="rating-6"
className="mask mask-star-2 bg-orange-400"
defaultChecked />
<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
<input
type="radio"
name="rating-6"
className="mask mask-star-2 bg-orange-400"
defaultChecked />

</div>
</div>

</div>
</SwiperSlide>

 <SwiperSlide>

<div className="card card-compact bg-base-100 px-5 py-4 my-4 shadow-xl  h-[250px]">

  <div className='flex justify-center items-center'>
<figure>
<img className='w-20 h-16 rounded-lg'
src={logo}
alt="logo" />
</figure>
<div className="card-body">
<h2 className="card-title">Eila</h2>
<p>Product Manager</p>
</div>
</div>
{/* <div className="card-actions justify-end">
<button className="btn btn-primary">Buy Now</button>
</div> */}
<p>Their services exceeded expectations! The design flexibility and cloud performance have truly impressed our team.</p>


<div>
<div className="rating rating-sm">
<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
<input
type="radio"
name="rating-6"
className="mask mask-star-2 bg-orange-400"
defaultChecked />
<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
<input
type="radio"
name="rating-6"
className="mask mask-star-2 bg-orange-400"
defaultChecked />
<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
<input
type="radio"
name="rating-6"
className="mask mask-star-2 bg-orange-400"
defaultChecked />

</div>
</div>

</div>
</SwiperSlide>











           
             
              {/* </div> */}
              {/* <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide></SwiperSlide> */}
           
            </Swiper>
          </>
        );
      }
      
// };

// export default AutoSlider;