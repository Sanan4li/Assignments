import React , {Component} from "react";
import Services from "./Services";
import Gallery from "./Gallery";
import "./Content.css";

class Content extends Component {
    
    render(){        
        return(
        <div>
            
             <div class="clear"></div>

    <div id="content">

        <h1>Complete Web Solutions</h1>
        <p>Welcome to Complete Web Solutions</p>
        <p>A Place for All of Your Problems.</p>
        <a href="#" id="learn">Learn More</a>
    </div>


    <Services/>
   <Gallery/>



    <div class="clear"> </div>
    <div id="blog">
        <div id="sub">
            <h2>Subscribe to Our Blog</h2>
            <form action="#">
                <input type="text" placeholder="Enter Your Name" required="true"/><br/><br/>
                <input type="email" placeholder="Enter Your Email" required="true"/><br/><br/>
                <input type="submit" value="Subscribe"/>
            </form>
        </div>
        <div id="post">

        </div>
    </div>

            
            
            
        </div>
        
        
        );
        
        
    }
    
    
    
}




export default Content;





