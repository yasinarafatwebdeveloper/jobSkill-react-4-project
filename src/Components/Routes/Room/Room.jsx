// import React from 'react';

import { useEffect, useState } from "react";
import SingleRoom from "./SingleRoom";

const Room = () => {
    const[rooms,setRooms]=useState([])
useEffect(()=>{
fetch("/Room.json")
.then(res=>res.json())
.then(data=>setRooms(data))
},[])
    return (



        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5">
            {
                rooms.map((room)=><SingleRoom room={room} key={room._id}></SingleRoom>)
            }
           
        </div>
    );
};

export default Room;