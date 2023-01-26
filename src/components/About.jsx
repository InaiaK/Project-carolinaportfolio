import React from "react";
import { Card } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import "./About.css";

// Functional component.
const About = () => {
  const aboutData = [
    {
      title: "ABOUT",
      description: (
        <p className="hide">
          Hello, My name is Carolina, I am a trustworthy professional looking
          for a Full Stack Developer role. I am studying towards an MBA with a
          concentration in IT with a 3.5 GPA. Well-qualified Full Stack
          Developer familiar with a wide range of programming utilities and
          languages. I speak native Portuguese, English, and Spanish. I am a
          problem solver and a resourceful person that can handle any part of
          the process with ease.
        </p>
      ),
    },

    {
      title: "SKILLS",
      description: (
        <ul className="hide">
          <li>HTML</li>
          <li>CSS</li>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>SQL</li>
        </ul>
      ),
    },

    {
      title: "RESUME",
      description: (
        <p className="hide">
          <FaSave></FaSave>
          <a
            href="https://docs.google.com/document/d/1nN7rFU0CmW95K7je-mpHx60O4YQalkgj/edit"
            className="resume"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </p>
      ),
    },
  ];

  const renderAbout = ({ title, description }, index) => {
    return (
      <Card key={`about-card-${index}`} className="about-box" bg="dark">
        <Card.Body className="card-body">
          {title}
          <Card.Text className="about-text">{description}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{aboutData.map(renderAbout)}</div>;
};

export default About;
