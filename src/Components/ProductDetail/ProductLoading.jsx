import React from 'react'
import './productdetail.css';
import { Col, Container, Row } from 'react-bootstrap';
export default function ProductLoading() {
  return (
    <div>
      <Container className='mt-4'>
        <Row>
          <Col lg={5}>
            <Row>
              <Col lg={2} className='p-0'>
                <div className="loading-small-img ">
                  <div className='loading-small'></div>
                  <div className='loading-small'></div>
                  <div className='loading-small'></div>
                </div>
              </Col>
              <Col>
                <div className='loading-main-img'></div>
              </Col>
            </Row>
          </Col>

          <Col lg={7}>
          <div className='loading-reviews w-75 mt-2'></div>
          <div className="loading-title w-75 mt-2"></div>
          <div className="loading-company w-50 mt-2"></div>
          <hr className="w-75"/>
          <div className="loading-content-1 w-75"></div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
