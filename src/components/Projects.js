import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj1.png";
import projImg2 from "../assets/img/proj2.png";
import projImg3 from "../assets/img/proj3.png";
import projImg4 from "../assets/img/projImg4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import "./all.css";
import TrackVisibility from "react-on-screen";
import Resume from "./Resume";

export const Projects = () => {
  const projects = [
    {
      description: "Portfolio",
      imgUrl: projImg1,
      href: "https://github.com/tinkersain/MyPortfolio",
    },
    {
      description: "TO-DO App",
      imgUrl: projImg2,
      href: "https://github.com/tinkersain/myfirstreactproject",
    },
    {
      description: "Traffic Optimizer",
      imgUrl: projImg3,
      href: "https://github.com/tinkersain/VehicleDetection",
    },
    {
      description: "Railway Rakes Scheduler",
      imgUrl: projImg4,
      href: "https://github.com/Abhinav-2004/SIH-React-Railways",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I show you to all the big and small websites I have done so
                    far
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">PROJECTS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">RESUME</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">BIO</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <div className="project-flex">
                          {projects.map((project, index) => {
                            return (
                              <a href={project.href}>
                                <ProjectCard key={index} {...project} />
                              </a>
                            );
                          })}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="resume-container">
                          <Resume />
                        </div>
                      </Tab.Pane>
                      {/*<Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
