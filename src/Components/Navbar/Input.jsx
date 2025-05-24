import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoSearch } from "react-icons/io5";






export default function Input() {
    const [input, setInput] = useState("")

    // input-focus 
    const [isfocus, setIsFocus] = useState(false)
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
                <button className='p-2 ms-xl-2 ms-0 d-flex justify-content-center align-items-center'><IoSearch size={22} color='#fff' /></button>
            </div>
        </div>
    )
}
