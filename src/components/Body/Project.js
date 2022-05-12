import React from "react";
import { BsEyeFill } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { Card } from "react-bootstrap";

import ecommerce from "../../images/ecommerce.png";
import calculator from "../../images/calculator.png";
import form from "../../images/form.png";
import fylo from "../../images/fylo.png";
import tip from "../../images/tip.png";
import restapi from "../../images/restapi.png";
import portfolio from "../../images/portfolio.png";
import dashboard from "../../images/dashboard.png";
import airbnb from "../../images/airbnb.png"

export default function Project() {
  return (
    <div id="project" className="project" data-aos="fade-right">
      <aside className="aside">
        <div className="aside__horizontal">
          <hr className="aside__horizontal__rule" />
          <p className="aside__horizontal__rule__ptag">Look at my projects</p>
        </div>
      </aside>
      <div className="project__grid">
        <Card className="project__grid__card" id="card1">
          <Card.Img
            className="project__grid__card__link"
            variant="top"
            src={ecommerce}
            alt="E commerce Landing page"
          />
          <Card.Body className="project__grid__card__link__parent">
            <Card.Title className="project__grid__card__link__parent__heading">
              E commerce Landing page
            </Card.Title>
            <Card.Text className="project__grid__card__link__parent__heading__review">
              It is a landing page for an E-commerce website.
            </Card.Text>
            <div className="icongroup">
              <a
                href="https://github.com/thatseogirl/E-commerce-Landing-Page"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub className="linkicons" />
              </a>
              <a
                href="https://tobi-e-commerce.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BsEyeFill className="linkicons" />
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card className="project__grid__card" id="card2">
          <Card.Img
            className="project__grid__card__link"
            variant="top"
            src={calculator}
            alt="Calculator APP"
          />
          <Card.Body className="project__grid__card__link__parent">
            <Card.Title className="project__grid__card__link__parent__heading">
              Calculator App
            </Card.Title>
            <Card.Text className="project__grid__card__link__parent__heading__review">
              A calculator app that allows user to sum up values,
              subtract,multiply and divide.
            </Card.Text>
            <div className="icongroup">
              <a
                href="https://github.com/thatseogirl/calculator-app"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub className="linkicons" />
              </a>
              <a
                href="https://redux-calculator-app.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BsEyeFill className="linkicons" />
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card className="project__grid__card" id="card3">
          <Card.Img
            className="project__grid__card__link"
            variant="top"
            src={form}
            alt="Registration Form"
          />
          <Card.Body className="project__grid__card__link__parent">
            <Card.Title className="project__grid__card__link__parent__heading">
              Registration Form
            </Card.Title>
            <Card.Text className="project__grid__card__link__parent__heading__review">
              This is a registration form that allows users to create an account
              and login.
            </Card.Text>
            <div className="icongroup">
              <a
                href="https://github.com/thatseogirl/Registration-form"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub className="linkicons" />
              </a>
              <a
                href="https://tobi-registration-form.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >

                <BsEyeFill className="linkicons" />
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card className="project__grid__card" id="card4">
          <Card.Img
            className="project__grid__card__link"
            variant="top"
            src={fylo}
            alt="Fylo dark theme website"
          />
          <Card.Body className="project__grid__card__link__parent">
            <Card.Title className="project__grid__card__link__parent__heading">
              Fylo dark theme website
            </Card.Title>
            <Card.Text className="project__grid__card__link__parent__heading__review">
              This a dark themed website built with fromyik and yup for the
              signUp component.
            </Card.Text>
            <div className="icongroup">
              <a
                href="https://github.com/thatseogirl/Fylo-dark-theme-website"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub className="linkicons" />
              </a>
              <a
                href="https://tobi-fylo-website.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BsEyeFill className="linkicons" />
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card className="project__grid__card" id="card5">
          <Card.Img
            className="project__grid__card__link"
            variant="top"
            src={tip}
            alt="Tip Calculator"
          />
          <Card.Body className="project__grid__card__link__parent">
            <Card.Title className="project__grid__card__link__parent__heading">
              Tip Calculator
            </Card.Title>
            <Card.Text className="project__grid__card__link__parent__heading__review">
              This is a Tip Calculator that allows users calculate their bills
              and tip per person.
            </Card.Text>
            <div className="icongroup">
              <a
                href="https://github.com/thatseogirl/Tip-Calculator"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub className="linkicons" />
              </a>
              <a
                href="https://thatseogirl.github.io/Tip-Calculator/"
                target="_blank"
                rel="noreferrer"
              >
                <BsEyeFill className="linkicons" />
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card className="project__grid__card" id="card6">
          <Card.Img
            className="project__grid__card__link"
            variant="top"
            src={restapi}
            alt="RestAPI"
          />
          <Card.Body className="project__grid__card__link__parent">
            <Card.Title className="project__grid__card__link__parent__heading">
              Country Rest API
            </Card.Title>
            <Card.Text className="project__grid__card__link__parent__heading__review">
              This is a country list of the world, user can view each country
              details and add country to cart.
            </Card.Text>
            <div className="icongroup">
              <a
                href="https://github.com/thatseogirl/is3-frontend-project"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub className="linkicons" />
              </a>
              <a
                href="https://frontend-project-integrify.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BsEyeFill className="linkicons" />
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card className="project__grid__card" id="card7">
          <Card.Img
            className="project__grid__card__link"
            variant="top"
            src={portfolio}
            alt="Portfolio"
          />
          <Card.Body className="project__grid__card__link__parent">
            <Card.Title className="project__grid__card__link__parent__heading">
              Portfolio
            </Card.Title>
            <Card.Text className="project__grid__card__link__parent__heading__review">
              This is an overview of some of my Projects,you can also view all
              projects on my Github.
            </Card.Text>
            <div className="icongroup">
              <a
                href="https://github.com/thatseogirl/personal-portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub className="linkicons" />
              </a>
              <a
                href="https://that-seo-girl.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BsEyeFill className="linkicons" />
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card className="project__grid__card" id="card8">
          <Card.Img
            className="project__grid__card__link"
            variant="top"
            src={dashboard}
            alt="Time tracking dashboard"
          />
          <Card.Body className="project__grid__card__link__parent">
            <Card.Title className="project__grid__card__link__parent__heading">
              Time Tracking Dashboard
            </Card.Title>
            <Card.Text className="project__grid__card__link__parent__heading__review">
              This is a Time tracking dashboard, it allows users to switch
              between viewing daily, weekly, and monthly stats
            </Card.Text>
            <div className="icongroup">
              <a
                href="https://github.com/thatseogirl/Time-tracking-dashboard"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub className="linkicons" />
              </a>
              <a
                href="https://thatseogirl.github.io/Time-tracking-dashboard/"
                target="_blank"
                rel="noreferrer"
              >
                <BsEyeFill className="linkicons" />
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card className="project__grid__card" id="card8">
          <Card.Img
            className="project__grid__card__link"
            variant="top"
            src={airbnb}
            alt="airbnb-clone"
          />
          <Card.Body className="project__grid__card__link__parent">
            <Card.Title className="project__grid__card__link__parent__heading">
              Airbnb Clone
            </Card.Title>
            <Card.Text className="project__grid__card__link__parent__heading__review">
              This is a clone of the Airbnb Landing page.
            </Card.Text>
            <div className="icongroup">
              <a
                href="https://github.com/thatseogirl/airbnb-clone"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub className="linkicons" />
              </a>
              <a
                href="tobi-airbnb-clone.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BsEyeFill className="linkicons" />
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
