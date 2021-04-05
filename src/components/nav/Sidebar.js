import React, { useEffect, useRef, useState } from "react";
import {
  closeMobileNavigation,
  openMobileNavigation,
} from "./NavigationActions";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { config } from "./config";
import gsap from "gsap";
import styled from "styled-components";

const SidebarContainer = styled.div`
  padding: 20px;
  position: fixed;
  top: 0;
  right: -250px;
  width: 250px;
  height: 100vh;
  z-index:1000;
  background-color: red;
  transition: right 300ms;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2em;
  grid-auto-rows: minmax(min-content, max-content);
  grid-template-areas:
    "Exit"
    "Links";
`;

const Exit = styled.div`
  grid-area: Exit;
  justify-self: end;
  i {
    font-size: 2.5rem;
    cursor: pointer;
    color: ${config.colors.light};
  }
`;
const LinksContainer = styled.div`
  grid-area: Links;
  font-size: 0.6rem;
  align-self: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  padding: 0.7em 1.5em;
  text-transform: uppercase;
  color: white;
  display: block; 
  
   transition: background-color 500ms;
  &:hover {
    background-color: #111;
  }
  
`;
const Sidebar = () => {
  let nav = useRef(null);
  const navShow = useSelector((s) => s.mobileNavigation);
  const { show } = navShow;

  const tl = gsap;
  useEffect(() => {
    if (show) {
      tl.to(nav, { x: -250, duration: 0.7, ease: "none" });
    } else {
      tl.to(nav, { x: 250, duration: 0.7, ease: "none" });
    }
  }, [tl, navShow, show]);
  const [showSidebar, setShowSidebar] = useState(false);
  const dispatch = useDispatch();

  const onNavClick = () => {
    dispatch(closeMobileNavigation());

    setShowSidebar(!showSidebar);
    console.log(showSidebar);
  };

  return (
    <div>
      <SidebarContainer ref={(el) => (nav = el)}>
        <Exit onClick={onNavClick}>
          <i className='fas fa-times-circle'></i>
        </Exit>
        <LinksContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </LinksContainer>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
