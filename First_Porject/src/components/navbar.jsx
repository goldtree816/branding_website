import "../styles/navbar.css";

import { useState } from "react";

import { Link, NavLink } from 'react-router-dom'

function Navbar(){

    const [menu, setMenu] = useState(false);

    return(

        <header>

            <nav>

                <div className="logo">
                    <h1><Link to="/">JAKS DIGITAL</Link></h1>
                </div>

                <ul className={`nav-links ${menu ? "active":""}`}>

                    <li><NavLink className={(e)=>{return e.isActive?"red": ""}} to="/services">SERVICES</NavLink></li>
                    <li><NavLink className={(e)=>{return e.isActive?"red": ""}} to="/portfolio">PORTFOLIO</NavLink></li>
                    <li><NavLink className={(e)=>{return e.isActive?"red": ""}} to="/about">ABOUT</NavLink></li>
                    <li><NavLink className={(e)=>{return e.isActive?"red": ""}} to="/process">PROCESS</NavLink></li>
                    <li><NavLink className={(e)=>{return e.isActive?"red": ""}} to="/contact">CONTACT</NavLink></li>

                    <button className="inquire">
                        INQUIRE
                    </button>

                </ul>

                <div 
                    className="hamburger"
                    onClick={()=>setMenu(!menu)}
                >
                    ☰
                </div>

            </nav>

        </header>

    )

}

export default Navbar;