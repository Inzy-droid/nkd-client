import './nav.css';

import {
  closeMobileNavigation,
  openMobileNavigation,
} from "./NavigationActions";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  background-color: #111;

`;
// const PageWidth = styled.div`
//   width: 100%;
//   margin: 0 auto;
// `;


const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "Logo Links";

`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.7em 1.5em;
  text-transform: uppercase;
  color: red;
  transition: color 500ms, background-color 500ms;
  &:hover {
    background-color: whitesmoke;
    color: red;
  }
`;
const LinksContainer = styled.div`
  font-size: 0.6rem;
  align-self: center;
  justify-self: end;
  grid-area: Links;
  display: flex;
  justify-content: space-between;
  

  i {
    font-size: 2rem;
    display: none;
    color: red;
    padding: 1em 0;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    i {
      display: inline-block;
    }
    ${NavLink} {
      display: none;
    }
  }
`;

const Navbar = () => {
  
  const dispatch = useDispatch();
  const navShow = useSelector((s) => s.mobileNavigation);
  const { show } = navShow;

  const onNavClick = () => {
    if (!show) {
      dispatch(openMobileNavigation());
    } else {
      dispatch(closeMobileNavigation());
    }
  };
  return (
    <Nav>
      
        <Grid>
         <div className="contactnew">
           <i className='fas fa-phone-alt'></i>
           <p>02083556068</p>
         </div>
          <LinksContainer>
            <i className='fas fa-bars' onClick={onNavClick}></i>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact us</NavLink>
          </LinksContainer>
        </Grid>
      
    </Nav>
  );
};


export default Navbar;
