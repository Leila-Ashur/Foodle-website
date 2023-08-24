import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
 
import './style.css'; 


const Home = [
  {
    name: "Chicken Burger",
    image: "/Image/Burgervege.png",
    rating: 4.5,
    price: 3.5,
  },
  {
    name: "Chicken Pizza",
    image: "Image/pizza.png",
    rating: 4.5,
    price: 4.20,
  },
  {
    name: "Chicken fry",
    image: "/Image/chicken.png",
    rating: 4.5,
    price: 5.00,
  },
  {
    name: "Grill Sandwich",
    image: "/Image/shawarma.png",
    rating: 4.5,
    price: 4.80,
  },
  {
    name: "Taco Traifi",
    image: "/Image/pizab.png",
    rating: 4.5,
    price: 3.63,
  },
  {
    name: "Noddle's Ramen",
    image: "/Image/york.png",
    rating: 4.5,
    price: 6.50,
  },
];





const HomePage = () => {
  return (
    <div className="home-container">
      {Home.map((item, index) => (
        <div className="item-container" key={index}>
          <img
            src={item.image}
            alt={item.name}
            className="item-image"
          />
          <div className="item-details">
            <div className="item-name">{item.name}</div>
            <div className="item-rating">
              {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
                <FontAwesomeIcon icon={faStar} key={i} className="star-icon" />
              ))}
              {` ${item.rating}`}
            </div>
            <div className="item-price">
              ${item.price}
              <button className="buy-button">
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



