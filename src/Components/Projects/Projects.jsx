/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer} from './ProjectsStyle'
import ProjectsCart from './ProjectsCart';
import { projects } from '../../../public/data';
import { Link } from 'react-router-dom';


const Projects = ({openModal,setOpenModal}) => {
    // const [toggle, setToggle] = useState('all');
    return (
        <Container id="projects">
        <Wrapper>
          <Title>Projects</Title>
          <Desc>
            I have worked almost 10 projects.But this is my last 3 best projects and complete this projects I can gather some knowledge.But I know very little. I am still learning, so I am gaining by learning from mistakes.
          </Desc>
          {/* <ToggleButtonGroup >
            {toggle === 'all' ?
              <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
              :
              <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            }
            <Divider />
            {toggle === 'web app' ?
              <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APPS</ToggleButton>
              :
              <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APPS</ToggleButton>
            }
            <Divider />
            {toggle === 'android app' ?
              <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APPS</ToggleButton>
              :
              <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APPS</ToggleButton>
            }
            <Divider />
            {toggle === 'machine learning' ?
              <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
              :
              <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            }
          </ToggleButtonGroup> */}
          <CardContainer>
            { projects
              .map((project,i) => (
                <Link to={project.webapp}><ProjectsCart key={i} project={project} openModal={openModal} setOpenModal={setOpenModal}/></Link>
              ))}
              {/* toggle === 'all' && */}
            {/* {projects
              .filter((item) => item.category == toggle)
              .map((project) => (
                <ProjectsCart  project={project} openModal={openModal} setOpenModal={setOpenModal}/>
              ))} */}
          </CardContainer>
        </Wrapper>
      </Container>
    );
};

export default Projects;