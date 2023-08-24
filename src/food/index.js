import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const menuItems = [
  {
    content: {
      name: "Chicken Burger",
      rating: 4.5,
      price: 3.5,
    },
    image: "/images/bager3.jpeg",
  },
  {
    content: {
      name: "Chicken Pizza",
      rating: 4.5,
      price: 4.20,
    },
    image: "/images/pizza2.jpeg",
  },
  // ... (other items)
];
const HomePage = () => {
  return (
    <div className="ml-40 grid grid-cols-1 md:grid-cols-3 gap-30 border mt-20 mr-30">
      {menuItems.map((item, index) => (
        <div className="item bg-red-100 rounded-lg mr-20 w-60" key={index}>
          <img
            src={item.image}
            alt={item.content.name}
            className="rounded-full w-60 h-60 outline outline-offset-2 outline-8 outline-red-500 ml-10"
          />
          <div className="item-details">
            <div className="item-name font-bold ml-5 mt-3">{item.content.name}</div>
            <div className="item-rating ml-5 text-yellow-500">
              {Array.from({ length: Math.floor(item.content.rating) }, (_, i) => (
                <FontAwesomeIcon icon={faStar} key={i} />
              ))}
              {` ${item.content.rating}`}
            </div>
            <div className="flex flex-row mt-5 gap-10 ml-5">
              <div className="item-price mt-4">${item.content.price}</div>
              <button className="buy-button bg-red-400 p-3 rounded-3xl">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HomePage;

