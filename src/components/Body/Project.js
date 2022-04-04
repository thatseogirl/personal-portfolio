import React from "react";
import ecommerce from "../../images/ecommerce.png";
import calculator from "../../images/calculator.png";
import form from "../../images/form.png";
import fylo from "../../images/fylo.png";
import tip from "../../images/tip.png";
import restapi from "../../images/restapi.png";
import { Card } from "react-bootstrap";
import Button from "@mui/material/Button";
import { BiRightArrowAlt } from "react-icons/bi";

export default function Project() {
  return (
    <div id="project"  data-aos="fade-right">
      <p>Portfolio</p>
      <div className="project__grid">
        <Card className="project__grid__card"  id="card1">
          <a
            href="https://tobi-e-commerce.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Card.Img
              className="project-img"
              variant="top"
              src={ecommerce}
              alt="E commerce Landing page"
            />
          </a>
          <Card.Body>
            <Card.Title>E commerce Landing page</Card.Title>
            <Card.Text>
              This project was built with React and bootstrap.It is a landing
              page for an E-commerce website. It allows users to increase and
              decrease items, and add them to cart.User can view the optimal
              layout for the site depending on their device's screen size.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="project__grid__card" id="card2">
          <a
            href="https://redux-calculator-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Card.Img
              className="project-img"
              variant="top"
              src={calculator}
              alt="Calculator APP"
            />
          </a>
          <Card.Body>
            <Card.Title>Calculator App</Card.Title>
            <Card.Text>
              This project was built with React,Redux,CSS and Jest.A calculator
              app that allows user to sum up values, subtract,multiply and
              divide. It also allows users to switch themes.User can view the
              optimal layout for the site depending on their device's screen
              size.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="project__grid__card" id="card3">
          <a
            href="https://tobi-registration-form.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Card.Img
              className="project-img"
              variant="top"
              src={form}
              alt="Registration Form"
            />
          </a>
          <Card.Body>
            <Card.Title>Registration Form</Card.Title>
            <Card.Text>
              This project was created with React,React-router,and bootstrap. It
              allows users to create an account, Login with their existing email
              they used in siginig up. The finally page displays users firstName
              after a sucessful log in. User data was saved in a local
              storage.User can view the optimal layout for the site depending on
              their device's screen size.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="project__grid__card" id="card4">
          <a
            href="https://tobi-fylo-website.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Card.Img
              className="project-img"
              variant="top"
              src={fylo}
              alt="Fylo dark theme website"
            />
          </a>
          <Card.Body>
            <Card.Title>Fylo dark theme website</Card.Title>
            <Card.Text>
              This project was built with React, SCSS, Formyik, yup and Jest.
              User can view the optimal layout for the site depending on their
              device's screen size.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="project__grid__card" id="card5">
          <a
            href="https://thatseogirl.github.io/Tip-Calculator/"
            target="_blank"
            rel="noreferrer"
          >
            <Card.Img
              className="project-img"
              variant="top"
              src={tip}
              alt="Tip Calculator"
            />
          </a>
          <Card.Body>
            <Card.Title>Tip Calculator</Card.Title>
            <Card.Text>
              This project was built with HTML, CSS,and Vallina Javascript. It
              allows users to calculate bills and split bills per person. User
              can also calculate tip and custom tips. User can view the optimal
              layout for the site depending on their device's screen size.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="project__grid__card" id="card6">
          <a
            href="https://frontend-project-integrify.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Card.Img
              className="project-img"
              variant="top"
              src={restapi}
              alt="RestAPI"
            />
          </a>
          <Card.Body>
            <Card.Title>Rest API</Card.Title>
            <Card.Text>
              This project was built with bootstrap, React, Redux,and
              Typescript.Country Api was fetched from
              <a href="https://restcountries.com/">Rest Countries API</a>
              User can view country details,switch from light to dark theme and
              add country to cart.User can view the optimal layout for the site
              depending on their device's screen size.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Button
                variant="contained"
                href="https://github.com/thatseogirl" target="_blank">
                Find out more <BiRightArrowAlt />
              </Button>
    </div>
  );
}
