import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component{
    render(){

        return(
            <b><header>
                    <h2>SEND-IT</h2>
                <div>
                    <ul>
                    <li><Link to="/signup">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                </div>
                </header></b>
        );
    }
    };

export default Header;
