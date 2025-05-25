import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import './Navbar.css'
import { useSelector } from 'react-redux';

export default function Cart() {

    const numbers = useSelector(state => state.Item)

    return (
        <div className="cart-collection">
            <div className="cart-icons">
                <div className="cart-items-quantity">{numbers.length}</div>
                <MdOutlineShoppingCart size={32} color='#fff' />
            </div>

        </div>
    )
}
