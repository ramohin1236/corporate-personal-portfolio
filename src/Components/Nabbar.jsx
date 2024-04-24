import { FaBars } from 'react-icons/fa';
import React from "react";
import {  NavLink, ButtonContainer, GitHubButton, MobileIcon, NavItems, NavbarContainer, Logo, Span, Nav, MobileMenu, MobileLink } from "./Hero/NavStyle";
import { DiCssdeck } from 'react-icons/di';
import { Bio } from './../../public/data';
import { useTheme } from 'styled-components';


const Nabbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    // const [go, setGo]=React.useState("https://github.com/ramohin1236")
   
    const theme = useTheme()
    return (
        <Nav>
           <NavbarContainer>
            <Logo to='/'>
            <a style={{ display: "flex", alignItems: "center", marginBottom: '20;', cursor: 'pointer' }}>
             <DiCssdeck size="3rem" >
                </DiCssdeck> <Span>Portfolio</Span>
          </a>
            </Logo>
               <MobileIcon></MobileIcon>
               <FaBars  style={{ color: 'white'}} onClick={() => {
            setIsOpen(!isOpen)
          }} />
               <NavItems >
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
               <ButtonContainer>
                 <button style={{padding: "20px",borderRadius: "20px" }}><a   style={{textDecoration: 'none',color: "black", fontWeight: 800, fontSize: "14px"}}href="https://github.com/ramohin1236">Git-hub</a></button>
               </ButtonContainer>
               {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
            </NavbarContainer>
        </Nav>
    );
};

export default Nabbar;