import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Productlist.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Range } from "react-range";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loadinglist from './Loadinglist';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import NextButton from './NextButton';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../Cart/Slice';
import toast, { Toaster } from 'react-hot-toast';
// import { FaChevronDown } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function ProductList() {
    const { id } = useParams();
    const navigate = useNavigate()
    // console.log("api called")
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState([])
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    const itemsPerPage = 12;
    const [page, setPage] = useState(1);
    const [totalProduct, setTotalProduct] = useState(0)
    const selector = useSelector(state => state.Item);

    // price state 
    const [values, setValues] = useState([1000]);

    // sorting 
    const sortingArray = ["RELEVANCE", "LOWEST_PRICE", "HIGHEST_PRICE", "REVIEWS", "NEWEST", "BEST_SELLERS"]
    const [sortBy, setSortBy] = useState("RELEVANCE")



    useEffect(() => {

        const fetchlocal = localStorage.getItem("productlist")
        if (fetchlocal) {
            setData(JSON.parse(fetchlocal));
            setVisibleData(JSON.parse(fetchlocal))
            console.log(JSON.parse(fetchlocal))
            // console.log(JSON.parse(cachedData))
            return;
        }


        const fetchProducts = async () => {
            setError(null);
            setHasMore(true);
            // console.log(id)
            // const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${id}&page=${page}&country=IN&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`;
            const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${id}&page=${page}&country=IN&sort_by=${sortBy}&min_price=500&max_price=${values}&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`;
            const options = {
                headers: {
                    // ashish rathee 
                    // 'x-rapidapi-key': 'ba5add63eamsh923b36e54af893ep14f893jsn0aaa91cf53f9',
                    // rathee ashish 
                    'x-rapidapi-key': '65585d9e15mshd5c370d9d7ed9b9p1dd305jsn98f4ca42270f',
                    // 'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
                    // disha 
                    // 'x-rapidapi-key': 'bd52f8d6a4msh8eb450807febe1bp1b3e5djsn175ae6c6f60b',
                    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
                }
            };
            try {
                const res = await axios.get(url, options);
                // console.log((res.data.data.products))
                setTotalProduct(res.data.data.total_products)
                setData(res.data.data.products);
                setVisibleData(res.data.data.products.slice(0, itemsPerPage));
                console.log(res.data.data.products)
                localStorage.setItem("productlist", JSON.stringify(res.data.data.products))

                if (res.data.data.products.length == 0) {
                    console.log(data)
                    navigate('/NotFound')
                }
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err);
            }
        };

        // if (id) {
        //     fetchProducts();
        // }

    }, [id, page, sortBy]);



    const fetchMoreData = () => {
        // console.log("fetch called")
        setTimeout(() => {
            const currentLength = visibleData.length;
            const nextData = data.slice(currentLength, currentLength + itemsPerPage);
            setVisibleData(prev => [...prev, ...nextData]);
            if (visibleData.length + nextData.length >= data.length) {
                setHasMore(false);
            }
        }, 500);
    };

    // used when user click on button 
    const loadmore = (elem) => {
        setVisibleData([]);
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // for smooth scrolling
        });
        setHasMore(true)
        setPage(elem)

    }



    // adding to Cart

    const addingToCart = (elem) => {
        // console.log(selector)
        // console.log(elem)
        const check = selector.some((elem2) => elem2.asin === elem.asin)
        if (check) {
            return
        }
        dispatch(addItems(elem))
        toast.success('Item added to cart.')

    }

    useEffect(() => {
        document.title = `Meget.in : ${id}`;
    }, []);


    // filter products ===

    // price Range 

    let timeoutId;

    const changeprice = (values) => {
        setValues(values)
        timeoutId = setTimeout(() => {
            fetchlocal();
        }, 2000);
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    }

    // customer rating filter
    // const ratings = [4, 3, 2, 1]
    // const [selected, setSelected] = useState(null);
    // const [showrating, setShowrating] = useState(false)

    // const changerating = (index) => {
    //     setSelected(index)
    // }
    // const showratingcontent = () => {
    //     setShowrating(!showrating)
    // }


    const faqs = [
        {
            id: 1,
            title: 'Customer Ratings',
            content: [4, 3, 2, 1], // Example ratings
        },
        {
          id: 2,
          title: 'Product Condition',
          content: ['ALL','NEW','USED','RENEWED','COLLECTIBLE'],
        },
        // {
        //   id: 3,
        //   title: 'Brand',
        //   content: ['Apple', 'Samsung', 'Sony'],
        // },
    ];

    const [openSections, setOpenSections] = useState({});

    const toggleSection = (id) => {
        setOpenSections((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };


    const faqactive = (item) => {
        const filtereddata = data.filter((elem, i) => {
            const ratingnum = Number(elem.product_star_rating);
            console.log(elem.product_star_rating > ratingnum)
            return ratingnum > item;
        });
        console.log(filtereddata)
        // setData(filtereddata)
        setVisibleData(filtereddata)
        // console.log(item)
    }




    if (error) return <Loadinglist />

    if (!error)
        return (
            <Container fluid>
                <Row>
                    <Col lg={2} className='mt-4 position-sticky h-100 top-25 '>
                        <div className="filter-product-list p-3">
                            <div className="filter-heading">
                                <p className='m-0'>Filter</p>
                                <hr className='mt-0' />
                            </div>
                            <div className="filter-price">
                                <div className="filter-price-heading d-flex justify-content-between">
                                    <p>Price</p>
                                    <p className='clear-price' onClick={() => setValues([1000])} style={{ cursor: "pointer" }}>clear</p>
                                </div>
                                <Range
                                    label="Select your value"
                                    step={100}
                                    min={500}
                                    max={50000}
                                    values={values}
                                    onChange={(values) => changeprice(values)}
                                    renderTrack={({ props, children }) => (
                                        <div
                                            {...props}
                                            style={{
                                                ...props.style,
                                                height: "6px",
                                                width: "100%",
                                                backgroundColor: "#0d6efd",
                                            }}
                                        >
                                            {children}
                                        </div>
                                    )}
                                    renderThumb={({ props }) => (
                                        <div className='range-icon'
                                            {...props}
                                            key={props.key}
                                            style={{
                                                ...props.style,
                                                top: "0%",
                                                borderRadius: "50%",
                                                height: "20px",
                                                width: "20px",
                                                backgroundColor: "#0d6efd",
                                            }}
                                        />
                                    )}
                                />
                                <div className="price-range d-flex justify-content-center mt-3">
                                    <p className='price-starting'>500</p>-
                                    <p className='price-ending'>{values}</p>
                                </div>
                            </div>

                            <div className="filter-faq mt-3">
                                <div className="customer-rating">
                                    <div className="accordion-container">
                                        {faqs.map((faq) => (
                                            <div className="faq-section" key={faq.id}>
                                                <div
                                                    className="faq-heading d-flex justify-content-between"
                                                    onClick={() => toggleSection(faq.id)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <p className="m-0 me-2 faq-title">{faq.title}</p>
                                                    <div className="down-icon">
                                                        {openSections[faq.id] ? <FaChevronUp /> : <FaChevronDown />}
                                                    </div>
                                                </div>

                                                {openSections[faq.id] && (
                                                    <div className="faq-content">
                                                        {faq.content.map((item, index) => (
                                                            <div key={index} className="faq-item">
                                                                <input type="radio" name={faq.title} id={`${faq.id}-${index}`} onChange={() => faqactive(item)} />
                                                                <label htmlFor={`${faq.id}-${index}`}>
                                                                    {item}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                                <hr />
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col lg={10}>
                        <div className="showing-product-lists p-3 mt-4">
                            <p className='product-list-heading d-inline me-3'>
                                {id}
                            </p>
                            <div className="total-items d-inline">
                                (Showing 1 – 48 products of 656 products)
                            </div>

                            <div className="sorting-list d-flex align-items-center mt-3">
                                <p className=' m-0 me-4 sorting-head'>Sort By</p>
                                {sortingArray.map((elem) => {
                                    return (
                                        <p key={elem} onClick={() => setSortBy(elem)} className=' m-0 me-3 sort-by-list' style={{ borderBottom: elem === sortBy ? "2px solid blue" : "none", color: elem === sortBy ? "blue" : "black" }}>{elem}</p>
                                    )
                                })}
                            </div>

                            <InfiniteScroll className='mt-3'
                                dataLength={visibleData.length}
                                next={fetchMoreData}
                                hasMore={hasMore}
                                loader={<Loadinglist />}
                                endMessage={<NextButton data={loadmore} page={page} />}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: "hidden" }}
                            >
                                <Row>
                                    {visibleData.map((elem) => {
                                        const title = elem.product_title.slice(0, 40)
                                        // console.log(elem)
                                        const linked = "/Productdetail/" + elem.asin;
                                        return (
                                            <Col key={elem.asin} lg={3} md={4} className='mb-3 position-relative overflow-hidden productlist-main col-6'>
                                                <div className="productlist-items p-2">
                                                    {elem.is_amazon_choice && <div className='best-seller'>Meget Choice</div>}
                                                    <div className="add-to-cart position-absolute top-0" onClick={() => addingToCart(elem)}>
                                                        <CiHeart size={30} />
                                                    </div>
                                                    <Link to={linked} as={NavLink}>
                                                        <div className="product-item-img">
                                                            <img src={elem.product_photo} className='img-fluid mx-auto d-block' alt="" loading='lazy' />
                                                        </div>
                                                        <div className="about-product mt-2">
                                                            <div className="isPrime">{elem.is_prime && <><p className='m-0'>Sponsored<IoMdInformationCircleOutline className='me-1' /></p></>}</div>
                                                            <div className="product-item-title">
                                                                <p className='m-0'>{title}...</p>
                                                            </div>
                                                            <div className="product-item-price d-flex mt-1">
                                                                <p className='discount-price mz-1 m-0'>{elem.product_price}</p>
                                                                <p className='original-price m-0'>{elem.product_original_price}</p>
                                                            </div>

                                                            {elem.product_badge && <div className="product-bedge">
                                                                <p>{elem.product_badge}</p>
                                                            </div>}
                                                            <div className="total-sales">
                                                                <p>{elem.sales_volume}</p>
                                                            </div>
                                                            <div className="delivery-time">
                                                                <p>{elem.delivery}</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </InfiniteScroll>
                        </div>
                    </Col>
                </Row>
            </Container >
        )

}
