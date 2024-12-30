import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
// import image from "../../../../../react-assignment-job-Skill-client/Image/04 (1).png";

const CardItem = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("Card.json")
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);

    return (
        <div>
            <div className="flex mb-10">
            <h1 className="w-1/2 font-bold text-3xl">Discover Homeya's Finest Properties For Your Dream Home</h1>
            <p className="w-1/2 text-base font-medium">All three of Rooms Hotels locations are restorations that translate historic locations into places of contemporary comfort. Industrial architecture, salvaged building materials and the unique approach</p>
            </div>
       
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {cards.map((card, index) => {
            
                if (index === 0) {
                    return (
                        <div key={card._id} className="lg:col-span-2">
                            <Card card={card} />
                        </div>
                    );
                }
              
                return <Card key={card._id} card={card} />;
            })}
        </div>
            
            <Link to="/rooms">
            <button className="flex items-center justify-center mx-auto mt-3 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#CEAF83] rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        

    <span className="mx-1">View All</span>
    <MdArrowRightAlt />
</button>
            
</Link>
        </div>
    );
};

export default CardItem;