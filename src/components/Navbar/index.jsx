import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import { menu } from "../../data";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import logo from "../../images/logo2.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [visible, setVisible] = useState(false);
  const navbarRef = useRef(null);
  const container = useRef(null);

  const handleScroll = () => {
    setVisible(window.scrollY > 145);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (visible && navbarRef.current) {
      gsap.fromTo(
        navbarRef.current,
        { y: -250, width: "100%" },
        { y: 0, top: 0, zIndex: 100, duration: 0.5 }
      );
    }
  }, [visible]);

  useGSAP(() => {
    gsap.from(".tab__item", {
      opacity: 0,
      stagger: 0.2,
      duration: 0.7,
    });
  }, { scope: container });

  // ✅ Funcție pentru închiderea meniului după click pe un link
  const handleLinkClick = () => {
    setShowSidebar(false);
  };

  return (
    <nav ref={navbarRef} className={`navbar__container ${visible ? "visible" : ""}`}>
      {showSidebar && <div className="overlay" onClick={() => setShowSidebar(false)}></div>}

      <div className="logo__container" onClick={() => scroll.scrollToTop({ duration: 500 })}>
        <img src={logo} alt="Catalin Developer" className="logo" />
      </div>

      <div ref={container} className={`tab__group ${showSidebar ? "show" : ""}`}>
        <span className="icon__container close__btn" onClick={() => setShowSidebar(false)}>
          <FaTimes />
        </span>

        {menu.map((list, index) => (
          <Link
            activeClass="active"
            className="tab__item"
            to={list.name.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            key={index}
            onClick={handleLinkClick} // ✅ Închide meniul după click
          >
            {list.name}
          </Link>
        ))}
      </div>

      <div className="nav__buttons__group">
        <FaBarsStaggered className="menu" onClick={() => setShowSidebar(!showSidebar)} />
      </div>
    </nav>
  );
};

export default Navbar;






