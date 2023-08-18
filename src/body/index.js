import React from "react";
import './style.css';
import Burger1 from './Burger1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faQuestionCircle, faClock, faTruck, faLeaf,} from "@fortawesome/free-solid-svg-icons"; 




const Home = () => {
    return (
       
        <div className="containerr">
            <div className="container">
            <div className="text-content">
                <h2>All Fast Food is <br/> Available at Foodle</h2>
                <p>We Are Just A Click Away <br/> When You Crave For Delicious Food</p>
                <button className="buy-button">   <FontAwesomeIcon icon={faShoppingBag} />   Buy Now</button>
                <button className="how-to-order-button">   <FontAwesomeIcon icon={faQuestionCircle} />   How To Order</button>
            </div>
            <div className="image">
                <img src={Burger1} alt="Burger" />
            </div>
            </div>
        
        <div className=" Detail">
        <div>
            <h2 >  <FontAwesomeIcon icon={faClock} className="icon-background" />Fast Deliver</h2>
            <p> The Food will be delivered to <br/> your home within :2 hours of  <br/>  your ordering</p>

        </div>
        <div>

        <h2>    <FontAwesomeIcon icon={faLeaf} className="icon-background"/>Fresh Food</h2>
        <p>Your Food will be delivered  <br/> 100% fresh to your home We  <br/> do not deliver Store food</p>
     

        </div>
        <div>

        <h2>  <FontAwesomeIcon icon={faTruck} className="icon-background"/> Free Delivery</h2>
            <p>Your food delivery is <br/> absolutely free No Cost <br/> Just Order And Enjoy</p>
        </div>
        </div>
        </div>

       
    );
}

export default Home;
