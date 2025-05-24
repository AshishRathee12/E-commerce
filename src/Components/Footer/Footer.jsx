import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Footer() {
  return (
    <Container fluid>
      <hr />
      <div className='footer'>
        <Row className='gy-3'>
          <Col className='d-flex justify-content-center col-4' lg={2}>
            <div className="support">
              <h6>Get support</h6>
              <div className="Help-center">
                <p>Help Center</p>
              </div>
              <div className="live-chat">
                <p>Live Chat</p>
              </div>
              <div className="order-status">
                <p>Check Order Status</p>
              </div>
              <div className="refund">
                <p>Refund</p>
              </div>
              <div className="Report-abuse">
                <p>Report Abuse</p>
              </div>
            </div>
          </Col>
          <Col className='d-flex justify-content-center col-4' lg={3}>
            <div className="payment">
              <h6>Payments and protections</h6>
              <div className="safe">
                <p>Safe and easy payments</p>
              </div>
              <div className="credit-card">
                <p>Meget.com Business Edge Credit Card</p>
              </div>
              <div className="money-back">
                <p>Money-back Policy</p>
              </div>
              <div className="time-shipping">
                <p>On-time shipping</p>
              </div>
              <div className="product-monitoring">
                <p>Product Monitoring services</p>
              </div>
            </div>
          </Col>
          <Col className='d-flex justify-content-center col-4' lg={3}>
            <div className="source-on-Meget">
              <h6>Source on Meget.com</h6>
              <div className="quotation">
                <p>Request for Quotation</p>
              </div>
              <div className="membership">
                <p>Membership program</p>
              </div>
              <div className="logistics">
                <p>Meget.com Logistics</p>
              </div>
              <div className="sales-tex">
                <p>Sales tax and VAT</p>
              </div>
              <div className="read">
                <p>Meget.com Reads</p>
              </div>
            </div>
          </Col>
          <Col className='d-flex justify-content-center'>
            <div className="sell">
              <h6>Sell on Meget.com</h6>
              <div className="start-sell">
                <p>Start Selling</p>
              </div>
              <div className="Seller-cntr">
                <p>Seller Central</p>
              </div>
              <div className="verified-sell">
                <p>Became a Verified Seller</p>
              </div>
              <div className="partnership">
                <p>Partnership</p>
              </div>

            </div>
          </Col>
          <Col className='d-flex justify-content-center'>
            <div className="know">
              <h6>Get to know us</h6>
              <div className="about">
                <p>About Meget.com</p>
              </div>
              <div className="corporate">
                <p>Corporate responsibility</p>
              </div>
              <div className="news-center">
                <p>News Center</p>
              </div>
              <div className="careera">
                <p>Careers</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}
