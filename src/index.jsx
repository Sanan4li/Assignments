import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Content from './Content';
import * as serviceWorker from './serviceWorker';
//import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
const Elements = <div>
                                    <Header />
                                    <Content />
                                    <Footer />
      </div>


ReactDOM.render(Elements , document.getElementById("root"));






serviceWorker.unregister();
