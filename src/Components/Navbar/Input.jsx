import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';






export default function Input() {
    const [input, setInput] = useState("")

    // input-focus 
    const [isfocus, setIsFocus] = useState(false);

    const navigate = useNavigate()

    const searchitem = () => {
        if (!input.trim()) return;
        navigate('/product-list/' + input)
    }

    return (
        <div className="nav-search">
            <div className={`nav-input ${isfocus ? 'focused' : ''}`} style={{ borderRadius: isfocus ? '0px' : '30px' }}>
                <input type="text" className='px-2 p-md-3'
                    value={input}
                    placeholder='Search everything in Meget online'
                    onChange={(e) => setInput(e.target.value)}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                />
                <button className='p-2 ms-xl-2 ms-0 d-flex justify-content-center align-items-center' onClick={searchitem}><IoSearch size={22} color='#fff' /></button>
            </div>
        </div>
    )
}
