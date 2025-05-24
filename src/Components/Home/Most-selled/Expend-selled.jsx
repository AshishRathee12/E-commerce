import React, { useEffect, useState } from 'react'
import './MostSelled.css'
import { FaChevronDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';

export default function Expendselled({ image, name, fashionlist }) {

    const [show, setShow] = useState(false)
    const [frontData, setFrontData] = useState("Men's Top wear");
    const [subData, setSubData] = useState([])

    const showdropdown = () => {
        setShow(true)

    }
    const hidedropdown = () => {
        setShow(false)
    }


    useEffect(() => {
        if (fashionlist) {
            const subcategory = fashionlist.filter((elem) => {
                return elem.listitem == frontData
            })
            setSubData(subcategory[0]?.listgroup)
        }

    }, [frontData])

    const changesubcategory = (elem) => {
        setFrontData(elem)
    }





    return (
        <div className='expendselled trend-items' onMouseEnter={showdropdown} onMouseLeave={hidedropdown}>
            <div className="expendselled-heading"  >
                <div className="mostselled-img">
                    <Link to={`/product-list/${name}`} as={NavLink}>
                        <img src={image} alt="" />
                    </Link>
                </div>
                <div className=" mostselled-head d-flex align-items-center">
                    <p className='Selled-head m-0'>{name}</p>
                    <div className="mostselled-icon ms-2">
                        <FaChevronDown className={`${show ? "rotate-expend" : "normal-expend"} mostselled-head-icon`} />
                    </div>
                </div>
            </div>
            <div className={`${show ? "show-expend-dropdown" : "hide-expend-dropdown"} expendselled-dropdown`}>
                <div className='d-flex justify-content-between'>
                    <div className="expend-mainhead">
                        <ul className='p-0'>
                            {fashionlist && fashionlist.map((elem) => (
                                <li className='mb-2 d-flex justify-content-between align-items-center' key={elem.listitem} onMouseEnter={() => changesubcategory(elem.listitem)}>
                                    <p className='m-0'>  {elem.listitem}</p>
                                    <FaAngleRight className='ms-3' />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="expend-subcategory">
                        <ul className='p-0'>
                            {subData && subData.map((elem) => {
                                const link = `/product-list/${elem}`
                                return (
                                    <Link to={link} as={NavLink} key={elem}>
                                        <li className='mb-2'>
                                            <p className='m-0'>  {elem}</p>
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
