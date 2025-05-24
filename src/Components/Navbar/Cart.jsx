import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import './Navbar.css'

export default function Cart() {
    return (
        <div className="cart-collection">
            <div className="cart-icons">
                <MdOutlineShoppingCart size={22} color='#fff' />
            </div>
            <div className="cart-total text-white">
                $ .000
            </div>
        </div>
    )
}
