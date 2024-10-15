import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pokeball from "../../Assets/Projects/pokeball.png";
import cart from "../../Assets/Projects/shopping.jpg";
import library from "../../Assets/Projects/lib.jpeg"
import linkdin from "../../Assets/Projects/linkdin.avif"
import dsc from "../../Assets/Projects/dsc.png";

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
              imgPath={library}
              isBlog={false}
              title="Library Management System"
              description="A full stack web application that allows users to register, read, edit, and delete books. Built with PHP, MySQL, Bootstrap, and jQuery."
              ghLink="https://github.com/zakie2003/Library-Management"
              demoLink="http://iips-library.great-site.net/LibraryManagement/?i=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dsc}
              isBlog={false}
              title="DSC Website"
              description="Contributor of the website.Made with React JS and Firebase."
              ghLink="https://github.com/zakie2003/dsc-site"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkdin}
              isBlog={false}
              title="Social Media App"
              description="A full stack web application that allows users to register, read, edit, and delete posts. Built with React, Node, Firebase, and Bootstrap."
              // ghLink="https://github.com/zakie2003/Node"
              demoLink="https://willowy-dusk-5e7e69.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokeball}
              isBlog={false}
              title="PokeDex App"
              description="Pokedex App made by using React JS Application"
              ghLink="https://github.com/zakie2003/pokeapp"
              demoLink="https://splendid-salamander-911660.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cart}
              isBlog={false}
              title="Mini Ecommerce App"
              description="A Ecommerce App clone. I have used Express.js and MYSQL database. I have used Bootstrap for styling. The app is fully responsive."
              ghLink="https://github.com/zakie2003/Node"
              demoLink="https://shoppingcart-ionwpe2b.b4a.run"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
