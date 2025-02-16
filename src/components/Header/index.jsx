import React from "react";
import "./Header.css";
import { profile1 } from "../../images";
import Facts from "./facts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  return (
    <header id="header" className="blur-effect">
      <div className="stroke__text intro__text">Hello</div>
      <div className="section__wrapper header__container">
        <div className="column intro__container blur__effect">
          <div className="header__info__top">
            Hello There! I'm <span className="color__primary">Catalin</span>
          </div>
          <div className="header__info__middle">
            <h1 className="primary__title header__title">
              I'M A WEB DEVELOPER
            </h1>
            <p className="text__muted header__description">
              I solve intricate user experience challenges by designing
              thoughtful, integrity-driven solutions that create meaningful
              impact.
            </p>
          </div>
          <Facts />
          <div className="header__info__bottom">
            {/* <button className='btn'>Download CV</button> */}
            <a href="mailto:hapenciuccatalin@yahoo.com" className="btn">
              Email Me
            </a>
          </div>
        </div>
        <div className="column profile__wrapper">
          <div className="profile__photo__container">
            <img src={profile1} className="profile__photo" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
