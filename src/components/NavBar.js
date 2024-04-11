// import { useState, useEffect } from "react"
// import {NavBar, Container, Nav} from "react-bootstrap"
// import logo from '../assets/img/logo.svg';
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';

// export const NavBar = () => {
//     const [activeLink, setActiveLink] = useState('home');
//     const [scrolled, seScrolled] = useState(false);

//     useEffect(() => {
//         const onScroll = () => {
//             if (window.scrollY > 50) {
//                 seScrolled(true);
//             } else {
//                 seScrolled(false);
//             }
//         }
//         window.addEventListener("scroll", onScroll);
        
//         return () => window.removeEventListener("scroll", onScroll);
//     }, [])
    
//     const onUpdateActiveLink = (value) => {
//         setActiveLink(value);
//     }
//     return (
//     <Navbar expand="lg" className={scolled ? "scrolled": ""}>
//     <Container>
//         <Navbar.Brand href="#home">
//             <img src={logo} alt="Logo" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav">
//         <span className="navbar-toggler-icon"></span>
//         </Navbar.Toggle>

//         <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//             <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
//             <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
//             <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
//         </Nav>
//         <span className="navbar-text">
//             <div className="social-icon">
//                 <a href="#"><img src={navIcon1} alt="" /></a>
//                 <a href="#"><img src={navIcon2} alt="" /></a>
//                 <a href="#"><img src={navIcon3} alt="" /></a>
//             </div>
//             <button className="vvd" onClick={() => console.log('connect')}><span>Lets Connect</span></button>
//         </span>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }




// import { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from '../assets/img/logo.svg';
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
// import { HashLink } from 'react-router-hash-link';
// import {
//   BrowserRouter as Router
// } from "react-router-dom";

// export const navBar = () => {

//   const [activeLink, setActiveLink] = useState('home');
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     }

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, [])

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   }

//   return (
//     <Router>
//       <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
//         <Container>
//           <Navbar.Brand href="/">
//             <img src={logo} alt="Logo" />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav">
//             <span className="navbar-toggler-icon"></span>
//           </Navbar.Toggle>
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
//               <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
//               <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
//             </Nav>
//             <span className="navbar-text">
//               <div className="social-icon">
//                 <a href="#"><img src={navIcon1} alt="" /></a>
//                 <a href="#"><img src={navIcon2} alt="" /></a>
//                 <a href="#"><img src={navIcon3} alt="" /></a>
//               </div>
//               <HashLink to='#connect'>
//                 <button className="vvd"><span>Let’s Connect</span></button>
//               </HashLink>
//             </span>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </Router>
//   )
// }


// import React, { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from '../assets/img/logo.svg';
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
// import { HashLink } from 'react-router-hash-link';
// import { BrowserRouter as Router, NavLink } from "react-router-dom";

// const NavBar = () => {
//   const [activeLink, setActiveLink] = useState('home');
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     }

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, [])

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   }

//   return (
//     <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
//       <Container>
//         <Navbar.Brand href="/">
//           <img src={logo} alt="Logo" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav">
//           <span className="navbar-toggler-icon"></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <NavLink to="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</NavLink>
//             <NavLink to="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</NavLink>
//             <NavLink to="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</NavLink>
//           </Nav>
//           <span className="navbar-text">
//             <div className="social-icon">
//               <a href="#"><img src={navIcon1} alt="" key="icon1" /></a>
//               <a href="#"><img src={navIcon2} alt="" key="icon2" /></a>
//               <a href="#"><img src={navIcon3} alt="" key="icon3" /></a>
//             </div>
//             <HashLink to='#connect'>
//               <button className="vvd"><span>Let’s Connect</span></button>
//             </HashLink>
//           </span>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }

// export default NavBar;

import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link as={HashLink} to="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link as={HashLink} to="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="" key="icon1" /></a>
              <a href="#"><img src={navIcon2} alt="" key="icon2" /></a>
              <a href="#"><img src={navIcon3} alt="" key="icon3" /></a>
            </div>
            <HashLink to='#connect'>
              <button className="vvd"><span>Let’s Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
