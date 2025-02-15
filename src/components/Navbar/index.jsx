

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
  const [activeLink, setActiveLink] = useState(null);
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

  useEffect(() => {
    if (showSidebar === false) {
      setTimeout(() => {
        window.scrollTo(0, 0); // Asigură-te că pagina este poziționată corect
      }, 50);
    }
  }, [showSidebar]);

  useGSAP(() => {
    gsap.from(".tab__item", {
      opacity: 0,
      stagger: 0.2,
      duration: 0.7,
    });
  }, { scope: container });

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName); // Actualizează link-ul activ
  };

  useEffect(() => {
    const handleResize = () => {
      console.log("Pagina redimensionată!");
      // Poți verifica dacă se aplică corect activările link-urilor
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  key={index}
  className={`tab__item ${activeLink === list.name ? "active" : ""}`} // Adaugă clasa activă
  to={list.name.toLowerCase()}
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
  isDynamic={true}
  hashSpy={true}
  onClick={() => handleLinkClick(list.name)} // Setează link-ul activ
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


// import React, { useEffect, useState, useRef } from "react";
// import "./Navbar.css";
// import { menu } from "../../data";
// import { Link } from "react-scroll";
// import { animateScroll as scroll } from "react-scroll";
// import { FaBarsStaggered, FaTimes } from "react-icons/fa6";
// import logo from "../../images/logo2.png";
// import gsap from "gsap";

// const Navbar = () => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const navbarRef = useRef(null);
//   const container = useRef(null);
//   const lineRef = useRef(null);

//   const handleLinkClick = (e, section) => {
//     setShowSidebar(false);
//     requestAnimationFrame(() => {
//       const activeElement = document.querySelector(`.tab__item[to="${section}"]`);
//       if (activeElement) {
//         const rect = activeElement.getBoundingClientRect();
//         gsap.to(lineRef.current, {
//           x: rect.left + window.scrollX - container.current.getBoundingClientRect().left,
//           width: rect.width,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       }
//     });
//   };

//   useEffect(() => {
//     gsap.set(navbarRef.current, { position: "fixed", top: 0, width: "100%", zIndex: 100 });
//   }, []);

//   return (
//     <nav ref={navbarRef} className="navbar__container">
//       <div className="logo__container" onClick={() => scroll.scrollToTop({ duration: 500 })}>
//         <img src={logo} alt="Catalin Developer" className="logo" />
//       </div>
//       <div ref={container} className={`tab__group ${showSidebar ? "show" : ""}`}>
//         <div ref={lineRef} className="active-line"></div>
//         {menu.map((list, index) => (
//           <Link
//             key={index}
//             activeClass="active"
//             className="tab__item"
//             to={list.name.toLowerCase()}
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//             onClick={(e) => handleLinkClick(e, list.name.toLowerCase())}
//           >
//             {list.name}
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



