import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';

export default function Notfound() {
    const imgstyle = {
        maxWidth: "400px"
    }

    useEffect(() => {
        document.title = "Data not found"
    }, [])

    return (
        <Container>
            <div className='d-flex align-items-center justify-content-center flex-column'>
                <div className="notfound-img ">
                    <img src="../../../images/Notfound.avif" alt="" style={imgstyle} />
                </div>
                <div className="return-btn">
                    <Link to='/' as={NavLink}>
                        <button className='btn btn-primary p-3 rounded-50'>Return to Home</button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}
