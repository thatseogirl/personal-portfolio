import React from "react";
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

  return (
    <div id="project" className="project" >
      <aside className="aside">
        <div className="aside__horizontal">
          <hr className="aside__horizontal__rule" />
          <p className="aside__horizontal__rule__ptag">some of my projects</p>
        </div>
      </aside>

      {/* Carousel */}
      <Carousel
      // data-aos="fade-right"
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
                <Card className="project__grid__card" key={item.id}>
                  <Card.Img
                    className="project__grid__card__link"
                    variant="top"
                    src={`./images/${item.image}`}
                    alt={item.title}
                  />
                  <Card.Body className="project__grid__card__link__parent">
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
