import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button, Row, Col, Form, FormControl } from 'react-bootstrap';

const Header = () => {
   const [navbar, setNavbar] = useState();
   const changeBackground = () => {
      if (window.scrollY >= 10) {
         setNavbar(true);
      } else {
         setNavbar(false);
      }
   }

   window.addEventListener('scroll', changeBackground);

   return (
      <div>
         <div className={navbar ? "nn active" : "nn"}>
            <Row className="containerh">
               <Col className="col1">
                  <FontAwesomeIcon icon={faBars} size="2x" color={ navbar ? "black" : "white"} id="baricon" />
                  <div className="nm">
                     <div>
                        <img src="images/fiverrlogo.ong" alt="logo" />
                        <div className="dot"></div>
                        <div>
                        </div>
                        <img src="images/blacklogo.png" alt="logo" />
                     </div>
                     <div>
                        <Form inline>
                           <img className="searchlogo" src="images/search.png" alt="search icon" />
                           <FormControl type="text" placeholder="Search..." className="mr-lg-0" />
                           <button className="btn">Search</button>
                        </Form>
                     </div>
                  </div>
               </Col>
               <ul>
                  <li className="ll">
                     <a href="/">Fiverr Business</a>
                  </li>
                  <li className="sli">
                     <a href="/">Explore</a>
                  </li>
                  <li className="sli">
                     <a href="/">
                        <span className="globale">
                           <img src="images/globe.png" alt="logo" color="green" width="14px" />
                        </span>
                        <span>English</span>
                     </a>
                  </li>
                  <li className="tli">
                     <a href="/">RsPKR</a>
                  </li>
                  <li className="tli">
                     <a href="/">Become a Seller</a>
                  </li>
                  <li>
                     Sign In
                  </li>
                  <li className="bli">
                     <a href="/join"><Button variant="outline-success">Join</Button>{' '}</a>
                  </li>
               </ul>
            </Row>
         </div>
      </div>
   )
}

export default Header;