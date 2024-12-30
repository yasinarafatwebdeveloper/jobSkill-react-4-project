import { Link } from "react-router-dom";
import image from "../../../../../react-assignment-job-Skill-client/Image/Frame 4887 (3).png"
// import video from"../../../../../react-assignment-job-Skill-client/video/3233144-hd_1920_1080_30fps.mp4"
import smallLogo from"../../../../../react-assignment-job-Skill-client/Image/Ellipse 2061.png"
import logo from"../../../../../react-assignment-job-Skill-client/Image/Frame.png"
import vector from"../../../../../react-assignment-job-Skill-client/Image/Vector.png"

import rightSideLogo from"../../../../../react-assignment-job-Skill-client/Image/Ellipse 2062.png"


const BannerSection = () => {
    return (
        <div className="lg:mt-32 md:mt-32 ">
     <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="relative">
      <div className="absolute z-40 -left-24">
      <img src={logo} alt="" />
      </div>
      <div className="absolute top-32 -left-44">
        <img className="w-[150px] h-10" src={vector} alt="" />
      </div>
      <div className="absolute -top-14 -left-1">
        <img src={smallLogo} alt="" />
      </div>
      <div className="absolute w-[200px] h-[200px]  md:w-[100px] md:h-[100px] -right-0 lg:mr-16 md:mr-0  top-80">
        <img className="sm:w-[70px] sm:h-[70px] sm:mr-16" src={rightSideLogo} alt="" />
      </div>
   
    <div className="lg:w-[645px] h-[795px]">
    <img
      src={image}
      className=" lg:rounded-lg shadow-2xl w-[536px] h-[734px]" />
    </div>
    </div>
    {/* <div className="relative">
      <img className="absolute" src={smallLogo} alt="" />
    </div> */}

    <div className="lg:w-[755px] h-[795px]">
      <h1 className="lg:text-8xl md:text-8xl sm:text-3xl">Find the top Hotels nearby</h1>
      <p className="py-6 text-lg">
       Looking for a comfortable and convanient place to call home? Our house rental offers spacious lining areas moderms anemins and prime location.Featuring multiple bedrooms,updates kitchen and cozy living space. its perfect for family and professionals.
      </p>
      <div className="flex justify-between list-none lg:w-[588px] h-[19px] text-base">
        <li><Link>Vila</Link></li>
        <li><Link>Family House</Link></li>
        <li><Link>Hotel</Link></li>
        <li><Link>Room</Link></li>
      </div>
      <div className=" flex lg:w-[373px] h-[52px] mt-10 justify-center md:w-[373px] h-[52px] mt-10 justify-between sm:mt-10 justify-between">
        

  <button className="btn btn-active bg-[#CEAF83] xl:w-32 h-14 lg:w-32 h-14  text-white font-bold rounded-full">Reservation</button>
  <div className="w-16 h-16 rounded-full shadow-lg overflow-hidden">
  <iframe
    className="w-full h-56 md:h-72"
    src="https://www.youtube.com/embed/y3iKTBnaE5g"
    // https://www.youtube.com/watch?v=y3iKTBnaE5g
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>

</div>
      <p className="lg:text-center ml-4 mt-4 md:text-center ml-4 mt-4"> Watch Our Story</p>

      </div>

        
     
    </div>
   
  </div>
 
</div>

        </div>
    );
};

export default BannerSection;