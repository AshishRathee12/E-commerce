import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap';
import { FaChevronDown } from "react-icons/fa";
import './suggestion.css'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';



export default function Suggestion({ name, data }) {

    const [show, setShow] = useState(false);

    const [present, setPresent] = useState(0);
    // console.log(name)

    const showsuggestion = (index) => {
        setPresent(index)
        setShow(true)
    }
    const hidesuggestion = () => {
        setShow(false)
    }


    return (
        <div className='suggestion-row py-2'>
            <div className="suggestion-head">
                <Row>
                    {name.map((elem, index) => {
                        return (
                            <Col key={index}>
                                <div
                                    className="suggestion-container"
                                    onMouseEnter={() => showsuggestion(index)}
                                    onMouseLeave={hidesuggestion}
                                >
                                    <p className='suggestion-name m-0'>{elem}  <FaChevronDown className='suggestion-dropdown-icons' size={14} /></p>

                                    {show && present === index && (
                                        <div className="suggestion-display p-3">
                                            <Row>
                                                {data[present].map((elems, i) => (
                                                    <Col key={i}>
                                                        <h6>{elems.listitem}</h6>
                                                        <ul className='p-0'>
                                                            {elems.listgroup.map((item, j) => {
                                                                const link = `/product-list/${item} ${elems.listitem}`
                                                                return (
                                                                    <Link to={link} as={NavLink}>
                                                                        <li key={j} className='mb-3'>{item}</li>
                                                                    </Link>
                                                                )
                                                            })}
                                                        </ul>
                                                    </Col>

                                                ))}
                                            </Row>
                                        </div>
                                    )}
                                </div>
                            </Col>

                        )
                    })}
                </Row>
            </div>

        </div >
    )
}
