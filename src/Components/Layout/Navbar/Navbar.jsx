import { Link } from "react-router-dom";
import logo from"../../../../../react-assignment-job-Skill-client/logo/logo.png"

const Navbar = () => {

    const navItems=<>
    
    <li className="font-bold text-base "><Link to="/">Home</Link></li>
    <li className="font-bold text-base "><Link to="/about">About</Link></li>
    <li className="font-bold text-base "><Link to="/rooms">Rooms</Link></li>
    <li className="font-bold text-base "><Link to="/">Blogs</Link></li>
    <li className="font-bold text-base "><Link to="/">Page</Link></li>
    </>
    return (
        <div className="h-[100px] 
drop-shadow-md sticky top-0 left-0 z-50">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {navItems}
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
    <img className=" xl:w-[181px] xl:h-24 lg:w-[181px] lg:h-24 md:w-[181px] md:h-24 sm:w-[140px] sm:h-14 w-[100px] h-[50px] " src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItems}
    </ul>
  </div>



  {/*  */}

  {/*  */}
  <div className="navbar-end">


    <ul className="flex ">
    <li className=" lg:font-semibold md:font-semibold sm:font-semibold font-normal text-base sm:px-2 px-3"><Link className="px-0 mx-0" to="/">Login</Link></li>
    <li className=" lg:font-semibold md:font-semibold sm:font-semibold font-normal text-base sm:px-2 px-3"><Link className="mx-0 my-0" to="/">Signup</Link></li>
    </ul>
 

    {/*  */}
    {/* btn   xl:w-32 xl:h-14 lg:w-32 lg:h-14 md:w-32 md:h-14 */}

  <button className=" px-3 py-3 lg:px-3 lg:py-3 md:px-3 md:py-3 sm:px-4 sm:py-4 bg-[#CEAF83] font-bold rounded-full">Reservation</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;