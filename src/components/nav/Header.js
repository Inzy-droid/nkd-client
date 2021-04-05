import './header.css';

import { Link } from "react-router-dom";
import { Menu } from "antd";
import React from "react";

const { Item } = Menu;

const Header = () => {
 
  return (
      
      <Menu  style={{ backgroundColor:"#f2f3f4", justifyContent:"center", alignItems:"center" }} mode="horizontal" >

      <Item key="home">
        <Link to="/">Home</Link>
      </Item>

      <Item  key="about" >
        <Link to="/about">About</Link>
      </Item>

      <Item key="services">
        <Link to="/services">
          Services
        </Link>
      </Item>

     
        <Item key="projects">
          <Link to="/projects">Projects</Link>
        </Item>
      

     
        <Item key="contact">
          <Link to="/contact">Contact Us</Link>
        </Item>      
    </Menu>
    
    
  );
};


export default Header;
