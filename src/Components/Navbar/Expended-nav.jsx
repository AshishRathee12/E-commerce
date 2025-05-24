import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { IoLocationOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { Container, Row } from 'react-bootstrap';
import { IoReceiptOutline } from "react-icons/io5";
import { IoHelpCircleOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function Expendednav({ value }) {



    const closesidebar = () => {
        value(false)
    }

    return (
        <div className='side-navbar'>
            <Container >
                <Row className='mt-3'>
                    <div className="sign-in-tags d-flex align-items-start align-items-sm-center">
                        <div className="logo-sign d-sm-flex align-items-center">
                            <div className="side-logo me-3 mb-4 mb-sm-0"> <img src="../../../images/logo-2.png" alt="" /></div>
                            <div className="sign-in d-flex justify-content-center align-items-center">
                                <div className="side-sign-in-thumbnail px-3 py-2">
                                    <p className='deliver-address m-0  '>sign in or create account</p>
                                </div>
                            </div>
                        </div>
                        <div className="cross-icon ms-4" onClick={closesidebar} style={{ cursor: "pointer" }}><RxCross2 size={22} /></div>
                    </div>
                </Row>
                <hr />
                <Row>
                    <div className="Account-history">
                        <div className="purchase-his d-flex mb-3">
                            <div className="purchase-icon me-2">
                                <IoReceiptOutline size={22} />
                            </div>
                            <div className="purchase-head">
                                <p className='m-0'>Purchase</p>
                            </div>
                        </div>
                        <div className="account d-flex">
                            <div className="account-icon  me-2 "><VscAccount size={22} /> </div>
                            <div className="account-heading">   <p className='m-0'>Account</p></div>
                        </div>
                    </div>
                </Row>
                <hr />
                <Row>
                    <div className="help d-flex" >
                        <div className="help-icon me-2"><IoHelpCircleOutline size={22} /></div>
                        <div className="help-head">
                            <p className='m-0'>Help</p>
                        </div>
                    </div>
                </Row>
                <hr />
                <Row>
                    <div className="user-location justify-content-start">
                        <div className="location-icon me-2"><IoLocationOutline size={22} /></div>
                        <div className="user-address">
                            <p className='deliver-address m-0 '>Deliver to { }{ }</p>
                            <p className='update-location m-0 '>Update Location</p>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
