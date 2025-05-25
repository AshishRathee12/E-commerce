import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import Input from './Input';
import { GiHamburgerMenu } from "react-icons/gi";


import { IoLocationOutline } from "react-icons/io5";

import { MdLanguage } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

import { VscAccount } from "react-icons/vsc";
import Cart from './Cart';
import Expendednav from './Expended-nav';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Navbar() {


  const navigate = useNavigate()

  // input 
  const [display, setDisplay] = useState(false)

  const expendnavbar = () => {
    setDisplay(true)
  }



  const [size, setSize] = useState({
    width: window.innerWidth,
  });



  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
  }, [display]);









  return (
    <div className='navbar p-1'>
      <Container fluid className='d-block'>
        <Row className=' align-items-center'>
          <Col md='1' lg='2' sm='2' className=' ps-0 ps-md-2 d-flex align-items-center col-3 '>
            <div className="hamburger d-block d-md-none mx-2" onClick={expendnavbar}><GiHamburgerMenu size={30} /></div>

            <div className="logo">
              <Link to={"/"} as={NavLink}>
                <img src="../../../images/logo-2.png" alt="" />
              </Link>
            </div>
            <div className="choose-language ms-3 d-lg-flex align-items-center ps-2 d-none ">
              <MdLanguage size={28} color='#fff' className='me-2' />
              <div className="language-content d-xl-flex justify-content-center align-items-center d-none">
                <p className='m-0'>Choose</p>
              </div>
              <div className="down-icon ms-2">
                <FaChevronDown size={20} color='#fff' />
              </div>
            </div>
          </Col>
          <Col md='6' lg='6' xl='7' sm='8' className='col-7'>
            <Row>
              <Input />
            </Row>
          </Col>
          <Col md='5' lg='4' xl='3' className='col-2'>
            <Row>
              <Col className='d-md-flex align-items-center d-none nav-info' sm='4'>
                <div className="sign-in">
                  <div className="sign-in-icon me-2"><VscAccount size={22} color='#fff' /></div>
                  <div className="sign-in-thumbnail">
                    <p className='deliver-address m-0 text-light '>sign in</p>
                    <p className='update-location m-0 text-white'>Account</p>
                  </div>
                </div>
              </Col>
              <Col className='d-md-flex align-items-center ps-0 d-none ' sm='5'>
                <div className="user-location">
                  <div className="location-icon me-1"><IoLocationOutline size={22} color='#fff' /></div>
                  <div className="user-address">
                    <p className='deliver-address m-0 text-light '>Deliver to { }{ }</p>
                    <p className='update-location m-0 text-white'>Update Location</p>
                  </div>
                </div>
              </Col>
              <Col md='3' className='Cart-link d-flex justify-content-center align-items-center'>
                <Link to='/Cart' as={NavLink}>
                  <Cart />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {display && size.width < 768 ? <Expendednav value={setDisplay} /> : ""}

    </div >
  )
}

export default Navbar
