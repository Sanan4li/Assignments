import React , {Component} from "react";
import secure from "./images/secure-new.png";
import php from "./images/php.png";
import Swagger from "./images/Swagger-Logo.png";
import wordpress from "./images/wordpress-logo.png";
import "./Services.css";

class Services extends  Component{
    
    
    
    
    
    render(){
        
        return(
         <div id="services">
        <div id="wordpress" class="service">
            <img src={secure} width="150" height="150" alt="Wordpress" id="img"/>
            <h2>Web Sucurity</h2>
            <p>We provide sucurity to websites and Networks with the latest Technology. We have best Ethical Hackers and Security Experts in our team.</p>
            <a href="#" class="learn">Learn More</a>
        </div>

        <div id="wordpress" class="service">
            <img src={php} width="150" height="150" alt="Wordpress" id="img"/>
            <h2>PHP and MYSQL</h2>
            <p>We Develop Complete Websites with PHP and MySQL database. You can ask for Content Management System in PHP.</p>
            <a href="#" class="learn">Learn More</a>
        </div>

        <div id="wordpress" class="service">
            <img src={Swagger} width="150" height="150" alt="Wordpress" id="img"/>
            <h2>Desktop Apps</h2>
            <p>We Develop Desktop Applications for business corporations. Our applications are running in many business companies.</p>
            <a href="#" class="learn">Learn More</a>
        </div>

        <div id="wordpress" class="service">
            <img src={wordpress} width="150" height="150" alt="Wordpress" id="img"/>
            <h2>Wordpress Development</h2>
            <p>We Develop Complete Content Management System with the latest Technology. Wordpress is a great platform.</p>
            <a href="#" class="learn">Learn More</a>
        </div>




    </div>
        
        
        
        );
    }
    
    
    
    
}

export default Services;











