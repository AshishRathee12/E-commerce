import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { CleanCart, removeItem } from './Slice';

const DisplayItems = () => {

    const todos = useSelector(state => state.Item);
    const dispatch = useDispatch()

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

    const removeFromCart = (res) => {
        dispatch(removeItem(res))
    }

    const EmptyCart = () => {
        dispatch(CleanCart())
    }

    return (
        <Container className='mt-3'>

            <Row className='align-items-start'>
                <Col md={8} className='cart-items'>
                    <Row className='position-sticky top-0'>
                        <div className="clean-cart p-2 d-flex justify-content-between align-items-center">
                            <h3 className=' m-0'> Shopping Cart</h3>
                            <button className='' onClick={EmptyCart}>Empty cart</button>
                        </div>
                    </Row>
                    {todos.map((items) => {
                        return (
                            <Row key={items.asin} className='p-3 mb-3'>
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
                                            <Link >
                                                <div className="item-title">{items.product_title}</div>
                                            </Link>
                                            <div className="item-rate-details mt-2">
                                                <div className="item-price">{items.product_price}</div>
                                                <div className="item-offer">{items.product_num_offers} Offer Available</div>
                                            </div>
                                            <div className="item-sales">
                                                <p>{items.sales_volume}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="delivery">
                                            <p className='m-0'>{items.
                                                delivery}</p>
                                        </div>
                                        <div className="Remove-btn mt-2">
                                            <button onClick={() => removeFromCart(items.asin)}>Remove</button>
                                        </div>
                                    </Col>
                                </Col>
                                {/* </div> */}
                            </Row>
                        )
                    })}
                </Col>
                <Col className='cart-total-price'>
                    <Row>
                        <div className="cart-price-heading">
                            <p>Price Details</p>
                        </div>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}
export default DisplayItems
