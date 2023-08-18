import React from "react";
import './style.css'
import { FaInstagram, FaPinterest, FaFacebook, FaTwitter } from 'react-icons/fa';



const Footer = () =>{
    return(
        <>
     

        <footer>

            <div class="footer">

        <div class="footer7">
          
        <h3>Fooodish</h3>
          <p>continue food 2023 All right served </p>

          <h3>Follow us on</h3>

          


    <div className="icon">
      <FaInstagram className="social-icon" />
      <FaPinterest className="social-icon" />
      <FaFacebook className="social-icon" />
      <FaTwitter className="social-icon" />
    </div>
  

        </div>

        <div class="Menu">
            <h3>Home</h3>
            <p>Offer</p>
            <p>Service</p>
            <p>About Us</p>
        </div>


        

        <div class="footer1">
            <h3>Menu</h3>
            <p>Quality</p>
            <p>Make achoice</p>
            <p>Salada with vegetable </p>
            <p>Fast food delivery</p>
            <p>Subscribe</p>
            {}
        </div>
    
           
        <div class="footer1">
            <h3>Contact Us:</h3>
            <p>Explore</p>
            <p>tel: +2540726794700</p>
            <p>Info @foodish.com</p>
            <p>1245, New York USA</p>
            
        </div>

       
        </div>
       
    </footer>    


        </>

    );
}

export default Footer;


