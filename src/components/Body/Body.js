import React from "react";
import { ReactComponent as UpdateSvg } from "../../images/update.svg";
import { BiRightArrowAlt } from "react-icons/bi";
import { Card, Button } from "react-bootstrap";
import { cardContents } from "../../constants"

export default function Body() {
  return (
    <div data-aos='fade-right' className='skills' id='skills'>
      <section className='skills__section__1'>
        <div className='skills__section__1__layout'>
          <aside className='skills__section__1__layout__wrapper'>
            <hr className='skills__section__1__layout__wrapper__line' />
            <p className='skills__section__1__layout__wrapper__line__text'>
              What I do
            </p>
          </aside>
          <div className='skills__section__1__layout__wrapper__line__text__sub'>
            <h3 className='skills__section__1__layout__wrapper__line__text__sub__heading'>
              I enjoy creating delightful,responsive websites for human-centered
              experiences.
            </h3>
            <div className='skills__section__1__layout__wrapper__line__text__sub__heading__calltoaction'>
              <p>Think.</p>
              <p>Make.</p>
              <p>Solve.</p>
            </div>
          </div>
          <Button
            className='skills__section__1__layout__wrapper__line__text__sub__heading__calltoaction__button'
            href='https://docs.google.com/document/d/1hT8yXCt1Z8PzEoQlpqbOeXba74i0_6yjDOutH7EIP48/edit?usp=sharing'
            target='_blank'
          >
            contact me <BiRightArrowAlt />
          </Button>
        </div>
        <div>
          <UpdateSvg className='img' />
        </div>
      </section>


      <section data-aos='fade-left' className='card__section'>
        {cardContents.map((item) => (
          <Card className='card__section__cardwrapper' key={item.id}>
            <Card.Body className='card__section__cardwrapper__image__body'>
              <Card.Title className='card__section__cardwrapper__image__body__title'>
                {item.title}
              </Card.Title>
              <Card.Text className='card__section__cardwrapper__image__body__title__description'>
                {item.description} <b> {item.technology} </b>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </section>

    </div>
  );
}
