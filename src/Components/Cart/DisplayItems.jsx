import React, { useCallback, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { CleanCart, removeItem } from './Slice';

const DisplayItems = () => {

    const todos = useSelector(state => state.Item);
    const dispatch = useDispatch()

    const [itemQuantities, setItemQuantities] = useState({});

    const [amount, setAmout] = useState(0)
    const [offer, setOffer] = useState(0)

    const [displayAmount, setDisplayAmount] = useState(0)

    console.log(todos);


    const calculateTotal = useCallback(() => {
        // we are destructuring the acc 
        const { totalPaid, totalOriginal } = todos.reduce(
            (acc, curr) => {

                const cleanedOriginal = curr.product_original_price?.replace(/[₹,]/g, '');
                const original = parseInt(cleanedOriginal) || 0;

                const cleanedPaid = curr.product_price?.replace(/[₹,]/g, '');
                const paid = parseInt(cleanedPaid) || 0;

                acc.totalOriginal += original;
                acc.totalPaid += paid;

                return acc; //here acc means totalPaid and totalOriginal (acc=initial value)
            },
            { totalPaid: 0, totalOriginal: 0 } // initial value
        );

        return { totalPaid, totalOriginal };
    }, [todos]);


    //  Call it inside useEffect
    useEffect(() => {
        const total = calculateTotal();
        console.log("Total:", total);
        setAmout(total.totalOriginal)
        setDisplayAmount(total.totalPaid)
        setOffer(total.totalOriginal - total.totalPaid)
    }, [calculateTotal]);



    // increment quantity 

    useEffect(() => {
        const initialQuantities = {};
        todos.forEach((item) => {
            initialQuantities[item.asin] = 1;
        });
        setItemQuantities(initialQuantities);
    }, [todos]);



    const increase = (asin) => {
        setItemQuantities(prev => ({
            ...prev,
            [asin]: Math.min(prev[asin] + 1, 5)
        }));
    };

    const decrease = (asin) => {
        setItemQuantities(prev => ({
            ...prev,
            [asin]: Math.max(prev[asin] - 1, 1)
        }));
    };



    // delete from cart 

    const removeFromCart = (res) => {
        dispatch(removeItem(res))
    }

    const EmptyCart = () => {
        dispatch(CleanCart())
    }

    return (
        <Container className='mt-3'>

            <Row className='align-items-start'>
                <Col md={8} className='cart-items me-3'>
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
                                            <div className="decrease-quantity me-1" onClick={() => decrease(items.asin)}><FaMinus /></div>
                                            <div className="item-quantity">{itemQuantities[items.asin]}</div>
                                            <div className="increase-quantity ms-1" onClick={() => increase(items.asin)}><FaPlus /></div>

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
                    <Row className='py-3'>
                        <div className="cart-price-heading">
                            <p className='m-0 pb-2'>Price Details</p>
                        </div>
                        <hr />
                        <div className="items-price d-flex justify-content-between">
                            <div className="nu-items">Price ({todos.length} items)</div>
                            <div className="original-price-cart">{amount}</div>
                        </div>
                        <div className="items-discount d-flex justify-content-between mt-3">
                            <div className="discount-head">Discount</div>
                            <div className="discount-amount">-{offer}</div>
                        </div>
                        <div className="main-price d-flex justify-content-between my-3">
                            <div className="main-price-heading">Total Amount</div>
                            <div className="paid-price">{displayAmount}</div>
                        </div>
                        <div className="place-order d-flex justify-content-center">
                            <button className='w-75'>Proceed to Buy</button>
                        </div>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}
export default DisplayItems
