import React, { useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { Card, Carousel } from "react-bootstrap";
import { ProjectContents } from "../../constants";

export default function Project() {
  // Split ProjectContents into chunks of 4 for each slide
  const chunkedProjects = [];
  const chunkSize = 4;

  for (let i = 0; i < ProjectContents.length; i += chunkSize) {
    chunkedProjects.push(ProjectContents.slice(i, i + chunkSize));
  }

  // Track the hover state for each card by its id
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div id="project" className="project">
      <aside className="aside">
        <div className="aside__horizontal">
          <hr className="aside__horizontal__rule" />
          <p className="aside__horizontal__rule__ptag">Some of my projects</p>
        </div>
      </aside>

      {/* Carousel */}
      <Carousel
        nextIcon={
          <span
            className="carousel-control-next-icon"
            style={{ backgroundColor: "red", borderRadius: "50%" }}
          />
        }
        prevIcon={
          <span
            className="carousel-control-prev-icon"
            style={{ backgroundColor: "red", borderRadius: "50%" }}
          />
        }
      >
        {chunkedProjects.map((projectGroup, index) => (
          <Carousel.Item key={index}>
            <div className="project__grid">
              {projectGroup.map((item) => (
                <Card
                  className="project__grid__card"
                  key={item.id}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card.Img
                    className="project__grid__card__link"
                    variant="top"
                    src={`./images/${item.image}`}
                    alt={item.title}
                  />
                  {/* Front Side */}
                  <Card.Body
                    className="project__grid__card__link__parent"
                    style={{
                      display: hoveredCard === item.id ? "none" : "block",
                    }}
                  >
                    <Card.Title className="project__grid__card__link__parent__heading">
                      {item.title}
                    </Card.Title>
                    <Card.Text className="project__grid__card__link__parent__heading__review">
                      {item.description}
                    </Card.Text>
                    <Card.Text className="project__grid__card__link__parent__heading__review">
                      Technologies used: <b>{item.technology}</b>
                    </Card.Text>
                  </Card.Body>
                  {/* Back Side */}
                  <Card.Body
                    className="project__grid__card__link__parent"
                    style={{
                      display: hoveredCard === item.id ? "block" : "none",
                      backgroundColor: "fff",
                    }}
                  >
                    <Card.Text className="project__grid__card__link__parent__heading__review">
                     <b>Inspiration: </b> {item.inspiration}
                    </Card.Text>
                    <Card.Text className="project__grid__card__link__parent__heading__review">
                      <b>Challenges: </b>{item.challenges}
                    </Card.Text>
                  </Card.Body>
                  <div className="icongroup">
                    <a href={item.github} target="_blank" rel="noreferrer">
                      <AiOutlineGithub className="linkicons" />
                    </a>
                    <a href={item.demo} target="_blank" rel="noreferrer">
                      <BsEyeFill className="linkicons" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
