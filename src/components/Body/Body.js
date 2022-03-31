import React from "react";
import {ReactComponent as UpdateSvg} from '../../images/update.svg'
import { BiRightArrowAlt } from "react-icons/bi";
import {Card,Button} from 'react-bootstrap'

export default function Body() {
  return (
    <div className="skills" id="skills">
      <section data-aos="fade-right" className="skills__section">
              <div>
                <h2>
                  I enjoy creating delightful,responsive websites for
                  human-centered experiences.
                </h2>
                <p>Think.Make.Solve.</p>
                <Button
                variant="contained"
                href="https://docs.google.com/document/d/1hT8yXCt1Z8PzEoQlpqbOeXba74i0_6yjDOutH7EIP48/edit?usp=sharing"
              target="_blank">
                contact me <BiRightArrowAlt />
              </Button>
              </div>
            <div>
              <UpdateSvg className="img"/>
            </div>
            </section>
      <section data-aos="fade-left" className="skills__section__2">
        <Card style={{ width: '18rem' }}>
  <Card.Img className="skills-img" variant="top" src="https://reactjs.org/logo-og.png" alt="Frontend Development" />
  <Card.Body>
    <Card.Title>Frontend Development</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img className="skills-img" variant="top" src="https://www.wiseo.be/sites/default/files/Knowledge-base-part-3_technical-SEO.png" alt="Technical SEO"/>
  <Card.Body>
    <Card.Title>Technical SEO</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img className="skills-img" variant="top" src="https://www.customerscope.nl/wp-content/uploads/2018/10/Digital-marketing-1080x675.jpg" alt="Digital marketing"/>
  <Card.Body>
    <Card.Title>Digital Marketing</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
    </section>
    </div>
  );
}
