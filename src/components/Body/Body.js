import React from "react";
import { Card } from "react-bootstrap";
import { cardContents } from "../../constants"

export default function Body() {
  return (
    <div data-aos="fade-right" className="skills" id="skills">
      <section className="skills__section__1">
        <div className="skills__section__1__layout">
          <aside className="skills__section__1__layout__wrapper">
            <hr className="skills__section__1__layout__wrapper__line" />
            <p className="skills__section__1__layout__wrapper__line__text">
             my stack
            </p>
          </aside>
        </div>
      </section>
    
      <section  className='card__section'>
        {cardContents.map((item) => (
          <Card className='card__section__cardwrapper' key={item.id}>
            <Card.Img
                    className="card__section__cardwrapper__link"
                    variant="top"
                    src={`./images/${item.image}`}
                    alt={item.title}
                  />
          </Card>
        ))}
      </section>
    </div>
  );

}
