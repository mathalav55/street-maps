import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo-1.png';
const Navbar=()=>{
    return(
        <div className="nav-bar grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo"><img src={logo}/></Link>
            </div>
        </div>
    );
}
export default Navbar;