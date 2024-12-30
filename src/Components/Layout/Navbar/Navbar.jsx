import { Link } from "react-router-dom";
import logo from"../../../../../react-assignment-job-Skill-client/logo/logo.png"

const Navbar = () => {

    const navItems=<>
    
    <li className="font-bold text-base"><Link to="/">Home</Link></li>
    <li className="font-bold text-base"><Link to="/about">About</Link></li>
    <li className="font-bold text-base"><Link to="/rooms">Rooms</Link></li>
    <li className="font-bold text-base"><Link to="/">Blogs</Link></li>
    <li className="font-bold text-base"><Link to="/">Page</Link></li>
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
    <img className=" xl:w-[181px] xl:h-24 lg:w-[181px] lg:h-24 md:w-[181px] md:h-24 w-[100px] h-14" src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItems}
    </ul>
  </div>



  {/*  */}

  {/*  */}
  <div className="navbar-end">


    <ul className="flex lg:px-10 sm:px-5 ">
    <li className=" font-semibold text-base sm:px-3 px-6"><Link to="/">Login</Link></li>/
    <li className=" font-semibold text-base sm:px-3 px-6"><Link to="/">Signup</Link></li>
    </ul>
 



  <button className="btn btn-active bg-[#CEAF83] xl:w-32 xl:h-14 lg:w-32 lg:h-14 md:w-32 md:h-14 sm:w-[100px] sm:h-5 w-24 h-20 text-white font-bold rounded-full">Reservation</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;