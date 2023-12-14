
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from './utils/theme';
import Nabbar from "./Components/Nabbar";
import Hero from "./Components/Hero/Indexx";
import Education from "./Components/Education/Education";
import { BrowserRouter as Router } from 'react-router-dom';
import { Skill } from "./Components/Skills/SkillStyle";
import MySkills from "./Components/Skills/MySkills";


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
  linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {


  return (
    <ThemeProvider theme={darkTheme}>
        <Router>
     
        <Nabbar/>
     <Body>
        <Hero/>
        <Wrapper>
        <MySkills/>
         <Education/>
        </Wrapper>
     </Body>
        </Router>
    
    </ThemeProvider>
  )
}

export default App
