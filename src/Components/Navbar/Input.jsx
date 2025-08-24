import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import Speaker from './Speaker';

export default function Input() {
    const [input, setInput] = useState("");
    const [searched, setSearched] = useState([]);

    const [isfocus, setIsFocus] = useState(false);
    const navigate = useNavigate();

    const searchitem = () => {
        if (!input.trim()) return;
        setSearched(prev => ([input, ...prev]));
        navigate('/product-list/' + input);
    };

    useEffect(() => {
        localStorage.setItem("searchItems", JSON.stringify(searched));
    }, [searched]);

    // 👇 Callback to receive transcript from Speaker
    const handleTranscript = (text) => {
        if (!text) return;
        setInput(text);   // fill input box with transcript
        setSearched(prev => ([text, ...prev]));
        // navigate('/product-list/' + text); // navigate directly
    };

    return (
        <div className="nav-search">
            <div className={`nav-input ${isfocus ? 'focused' : ''}`} style={{ borderRadius: isfocus ? '0px' : '30px' }}>
                <input
                    type="text"
                    className='px-2 p-md-3'
                    value={input}
                    placeholder='Search everything in Meget online'
                    onChange={(e) => setInput(e.target.value)}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                />
                <button
                    className='p-2 ms-xl-2 ms-0 me-2 d-flex justify-content-center align-items-center'
                    onClick={searchitem}>
                    <IoSearch size={22} color='#fff' />
                </button>

                {/* Pass callback here */}
                <Speaker onTranscript={handleTranscript} />
            </div>
        </div>
    );
}
