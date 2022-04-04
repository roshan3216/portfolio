import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MERN from "../../Assets/Projects/MERN App.png";
import Questionnaire from "../../Assets/Projects/Questionnaire.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MERN}
              isBlog={false}
              title="MERN Webapp"
              description="MERN based social media webapp recollecting the memories of the past events"
              link="https://github.com/roshan3216/MERN-Web-App"
              demo="https://reminiscing-memories.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Questionnaire}
              isBlog={false}
              title="Questionnaire Forum"
              description="An online question answer forum to help users interact with."
              link="https://github.com/roshan3216/QuestionnaireForum"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
