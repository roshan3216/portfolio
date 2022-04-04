import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Roshan Kumar</span>
            from   <span className="purple">  Kharagpur, India.</span>
            <br />I am a pre-final year student pursuing Aerospace Engineering from IIT Kharagpur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "First Deseve then Desire!"{" "}
          </p>
          <footer className="blockquote-footer">Roshan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
