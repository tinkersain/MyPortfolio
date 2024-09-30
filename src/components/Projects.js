import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj1.png";
import projImg2 from "../assets/img/proj2.png";
import projImg3 from "../assets/img/proj3.png";
import projImg4 from "../assets/img/projImg4.png";
import relianceDigital from "../assets/img/relianceDigital.png";
import adminPanel from "../assets/img/Projectimg.png";
import bookWorm from "../assets/img/bookWorm.png";
import Python from "../assets/img/python.png";
import SIH from "../assets/img/sih.jpg";
import Trident from "../assets/img/trident.png";
import TEDX from "../assets/img/tedx.png";
import InnovateOdisha from "../assets/img/InnovateOdisha.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import "./all.css";
import TrackVisibility from "react-on-screen";
import Resume from "./Resume";

export const Projects = () => {
  const projects = [
    {
      description: "TutorGenie Admin",
      imgUrl: adminPanel,
      href: "https://github.com/tinkersain/GenAI-Admin.git",
    },
    {
      description: "BookWorm",
      imgUrl: bookWorm,
      href: "https://github.com/tinkersain/BookWorm.git",
    },
    {
      description: "Reliance Digital Clone",
      imgUrl: relianceDigital,
      href: "https://github.com/tinkersain/reliance-digital.git",
    },
    {
      description: "Portfolio",
      imgUrl: projImg1,
      href: "https://github.com/tinkersain/MyPortfolio",
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
    {
      description: "TO-DO App",
      imgUrl: projImg2,
      href: "https://github.com/tinkersain/myfirstreactproject",
    },
  ];
  const certificates = [
    {
      description: "Python Internship",
      imgUrl: Python,
    },
    {
      description: "SIH Internal Hackathon Winner",
      imgUrl: SIH,
    },
    {
      description: "Trithon Hackathon 1st Runners up",
      imgUrl: Trident,
    },
    {
      description: "TEDXSITB participation",
      imgUrl: TEDX,
    },
    {
      description: "Innovate Odisha Winner",
      imgUrl: InnovateOdisha,
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
                        <Nav.Link eventKey="third">CERTIFICATES</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <div className="main-project-flex">
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
                      <Tab.Pane eventKey="third">
                        <div className="project-flex">
                          {certificates.map((project, index) => {
                            return (
                              <a href={project.href}>
                                <ProjectCard key={index} {...project} />
                              </a>
                            );
                          })}
                        </div>
                      </Tab.Pane>
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
