import React from "react";
import hamb from './hamb3.png';
import hamb2 from './hamb2.png';
import hamb3 from './hamb.png';
import './style.css'; // Import your CSS file

const Food = () => {
  return (
    <div className="">
      <div className="image-container">
        <img className="image7" src={hamb3} alt="Burger Image" />
        <img className="image8" src={hamb2} alt="Tafb Image" />
      </div>
      <div className="stacked-images">
        <img className="image9" src={hamb} alt="Tortilla Image" />
      </div>
    </div>
  );
}

export default Food;
