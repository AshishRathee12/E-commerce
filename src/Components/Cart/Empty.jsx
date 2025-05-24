import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import './Cart.css';
import { useNavigate } from 'react-router-dom';


export default function Empty() {

    const navigate = useNavigate();

    const shopnow = () => {
        navigate('/'); // Redirects to /checkout
    }


    return (
        <Container className='mt-3'>
            <div className="empty-cart d-flex justify-content-center flex-column align-items-center py-4">
                <div className="empty-img">
                    <img src="../../../images/Cart.webp" alt="" />
                </div>
                <div className="empty-cart-head d-flex flex-column align-items-center mt-3">
                    <p className='empty-info'>Your cart is empty !</p>
                    <p>Add items to it now.</p>
                </div>
                <div className="redirect-empty-cart">
                    <button onClick={shopnow}>Shop now</button>
                </div>
            </div>
        </Container>

    )
}
