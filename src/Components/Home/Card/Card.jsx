import React from 'react';

const Card = ({card}) => {
    const{image}=card
    return (
        <div>
           <div>
           
           </div>
            <div className=" bg-base-100 relative">
            <div className='absolute right-[20px] top-[79px] bg-white rounded-[10px] text-[#CEAF83] font-semibold z-40 px-5 text-[24px]'>

         
      <p>$77773</p>
    </div>
  <figure className=" relative">

    <img
      src={image}
      alt="Shoes"
      className="rounded-xl w-full h-[459px] px-3 " />
  </figure>
  <div className="relative">
    <div className='absolute z-30 -top-20 text-white px-4'>
    <h2 className='bold text-3xl'>Deluxe Double Room</h2>
    <div className='flex px-3'>
      <h5 className='border-r-4 border-white pr-4 mr-4'>500 sqft</h5>

      <h5 className='border-r-4 border-white pr-4 mr-4'>3-4 guests</h5>
      <h5 className='pr-4 mr-4'>Free Wifi</h5>
    </div>
    </div>
    {/* <div className="card-actions">
    
    </div> */}
  </div>
</div>
        </div>
    );
};

export default Card;