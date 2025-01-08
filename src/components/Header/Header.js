import React from "react";

export default function Header() {
  return (
    <header data-aos="fade-left">
      <div className="flex__container">
        {/* <section className="flex__container__1">
          <aside className="flex__container__1__border">
            <hr className="linerule" />
            <p className="linerule__text">Tobiloba </p>
          </aside>
          </section> */}
          <div className="about">
            <p className="about">Hello, I'm Tobi.</p>
            <p className="about_2">A full-stack developer</p>
            {/* <p data-aos="flip-up" className="about flip">
            A full-stack developer
            </p> */}
          </div>
    
        {/* <div className="flex__container__1__border__2">
          <DesignSvg className="img" />
        </div> */}
      </div>
     
    </header>
  );
}
