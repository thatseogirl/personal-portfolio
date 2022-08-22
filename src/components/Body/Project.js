import React from "react";
import { BsEyeFill } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { Card } from "react-bootstrap";
import { ProjectContents } from "../../constants"

export default function Project() {
  return (
    <div id="project" className="project" data-aos="fade-right">
      <aside className="aside">
        <div className="aside__horizontal">
          <hr className="aside__horizontal__rule" />
          <p className="aside__horizontal__rule__ptag">Look at my projects</p>
        </div>
      </aside>

      <div className="project__grid" >
        {ProjectContents.map((item) => (
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
                Technologies used: <b> {item.technology} </b>
              </Card.Text>
              <div className="icongroup">
                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub className="linkicons" />
                </a>
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsEyeFill className="linkicons" />
                </a>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

    </div>
  );
}
