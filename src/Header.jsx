import React, { Component } from 'react';
import './Header.css';
import logo from './site-logo.png';
//const logo = require('./site-logo.png');

class Header extends Component {
  render(){
    return (
    
      <div id="header">
        <div id="logo">
            <img src={logo}/>
        </div>
        <div id="menu">
            <ul>
                <li><a href="#">Home</a> </li>
                <li><a href="#">Services</a> </li>
                <li><a href="#">Products</a> </li>
                <li><a href="#">About Us</a> </li>
                <li><a href="#">Contact Us</a> </li>
            </ul>

        </div>

    </div>
     
    );
  }
}

export default Header;
