


import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import logo from"../../../../../react-assignment-job-Skill-client/logo/logo.jpg"

const OldSlider = () => {
  return (
    <div>
      <Swiper
        

        slidesPerView={4}
                      centeredSlides={true}
                      spaceBetween={30}
                      grabCursor={true}
                      pagination={{
                        clickable: true,
                      }}
                      autoplay={{
                        // delay: 1000,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay,Pagination]}
                      className="mySwiper"
      >
      <SwiperSlide>
     
                   <div className="card card-compact bg-base-100 px-5 py-4 my-4 shadow-xl w-[300px] h-[250px]">
              
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
     
     <div className="card card-compact bg-base-100 px-5 py-4 my-4 shadow-xl w-[300px] h-[250px]">

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
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OldSlider;
