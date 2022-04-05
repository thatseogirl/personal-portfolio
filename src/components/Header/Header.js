import React from "react";
import { ReactComponent as DesignSvg } from "../../images/design.svg";

export default function Header() {
  return (
    <header className="flex" data-aos="fade-left">
      <div className="flex__container">
        <section className="flex__container__1">
          <aside className="flex__container__1__border">
            <hr className="linerule" />
            <p className="linerule__text">Tobiloba Arotimi</p>
          </aside>
          <div className="about">
            <p className="about">Hello, my name's Tobi. I'm a Frontend</p>
            <p data-aos="flip-up" className="about flip">
              Developer.
            </p>
          </div>
        </section>

        <div className="flex__container__1__border__2">
          <DesignSvg className="img" />
        </div>
      </div>
    </header>
  );
}
