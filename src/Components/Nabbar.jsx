
import {  NavLink, ButtonContainer, GitHubButton, MobileIcon, NavItems, NavbarContainer, Logo, Span } from "./Hero/NavStyle";
import { DiCssdeck } from 'react-icons/di';


const Nabbar = () => {
   
    return (
        <nav>
           <NavbarContainer>
            <Logo to='/'>
            <a style={{ display: "flex", alignItems: "center", marginBottom: '20;', cursor: 'pointer' }}>
             <DiCssdeck size="3rem" >
                </DiCssdeck> <Span>Portfolio</Span>
          </a>
            </Logo>
               <MobileIcon></MobileIcon>
               <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
               <ButtonContainer>
                  <GitHubButton>Git-hub</GitHubButton>
               </ButtonContainer>
            <p>Navbar</p>
            </NavbarContainer>
        </nav>
    );
};

export default Nabbar;