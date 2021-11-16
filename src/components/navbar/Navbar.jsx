import React, { useState } from "react";
import {
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import styled from "styled-components";
import { CgClose, CgMenuMotion } from "react-icons/cg";
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { FaMoon, FaSun } from "react-icons/fa";




import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = (props) => {
    const { toggleColorMode } = useColorMode();
    // const { logout, currentUser } = useAuth()
    const { logout, currentUser } = useAuth();
 

     const [navbar, setNavbar] = useState(false);

     const changeBackground = () => {
       if (window.scrollY >= 80) {
         setNavbar(true);
       } else {
         setNavbar(false);
       }
     };

     window.addEventListener("scroll", changeBackground);
  

        const [toggle, setToggle] = useState(false);
        const handleToggle = () => {
          setToggle(!toggle);
  };
  



  return (
    <Nav className={navbar ? "isActive" : ""}>
      <Logo>
        <Link to="/">
          Logo
        </Link>
      </Logo>
     
         {!currentUser && <SignedOut toggle={toggle} />}
      {currentUser && <SignedIn toggle={toggle} />}

      <IconButton
        variant="ghost"
        className='mode'
        icon={useColorModeValue(<FaSun />, <FaMoon />)}
        onClick={toggleColorMode}
        aria-label="toggle-dark-mode"
      />
     
     
      <Toggle onClick={handleToggle}>
        {toggle ? <CgClose /> : <CgMenuMotion />}
      </Toggle>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  padding: 3% 8%;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
 transition: .5s;
 z-index: 999;

  &.isActive {
    background: var(--Color-4);
    height: 10vh;
    box-shadow: 0 1px 2px 1px var(--Color-4);
  }

  .mode {
    margin-left: 30px;

    @media (max-width: 900px) {
      margin-left: auto;
      margin-right: 20px;
    }
  }
`;

const Logo = styled.h3`
img {
  width: 100px;
}
`;

const Toggle = styled.div`
  display: none;
  font-size: 30px;
  transition: all 2s;
  color: var(--Color-2);
  @media (max-width: 900px) {
    display: block;
    transition: all 2s;
  }
`;




export default Navbar
