

import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
    return (
        <div>
            <div className="relative lg:ml-10">
                <div className="lg:flex justify-center items-center bg-white lg:shadow-lg p-4 lg:rounded-full justify-between border lg:w-[800px] md:w-full w-full   lg:h-36 mx-auto drop-shadow-2xl absolute  z-[1!important] -top-72">

             
                <div className=" px-4 my-2">
                    <label>Check In</label>
                    
                    <input className=" lg:border-0 w-full border border-gray-700 p-4 rounded" type="date" />
                </div>
                 <div className=" px-4 my-2">
                    <label>Check Out</label>
                    
                   <input className=" lg:border-0 w-full border border-gray-700  p-4 rounded" type="date" />
                </div>
                 <div className=" px-4 my-2">
                    <lebel>AduIts</lebel>
                    <div>
                        <select className="w-full appearance-none  lg:border-0  border border-gray-700 p-4 rounded" name="" id="">
                            <option value="">Add Rooms</option>
                            <option value="">Room 1</option>
                            <option value="">Children 2</option>
                            <option value="">Children 3</option>
                        </select>
                    </div>
                </div>
                 <div className="px-4 my-2">
                    <label>Children</label>
                    <div>
                        <select className="w-full appearance-none  lg:border-0  border border-gray-700 p-4 rounded" name="" id="">
                            <option value="">Add Rooms</option>
                            <option value="">Room 1</option>
                            <option value="">Children 2</option>
                            <option value="">Children 3</option>
                        </select>
                    </div>
                </div>
                 <div className="px-4 my-2">
                    <label>Rooms</label>
                    <div>
                        <select className="appearance-none  lg:border-0 w-full border border-gray-700 p-4 rounded" name="" id="">
                            <option value="">Add Rooms</option>
                            <option value="">Room 1</option>
                            <option value="">Room 2</option>
                            <option value="">Room 3</option>
                        </select>
                    </div>
                </div>
              
               <div className="px-4 my-2">
                <button className=" flex gap-4 items-center justify-center border lg:w-20 lg:h-20 p-4 lg:p-0 w-full rounded-lg lg:rounded-full bg-[#CEAF83]">
                   <FaSearch className="text-white"> </FaSearch> 
                   <span className="lg:hidden text-white">Search</span>
                </button>
                </div>

                  </div>
            </div>
        </div>
    );
};

export default SearchBar;