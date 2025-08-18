import React, { useState } from "react";
import './App.css';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';


//Code For The Navbar At The Top Of The Website
const Navbar = () => {

    return (
        <nav>

            <div className="navbar">

                {/* The Individual Buttons On The Navbar That Route To Different Pages */}
                <div className="navbar-element">

                    <a className="navbar-text">
                        <Link  to={'/'} style={{ textDecoration: 'none' }}>
                            <Button sx={{color: "white", fontSize: '1.5rem', "&:hover":{color: "lightgray"}}}>About Me</Button>
                        </Link>                    
                    </a>

                    <a className="navbar-text">
                        <Link  to={'/projects'} style={{ textDecoration: 'none' }}>
                            <Button sx={{color: "white", fontSize: '1.5rem', "&:hover":{color: "lightgray"}}}>My Projects</Button>
                        </Link>          
                    </a>

                    <a className="navbar-text">
                        <Link  to={'/contact'} style={{ textDecoration: 'none' }}>
                            <Button sx={{color: "white", fontSize: '1.5rem', "&:hover":{color: "lightgray"} }}>Contact Me</Button>
                        </Link>          
                    </a>
                     
                </div>

            </div>
        </nav>
    );
}

export default Navbar;