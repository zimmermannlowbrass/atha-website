import React, { useRef, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import "./header.css"

function Header() {

  const nav__links = [
    {
      path: '#home',
      display: 'Home',
    },
    {
      path: '#about',
      display: 'About',
    },
    {
      path: '#quilts',
      display: 'Quilts',
    },
    {
      path: '#contact',
      display: 'Contact',
    },
  ]

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <Container>
      <Row>
      {nav__links.map((item, index) => (
        <li className='nav__item' key={index}>
          <a
          href={item.path}
          onClick={(event) => handleLinkClick(event, item.path)}
          >
          {item.display}
          </a>
        </li>
      ))}
      </Row>
    </Container>
  )
}

export default Header;