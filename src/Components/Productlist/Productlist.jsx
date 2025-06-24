import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Productlist.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import InfiniteScroll from 'react-infinite-scroll-component';
import Loadinglist from './Loadinglist';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import NextButton from './NextButton';
import { useDispatch } from 'react-redux';
import { addItems } from '../Cart/Slice';
import toast, { Toaster } from 'react-hot-toast';


export default function ProductList() {
    const { id } = useParams();

    // console.log("api called")

    const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState([])
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    const itemsPerPage = 12;
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchProducts = async () => {
            setError(null);
            // setHasMore(true);
            // console.log(id)
            const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${id}&page=${page}&country=IN&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`;
            const options = {
                headers: {
                    // ashish rathee 
                    // 'x-rapidapi-key': 'ba5add63eamsh923b36e54af893ep14f893jsn0aaa91cf53f9',
                    // rathee ashish 
                    // 'x-rapidapi-key': '65585d9e15mshd5c370d9d7ed9b9p1dd305jsn98f4ca42270f',
                    // 'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
                    // disha 
                    'x-rapidapi-key': 'bd52f8d6a4msh8eb450807febe1bp1b3e5djsn175ae6c6f60b',
                    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
                }
            };
            try {
                const res = await axios.get(url, options);
                console.log((res.data.data.products))
                setData(res.data.data.products);
                setVisibleData(res.data.data.products.slice(0, itemsPerPage));
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err);
            }
        };

        if (id) {
            fetchProducts();
        }

    }, [id, page]);


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

    const addingToCart = (item) => {
        useDispatch(addItems(item))
        toast.success('Item added to cart.')
    }





    if (error) return <Loadinglist />

    if (!error)
        return (
            <Container fluid='md'>
                <div id='row'>
                    {/* {page} */}
                    <InfiniteScroll className='mt-4'
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
                                // console.log(title)
                                const linked = '/Productdetail/' + elem.asin;
                                return (
                                    <Col key={elem.asin} xl={2} lg={3} md={4} className='mb-3 position-relative overflow-hidden productlist-main col-6'>
                                        <Link to={linked} as={NavLink}>
                                            <div className="productlist-items p-2">
                                                {elem.is_amazon_choice && <div className='best-seller'>Meget Choice</div>}
                                                <div className="add-to-cart position-absolute top-0" onClick={addingToCart}>
                                                    <CiHeart size={30} />
                                                </div>
                                                <div className="product-item-img">
                                                    <img src={elem.product_photo} className='img-fluid mx-auto d-block' alt="" />
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
                                            </div>
                                        </Link>
                                    </Col>
                                )
                            })}
                        </Row>
                    </InfiniteScroll>
                </div>
            </Container>
        )



}
