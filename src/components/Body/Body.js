import React from "react";
import { ReactComponent as UpdateSvg } from "../../images/update.svg";
import { BiRightArrowAlt } from "react-icons/bi";
import { Card, Button } from "react-bootstrap";

export default function Body() {
  return (
    <div data-aos="fade-right" className="skills" id="skills">
      <section className="skills__section__1">
        <div className="skills__section__1__layout">
          <aside className="skills__section__1__layout__wrapper">
            <hr className="skills__section__1__layout__wrapper__line" />
            <p className="skills__section__1__layout__wrapper__line__text">
              What I do
            </p>
          </aside>
          <div className="skills__section__1__layout__wrapper__line__text__sub">
            <h3 className="skills__section__1__layout__wrapper__line__text__sub__heading">
              I enjoy creating delightful,responsive websites for human-centered
              experiences.
            </h3>
            <div className="skills__section__1__layout__wrapper__line__text__sub__heading__calltoaction">
              <p>Think.</p>
              <p>Make.</p>
              <p>Solve.</p>
            </div>
          </div>
          <Button
            className="skills__section__1__layout__wrapper__line__text__sub__heading__calltoaction__button"
            href="https://docs.google.com/document/d/1hT8yXCt1Z8PzEoQlpqbOeXba74i0_6yjDOutH7EIP48/edit?usp=sharing"
            target="_blank"
          >
            contact me <BiRightArrowAlt />
          </Button>
        </div>
        <div>
          <UpdateSvg className="img" />
        </div>
      </section>

      <section data-aos="fade-left" className="card__section">
        <Card className="card__section__cardwrapper">
          <Card.Img
            className="card__section__cardwrapper__image"
            variant="top"
            src="https://reactjs.org/logo-og.png"
            alt="Frontend Development"
          />
          <Card.Body className="card__section__cardwrapper__image__body">
            <Card.Title className="card__section__cardwrapper__image__body__title">
              Frontend Development
            </Card.Title>
            <Card.Text className="card__section__cardwrapper__image__body__title__description">
              A frontend developer who specializes create user friendly websites
              and responsive websites with bootstrap, CSS, HTML,
              Javascript,Material UI, React/Redux and Typescript
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card__section__cardwrapper">
          <Card.Img
            className="card__section__cardwrapper__image"
            variant="top"
            src="https://www.wiseo.be/sites/default/files/Knowledge-base-part-3_technical-SEO.png"
            alt="Technical SEO"
          />
          <Card.Body className="card__section__cardwrapper__image__body">
            <Card.Title className="card__section__cardwrapper__image__body__title">
              Technical SEO
            </Card.Title>
            <Card.Text className="card__section__cardwrapper__image__body__title__description">
              As a technical SEO Analyst, I modify, test and analyze web pages
              for search engine optimization.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card__section__cardwrapper">
          <Card.Img
            className="card__section__cardwrapper__image"
            variant="top"
            src="https://www.customerscope.nl/wp-content/uploads/2018/10/Digital-marketing-1080x675.jpg"
            alt="Digital marketing"
          />
          <Card.Body className="card__section__cardwrapper__image__body">
            <Card.Title className="card__section__cardwrapper__image__body__title">
              Digital Content Marketing
            </Card.Title>
            <Card.Text className="card__section__cardwrapper__image__body__title__description">
              I create a great contents to impact an the target audience
              positively while generating leads and acquiring customers.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
}
