import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component{
    state = {
        hidden: false,
    }

    componentWillMount() {
        if (!localStorage.getItem("accessToken")) {
          this.setState({ hidden: true });
        }
      }

    render(){
        return(
            <b><header>
                    <h2>SEND-IT</h2>
                <div>
                    <ul>
                    
                    <li>{this.state.hidden && (
                    <Link to="/signup">Register</Link>)}</li>
                    <li>{this.state.hidden && (
                    <Link to="/login">Login</Link>)}</li>
                    <li>{!this.state.hidden && (
                    <Link to="/parcels">Dashboard</Link>)}</li>
                    <li>{!this.state.hidden && (
                    <Link to="/order">Send A Parcel</Link>)}</li>
                    <li>{!this.state.hidden && (
                    <Link to="/logout">Logout</Link>)}</li>
                    </ul>
                </div>
                </header></b>
        );
    }
    };

export default Header;
