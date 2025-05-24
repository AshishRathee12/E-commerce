import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from 'react-redux';
const DisplayItems = () => {

    const todos = useSelector(state => state.Item);

    const [item, setItem] = useState(1)

    console.log(todos);

    const decrease = () => {
        if (item > 1) {
            setItem(prev => prev - 1)
        }
    }
    const increase = () => {
        if (item < 5) {
            setItem(prev => prev + 1)
        }
    }


    return (
        <Container className='mt-3'>
            <Row>
                <div className="clean-cart">
                    <button>Empty cart</button>
                </div>
            </Row>
            <Row>
                <Col md={8} className='cart-detail py-3'>
                    {todos.map((items) => {
                        return (
                            <Row key={items.asin}>
                                {/* <div className='cart-item'> */}
                                <Col md={2}>
                                    <div className="cart-image-detail d-flex flex-column align-items-center">
                                        <div className="cart-item-img">
                                            <img src={items.product_photo} alt="Image" className='img-fluid' />
                                        </div>
                                        <div className="increase-product d-flex mt-3">
                                            <div className="decrease-quantity me-1" onClick={decrease}><FaMinus /></div>
                                            <div className="item-quantity">{item}</div>
                                            <div className="increase-quantity ms-1" onClick={increase}><FaPlus /></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <Col>
                                        <div className="cart-item-details">
                                            <div className="item-title">{items.product_title}</div>
                                            <div className="item-rate-details">
                                                <div className="item-price">{items.product_price}</div>
                                                <div className="item-offer">{items.product_num_offers}</div>
                                            </div>
                                            <div className="item-sales">
                                                <p>{items.sales_volume}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="delivery">
                                            <p>{items.
                                                delivery}</p>
                                        </div>
                                        <div className="Remove-btn">
                                            <p>Remove</p>
                                        </div>
                                    </Col>
                                </Col>
                                {/* </div> */}
                            </Row>
                        )
                    })}
                </Col>
                <Col></Col>
            </Row>

        </Container>
    )
}
export default DisplayItems
