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
            src="https://images.unsplash.com/photo-1593720216276-0caa6452e004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnJvbnRlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Frontend Development"
          />
          <Card.Body className="card__section__cardwrapper__image__body">
            <Card.Title className="card__section__cardwrapper__image__body__title">
              Frontend Development
            </Card.Title>
            <Card.Text className="card__section__cardwrapper__image__body__title__description">
              A Frontend developer who specializes in creating user friendly
              website and responsive website, Technologies I can use Bootstrap,
              CSS, HTML, Javascript, Material UI, React/Redux, SCSS, and
              Typescript.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card__section__cardwrapper">
          <Card.Img
            className="card__section__cardwrapper__image"
            variant="top"
            src="https://images.unsplash.com/photo-1616469829718-0faf16324280?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2VvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800"
            alt="Technical SEO"
          />
          <Card.Body className="card__section__cardwrapper__image__body">
            <Card.Title className="card__section__cardwrapper__image__body__title">
              Technical SEO
            </Card.Title>
            <Card.Text className="card__section__cardwrapper__image__body__title__description">
              As a technical SEO Analyst, I modify, test and analyze web pages
              for search engine optimization. Technologies I can use are Yoast SEO
              and Google Analytics.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card__section__cardwrapper">
          <Card.Img
            className="card__section__cardwrapper__image"
            variant="top"
            src="https://images.unsplash.com/photo-1607703703520-bb638e84caf2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800"
            alt="Digital marketing"
          />
          <Card.Body className="card__section__cardwrapper__image__body">
            <Card.Title className="card__section__cardwrapper__image__body__title">
              Digital Content Marketing
            </Card.Title>
            <Card.Text className="card__section__cardwrapper__image__body__title__description">
              I create great contents to impact target audience
              positively while generating leads and acquiring customers.
              Technologies I can use are Canva, Msoffice, Adobe Photoshop, Trello and
              Adobe Illustrator.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
}
