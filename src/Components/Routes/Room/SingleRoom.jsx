import React from 'react';
import { Helmet } from 'react-helmet-async';

const SingleRoom = ({room}) => {
    const{name,image}=room
    return (
      <div>
        <Helmet>
          <title> Room page</title>
        </Helmet>
        <div className='mt-10'  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
         <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
    className='mr-3'
      src={image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default SingleRoom;