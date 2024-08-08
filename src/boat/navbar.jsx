
import React from "react";
import './navbar.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './boatpics/logo.jpeg'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSearch } from "react-icons/fa";
import { GiHoodie } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import { GiArmoredPants } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { MdLiveHelp } from "react-icons/md";



export function HeaderBoat() {

    const navigate = useNavigate();

    const tws1 = () => {
        navigate('/');
    };
    const tws2 = () => {
        navigate('/');
    };
    const navContact = () => {
        navigate('/contact');
    };
    const navtrack = () => {
        navigate('/payment');
    };
    const navhoodie = () => {
        navigate('/hoodie');
    };
    const navtshirt = () => {
        navigate('/tshirt');
    };
    const navpant = () => {
        navigate('/track');
    };
    const navshoe = () => {
        navigate('/shoes');
    };
    const navhelp = () => {
        navigate('/contact');
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
      setIsOpen(!isOpen);
    };

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                crossorigin="anonymous" referrerpolicy="no-referrer" />

              
            <Navbar expand="xxxl" className="bg-body-tertiary">  
            <div className="header">
                <div className="nav-back">
        <div className="toggle-button">
          <button className="button" onClick={toggleDrawer}><i className="fa-solid openmenu fa-bars"></i></button>
        </div> 
                <nav data-aos="zoom-in">
                    <img src={Logo} className="logo" alt="" />
                
                    <ul id="sidemenu" data-aos="zoom-in">
                        <li onClick={tws1}><p>Home</p></li>
                        <li>
                             <NavDropdown title="Categories" className="dropdown" id="collapsible-nav-dropdown">
                       <NavDropdown.Item onClick={navhoodie}>Hoodie<GiHoodie className="navicon1"/></NavDropdown.Item>
                       <NavDropdown.Item onClick={navtshirt}>T-Shirt<FaTshirt className="navicon2"/> </NavDropdown.Item>
                      <NavDropdown.Item onClick={navpant}>TrackPant<GiArmoredPants className="navicon3"/></NavDropdown.Item>
                      <NavDropdown.Item onClick={navshoe}>Shoes  <GiRunningShoe className="navicon4"/></NavDropdown.Item>
                      <NavDropdown.Divider />
                       <NavDropdown.Item onClick={navhelp}> Any Help <MdLiveHelp className="navicon5" /></NavDropdown.Item>
                           </NavDropdown></li>


                        <li onClick={navContact}><p>Contact</p></li>
                        <li onClick={navtrack}><p>Track Your Order</p></li>
            
                    </ul>
                    <div className="nav-right">
                
            
                        <input type="search" className="nav-search" placeholder="search"/>
                        <FaSearch className="searchicons" />
                  
                       
                    </div>
                    
                </nav>
                </div>
            </div>


    
      <div className={`drawer ${isOpen ? 'open' : ''}`} id="navbarScroll">
        <Nav className="ul" navbarScroll>
          <Nav.Link className="li" onClick={tws1} ><p className="p">Home</p></Nav.Link>
          <Nav.Link className="li"><p className="p"><NavDropdown title="Categories">
                       <NavDropdown.Item onClick={navhoodie}>Hoodie</NavDropdown.Item>
                       <NavDropdown.Item onClick={navtshirt}>T-Shirt </NavDropdown.Item>
                      <NavDropdown.Item onClick={navpant}>TrackPant</NavDropdown.Item>
                      <NavDropdown.Item onClick={navshoe}>Shoes</NavDropdown.Item>
                      <NavDropdown.Divider />
                       <NavDropdown.Item onClick={navhelp}>Any Help ?</NavDropdown.Item>
                           </NavDropdown></p></Nav.Link>
          <Nav.Link className="li" onClick={navContact} ><p className="p">Contact</p></Nav.Link>
          <Nav.Link className="li" onClick={navtrack} ><p className="p">Track Your Order</p></Nav.Link>
        </Nav>
      </div>
    </Navbar>
        </>
    )
}