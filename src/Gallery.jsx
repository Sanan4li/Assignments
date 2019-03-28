import React ,  {Component} from "react";
import bootstrap from "./images/Bootstrap-Flat-Design-Website-Templates.jpg";
import image20 from "./images/image20.png";
import webdesign from "./images/web-design-portfolio.jpg";
import clientWork from "./images/client-work-NIH5.jpg";
import designBlog from "./images/design_blog_612.jpg";
import kong from "./images/kong_template__2x.jpg";
import "./Gallery.css";
class Gallery extends  Component{

    render(){
        
        return(
        <div>
                <div id="gallery">
        <div id="projects">
            <h1>Our Gallery</h1>
            <ul>
                <li><a href="#">Web Projects</a></li>
                <li><a href="#">Desktop Projects</a></li>
                <li><a href="#">Androd Applications</a></li>
                <li><a href="#">Database Projects</a></li>
            </ul>
        </div>


    </div>
    <div id="pics">
        <img src={bootstrap} width="180" height="180"/>
        <img src={image20} width="180" height="180"/>
        <img src={webdesign} width="180" height="180"/>
        <img src={clientWork} width="180" height="180"/>
        <img src={designBlog} width="180" height="180"/>
        <img src={kong} width="180" height="180"/>
    </div>

        </div>
        
        
        );
    }
    
}


export default Gallery;










