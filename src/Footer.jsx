import React , {Component} from "react";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import googleplus from "./images/googleplus.png";
import pinterst from "./images/pinterst.png";
import skype from "./images/skype.png";
import instragram from "./images/instragram.png";
import location2 from "./images/location2.png";
import phone from "./images/phone.png";
import whatsapp from "./images/whatsapp.png";
import email1 from "./images/email1.png";
import logo from "./images/site-logo.png";
import "./Footer.css";
class Footer extends Component{
  
    

    
    render(){
        return(
            
            
        
            
            
    
    <div id="footer">
        <div class="section" id="logoSection">
            <img src={logo} width="300" height="150"/><br/>
            <div class="clear"></div>
        
                
                                
     
        <div id="footerMenu">
            
            <ul>
                <li><a href="#">Web Projects</a></li>
                <li><a href="#">Desktop Projects</a></li>
                <li><a href="#">Androd Applications</a></li>
                <li><a href="#">Database Projects</a></li>
            </ul>
        </div>

                
                
                
                
            <h3>Complete Web Solutions 2017 &copy; reserved</h3>
        </div>
        <div class="section">
            <h1>About Us</h1>
            <p id="about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ex quam provident magni officiis consectetur esse ipsam maxime nemo sequi quis soluta nisi, voluptas iste reiciendis, dignissimos at? Iste, nulla.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, eveniet voluptatum corporis cupiditate laboriosam non. 
            </p>
        </div>
        <div class="section">
            <h1>Contact Us</h1>
            <img src={location2} width="40" height="40"/>
            <p> 346-B Ferozepur Rd, Lahore.</p>
            <img src={phone} width="40" height="40"/>
            <p> +053-7576-460</p>
            <img src={whatsapp} width="50" height="40"/>
            <p> +92346-4674965</p>
            <img src={email1} width="40" height="40"/>
            <p> CompleteSolutions@gmail.com</p>
            <div class="clear"></div>
            <img src={facebook} width="50" height="50" class="social"/>
            <img src={twitter} width="50" height="50" class="social"/>
            <img src={googleplus} width="40" height="40"  class="social"/>
            <img src={pinterst} width="40" height="40" class="social"/>
            <img src={skype} width="40" height="40"  class="social"/>
            <img src={instragram} width="50" height="50" class="social"/>
        </div>


    </div>
        );
    }
    
    
    
}

export default Footer;















