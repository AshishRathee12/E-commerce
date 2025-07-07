import React, { useEffect, useRef, useState } from 'react'
import MostSelled from './Most-selled/MostSelled'
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import Loadinglist from '../Productlist/Loadinglist';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../Cart/Slice';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {

    const [watch, setWatch] = useState([]);
    const [cloth, setCloth] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const scrollWatch = useRef(null)
    const scrollCloth = useRef(null)

    const reduxdata = useSelector(state => state.Item)


    useEffect(() => {
        const fetchProducts = async () => {
            setError(null);
            // Check if data exists in localStorage
            const cachedProducts = localStorage.getItem('watch_products');
            const cachedProducts2 = localStorage.getItem('clothing_products');
            if (cachedProducts) {
                setWatch(JSON.parse(cachedProducts));
                setLoading(false);
                // return;
            }
            if (cachedProducts2) {
                setCloth(JSON.parse(cachedProducts2));
                setLoading(false);
                return;
            }

            const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=clothing&page=1&country=IN&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`;
            const options = {
                headers: {
                    // disha 
                    // 'x-rapidapi-key': 'bd52f8d6a4msh8eb450807febe1bp1b3e5djsn175ae6c6f60b',

                    // ashish rathee 
                    // 'x-rapidapi-key': 'ba5add63eamsh923b36e54af893ep14f893jsn0aaa91cf53f9',

                    // rathee ashish 
                    'x-rapidapi-key': '65585d9e15mshd5c370d9d7ed9b9p1dd305jsn98f4ca42270f',


                    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
                }
            };

            // try {
            //     const response = await axios.get(url, options);
            //     const responsedata = response.data.data.products.slice(0, 24);

            //     // Cache data to localStorage
            //     // localStorage.setItem('watch_products', JSON.stringify(responsedata));
            //     localStorage.setItem('clothing_products', JSON.stringify(responsedata));

            //     // setWatch(responsedata);
            //     setCloth(responsedata);
            //     setLoading(false);
            // } catch (error) {
            //     console.error("Error fetching data:", error);
            //     setError("Failed to fetch users");
            //     setLoading(false);
            // }
        };

        fetchProducts();
    }, []);


    useEffect(() => {
        document.title = "Online shopping site in india";
    }, []);

    // Adding to cart 
    const dispatch = useDispatch();

    const addingToCart = (item) => {
        const exists = reduxdata.some((elem) => elem.asin === item.asin);

        if (!exists) {
            dispatch(addItems(item))
            toast.success('Item added to cart.')
        }
    }



    const scrollingCloth = (scrollval) => {
        scrollCloth.current.scrollLeft += scrollval;
    }
    const scrollingWatch = (scrollval) => {
        scrollWatch.current.scrollLeft += scrollval;
    }


    if (error) return <p>{error}</p>;

    return (
        <div className='Home'>
            <div><Toaster
                position="bottom-center"
                reverseOrder={false}
            /></div>
            <MostSelled />
            <Container fluid className='mt-4'>
                <Row>
                    <Col lg={3} md={5}>
                        <div className="Home-col d-sm-flex d-md-block">
                            <Col className='me-sm-3 me-md-0'>
                                <Row className='mb-3'>
                                    <div className="Home-colRow">
                                        <div className="Home-petitems Home-images">
                                            <Link to={"/product-list/Pet-items"} as={NavLink}>
                                                <img src="../../../images/pets.jpg" className='img-fluid' alt="Pet food" />
                                            </Link>
                                        </div>
                                    </div>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <div className="Home-colRow">
                                        <div className="Home-toysitems Home-images">
                                            <Link to={"/product-list/Toys"} as={NavLink}>
                                                <img src="../../../images/toys.jpg" className='img-fluid' alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </Row>
                            </Col>
                        </div>
                    </Col>
                    <Col lg={6} md={7} className='mt-3 mt-sm-0'>
                        <div className="Home-col">
                            <Row className='mb-3'>
                                <div className="Home-colRow">
                                    <div className="Home-Clothing Home-images">
                                        <Link to={"/product-list/Clothes"} as={NavLink}>
                                            <img src="../../../images/clothing-2.jpg" className='img-fluid' alt="Pet food" />
                                        </Link>
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <Col>
                                    <Row className='mb-3'>
                                        <div className="Home-colRow">
                                            <div className="Home-jwellery Home-images">
                                                <Link to={"/product-list/Jwellery"} as={NavLink}>
                                                    <img src="../../../images/jwellery.webp" className='img-fluid' alt="Pet food" />
                                                </Link>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row className='mb-3'>
                                        <div className="Home-colRow">
                                            <div className="Home-Food Home-images">
                                                <Link to={"/product-list/Food"} as={NavLink}>
                                                    <img src="../../../images/Food.jpg" className='img-fluid' alt="Pet food" />
                                                </Link>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="Home-col d-md-flex d-lg-block">
                            <Col className='me-3'>
                                <Row className='mb-3'>
                                    <div className="Home-colRow">
                                        <div className="Home-electronic">
                                            <Link to={"/product-list/Electronic"} as={NavLink}>
                                                <img src="../../../images/electronic-2.webp" className='img-fluid' alt="Electronic" />
                                            </Link>
                                        </div>
                                    </div>
                                </Row>
                            </Col>

                            <Col>
                                <Row>
                                    <div className="Home-colRow">
                                        <div className="Home-furniture">
                                            <Link to={"/product-list/Furniture"} as={NavLink}>
                                                <img src="../../../images/furniture.jpg" className='img-fluid' alt="Furniture" />
                                            </Link>
                                        </div>
                                    </div>
                                </Row>
                            </Col>
                        </div>
                    </Col>
                </Row>
                {loading ? <Loadinglist /> : <Row className=' position-relative mt-4' >
                    <div className="view-more d-flex justify-content-between ">
                        <h3>Watch ...</h3>
                        <Link to='/product-list/watch' as={NavLink}>
                            <p className=''>View More</p>
                        </Link>
                    </div>
                    <div className="scroll-btn">
                        <div className="left-btn" onClick={() => scrollingWatch(-350)}><FaChevronLeft size={30} /></div>
                        <div className="right-btn" onClick={() => scrollingWatch(350)}><FaChevronRight size={30} /></div>
                    </div>
                    <div className="watch-head">

                    </div>
                    <div className="home-scroll overflow-hidden d-flex flew-nowrap" ref={scrollWatch}>
                        {watch.map(elem => {
                            const link = '/Productdetail/' + elem.asin;
                            const title = elem.product_title.slice(0, 40)
                            return (
                                <Col key={elem.asin} md={2} sm={3} className='mb-3 position-relative overflow-hidden col-6'>
                                    <Link to={link} as={NavLink}>
                                        <div className="productlist-items p-2">
                                            {elem.is_amazon_choice && <div className='best-seller'>Meget Choice</div>}
                                            <div className="add-to-cart position-absolute top-0" onClick={() => addingToCart(elem)}>
                                                <CiHeart size={30} />
                                            </div>
                                            <div className="product-item-img">
                                                <img src={elem.product_photo} className='img-fluid mx-auto d-block' alt="" loading='lazy'/>
                                            </div>
                                            <div className="about-product mt-1">
                                                <div className="isPrime">{elem.is_prime && <><p className='m-0'>Sponsored<IoMdInformationCircleOutline className='me-1' /></p></>}</div>
                                                <div className="product-item-title">
                                                    <p className='m-0'>{title}...</p>
                                                </div>
                                                <div className="product-item-price d-flex mt-1">
                                                    <p className='discount-price mz-1 m-0'>{elem.product_price}</p>
                                                    <p className='original-price m-0'>{elem.product_original_price}</p>
                                                </div>

                                                {/* {elem.product_badge && <div className="product-bedge">
                                            <p>{elem.product_badge}</p>
                                        </div>}
                                        <div className="total-sales">
                                            <p>{elem.sales_volume}</p>
                                        </div>
                                        <div className="delivery-time">
                                            <p>{elem.delivery}</p>
                                        </div> */}
                                            </div>
                                        </div>
                                    </Link>

                                </Col>
                            )
                        })}
                    </div>
                </Row>}
                {loading ? <Loadinglist /> : <Row className=' position-relative mt-4' >
                    <div className="view-more d-flex justify-content-between ">
                        <h3>Cloth ...</h3>
                        <Link to='/product-list/clothes' as={NavLink}>
                            <p className=''>View More</p>
                        </Link>
                    </div>
                    <div className="scroll-btn">
                        <div className="left-btn" onClick={() => scrollingCloth(-350)}><FaChevronLeft size={30} /></div>
                        <div className="right-btn" onClick={() => scrollingCloth(350)}><FaChevronRight size={30} /></div>
                    </div>

                    <div className="home-scroll overflow-hidden d-flex flew-nowrap" ref={scrollCloth}>
                        {cloth.map(elem => {
                            const link = '/Productdetail/' + elem.asin
                            const title = elem.product_title.slice(0, 40)
                            return (
                                <Col key={elem.asin} md={2} sm={3} className='mb-3 position-relative overflow-hidden col-6'>
                                    <Link to={link} as={NavLink}>
                                        <div className="productlist-items p-2">
                                            {elem.is_amazon_choice && <div className='best-seller'>Meget Choice</div>}
                                            <div className="add-to-cart position-absolute top-0" onClick={() => addingToCart(elem)}>
                                                <CiHeart size={30} />
                                            </div>
                                            <div className="product-item-img">
                                                <img src={elem.product_photo} className='img-fluid mx-auto d-block' alt="" loading='lazy'/>
                                            </div>
                                            <div className="about-product mt-1">
                                                <div className="isPrime">{elem.is_prime && <><p className='m-0'>Sponsored<IoMdInformationCircleOutline className='me-1' /></p></>}</div>
                                                <div className="product-item-title">
                                                    <p className='m-0'>{title}...</p>
                                                </div>
                                                <div className="product-item-price d-flex mt-1">
                                                    <p className='discount-price mz-1 m-0'>{elem.product_price}</p>
                                                    <p className='original-price m-0'>{elem.product_original_price}</p>
                                                </div>

                                                {/* {elem.product_badge && <div className="product-bedge">
                                            <p>{elem.product_badge}</p>
                                        </div>}
                                        <div className="total-sales">
                                            <p>{elem.sales_volume}</p>
                                        </div>
                                        <div className="delivery-time">
                                            <p>{elem.delivery}</p>
                                        </div> */}
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            )
                        })}
                    </div>
                </Row>}

            </Container>
        </div >
    )
}
