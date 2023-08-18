import React from "react";
import "./style.css";
import burger2 from './burger2.png'
import burger3 from './burger3.png'
import burger4 from './burger4.png'

const Category = () => {
  return (
    <div className="category-container">
      <h1 className="category-heading">
        Best <span className="category-span">delivered </span> delivered
        <br /> Categories
      </h1>
      <p className="category-paragraph">
        Here Are Some Of Our Best Distributed
        <br /> Categories. You Can Place Orders Here.
      </p>
      <div className="burgerimage">
        <div>
       <img src={burger2} alt="Burger"/> 
       <p>chicken fries</p> 
       order Now
       </div>
       <div>
       <img src={burger3} alt="Burger"/>
       <p>chicken fries</p>
       order Now 
       </div>
       <div>
       <img src={burger4} alt="Burger"/>
       <p>chicken fries</p> 
       order Now
       </div>
      </div>
    </div>
  );
};

export default Category;
