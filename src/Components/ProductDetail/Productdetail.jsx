import React, { useEffect, useState } from 'react'
import './Productdetail.css';
import { Link, NavLink } from 'react-router-dom';
import { useParams, useSearchParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import ReactImageMagnify from 'react-image-magnify';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBolt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { addItems } from '../Cart/Slice';
import ProductLoading from './ProductLoading';

export default function Productdetail() {


  // for product detail api ====

  const id = useParams();
  // console.log(id.id)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [rating, setRating] = useState([])

  const dispatch = useDispatch()

  // for see more option 
  const [see, setSee] = useState(false)

  // const [imge, setImge] = useState(data.product_photo)
  const reduxdata = useSelector(state => state.Item)

  const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${id.id}&country=IN`;
  const options = {
    method: 'GET',
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


  useEffect(() => {

    const fetchdata = async () => {
      // const cachedData = localStorage.getItem("Productdetail");
      // if (cachedData) {
      //   setData(JSON.parse(cachedData));
      //   console.log(JSON.parse(cachedData))
      //   setLoading(false)
      //   // console.log(JSON.parse(cachedData))
      //   return
      // }
      // console.log(data)


      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        setData(result.data)
        setLoading(false)
        console.log("api 1 called")
        // localStorage.setItem("Productdetail", JSON.stringify(result.data))
      } catch (error) {
        console.error(error);
      }

    }

    fetchdata();

  }, [id])

  const calculatePrice = () => {
    const cleanPrice1 = data.product_original_price?.replace(/[^0-9.]/g, "") || 0;
    const cleanPrice2 = data.product_price?.replace(/[^0-9.]/g, "") || 0;

    const originalPrice = Number(cleanPrice1);
    const discountPrice = Number(cleanPrice2);

    if (originalPrice === 0) return 0;

    const discount = ((originalPrice - discountPrice) / originalPrice) * 100;

    return Math.floor(discount);
  };



  const changepic = (elem) => {
    setData(prev => ({ ...prev, product_photo: elem }))
  }

  const seemore = () => {
    setSee(!see)
  }

  useEffect(() => {
    if (data.rating_distribution && data.rating_distribution.length !== 0) {
      // console.log(data.rating_distribution)
      const arr = data.rating_distribution;
      let rate = 0;

      for (let key in arr) {
        rate += arr[key];
      }

      const perrating = Object.values(arr).map((elem) => {
        return (elem / rate) * 100;
      });

      // console.log(perrating);
      perrating.reverse()
      setRating(perrating);
    }
  }, [data]);


  // adding to cart 
  const addTocart = (elem2) => {
    const exists = reduxdata.some((elem) => elem.asin === elem2.asin);

    if (!exists) {
      dispatch(addItems(elem2))
      toast.success('Item added to cart.')
    }
  }









  // for product review api 

  const [reviewslist, setReviewslist] = useState([])
  const [reviewpage, setReviewpage] = useState(1)
  const reviewarr = [1, 2, 3, 4]

  const url2 = `https://real-time-amazon-data.p.rapidapi.com/product-reviews?asin=${id.id}&country=IN&page=${reviewpage}&sort_by=TOP_REVIEWS&star_rating=ALL&verified_purchases_only=false&images_or_videos_only=false&current_format_only=false`;
  const options2 = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
      // 'x-rapidapi-key': 'ba5add63eamsh923b36e54af893ep14f893jsn0aaa91cf53f9',

      // rathee ashish 
      'x-rapidapi-key': '65585d9e15mshd5c370d9d7ed9b9p1dd305jsn98f4ca42270f',

    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      // const localReviews = localStorage.getItem("Reviews");
      // if (localReviews) {
      //   const reviewlocal = JSON.parse(localReviews);
      //   console.log(reviewlocal)
      //   setReviewslist(reviewlocal);
      //   // console.log(reviewlocal)
      //   return;
      // }
      document.body.style.cursor = 'wait';

      try {
        const response = await fetch(url2, options2);
        const result = await response.json();
        // localStorage.setItem("Reviews", JSON.stringify(result.data))
        console.log(result.data)
        setReviewslist(result.data)
        // console.log("api2 called")
        document.body.style.cursor = 'pointer';
      } catch (error) {
        console.error(error);
        // }
      }
    }
    fetchdata();
  }, [id, reviewpage])

  const loadreview = (elem) => {
    setReviewpage(elem)
  }

  if (loading) return <div><ProductLoading /></div>;

  return (
    <div>
      <div className='mt-2'><Toaster
        position="bottom-center"
        reverseOrder={false}
      /></div>
      <Container >
        <Row>
          <Col lg={5} className='h-100 top-0 position-sticky'>
            <div className='Product-images'>
              <Row>
                <Col lg={2}>
                  <div className="Product-small-imgs">
                    <div className="product-img-list">
                      {data?.product_photos.map((elem, index) => {
                        // console.log(elem)
                        return (
                          <div className="img-list mb-2" key={index}>
                            <img src={elem} alt="" onMouseEnter={() => changepic(elem)} loading='lazy' />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </Col>
                <Col className='img-magnify'>
                  <ReactImageMagnify {...{
                    smallImage: {
                      alt: 'Cannot be loaded',
                      isFluidWidth: true,
                      src: data.product_photo,
                      // sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                    },
                    largeImage: {
                      src: data.product_photo,
                      width: 1600,
                      height: 1800
                    },
                    enlargedImageContainerDimensions: {
                      width: '170%',
                      height: '140%'
                    },

                  }} />
                  <div className="purchase-btn d-flex mt-4">
                    <div className="Add-to-cart me-3 w-50">
                      <button onClick={() => addTocart(data)}>
                        <MdOutlineShoppingCart size={32} color='#fff me-1' />
                        Add To Cart
                      </button>
                    </div>
                    <div className="buy-now w-50">
                      <button><FaBolt size={24} className='me-1' />Buy Now</button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={7}>
            <div className="product-details-content">
              <div className="product-title">
                <p className='m-0'>{data.product_title}</p>
              </div>
              <div className="product-brand">
                <p>Brand: {data.product_details?.Brand}</p>
              </div>
              <hr />
              <div className="product-price d-flex align-items-center mt-3">
                <div className="paying-price me-2">
                  <p className='m-0'>{data.product_price}</p>
                </div>
                <div className="product_original_price me-2">
                  <p className='text-decoration-line-through m-0'>{data.product_original_price}</p>
                </div>
                <div className="price-off me-2">
                  <p className='m-0'>{calculatePrice()} % off</p>
                </div>
              </div>
              <p className='tax text-primary m-0 mb-1'>Inclusive of all taxes</p>
              <div className="product-primary-date">
                <p>Secure delivery by {data.primary_delivery_time}</p>
              </div>
              <div className="product-details" >
                {/* <h5>About this item</h5> */}
                {Object.keys(data.product_details).map((key, index) => {
                  // console.log(key)
                  if (see) {
                    return (
                      <li key={index} className="d-flex">
                        <p className="detail-key m-0 me-1">{key}:</p>
                        <p className="detail-value m-0">{data.product_details[key]}</p>
                      </li>
                    );
                  } else if (index <= 4) {
                    return (
                      <li key={index} className="d-flex">
                        <p className="detail-key m-0 me-1">{key}:</p>
                        <p className="detail-value m-0">{data.product_details[key]}</p>
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}

              </div>
              <div className="product-detail-more d-flex" onClick={seemore}>
                <div className="detail-more-icon">{see ? <FaChevronUp /> : <FaChevronDown />}</div>
                <div className="detail-more-content text-primary cursor-pointer">
                  see {see ? "less" : "more"}
                </div>
              </div>

              <div className="product-ratings mt-3">

                <div className="product-rating-head d-flex justify-content-between align-items-center p-3">
                  <div className="rating-title ">
                    <p className='m-0'>Rating & Reviews</p>
                  </div>
                  <div className="rate-product ">
                    <button>Rate Product</button>
                  </div>
                </div>

                <div className="product-rating-main d-flex mt-1 p-3">
                  <div className="product-rating-stars-part1 me-5">
                    <p className='product-stars d-flex align-items-center m-0'>{data.product_star_rating} <FaStar size={23} className='ms-2' /></p>
                    <p className='product-rating-number'>{data.product_num_ratings} Ratings</p>
                  </div>
                  <div className="product-rating-stars-part2">
                    {rating.map((elem, index) => {
                      // console.log(rating)
                      const total = rating.length;
                      // Reverse index: highest first
                      const reverseIndex = total - index;
                      // console.log(reverseIndex)
                      return (
                        <li className='d-flex align-items-center mb-1' key={index}>
                          <p className='m-0 me-2'>{reverseIndex} Star</p>
                          <meter value={elem} min="0" max="100" color='red' className={reverseIndex >= 3 ? "meter-green" : reverseIndex < 3 && reverseIndex > 1 ? "meter-orange" : "meter-red"}>{elem}</meter>
                          <p className='m-0 ms-2'>{elem}%</p>
                        </li>
                      )
                    })}
                  </div>
                </div>

                <div className="product-reviews py-4 ">
                  {reviewslist?.reviews?.map((elem) => {
                    // console.log(elem)
                    const reviewStar = elem.review_star_rating;
                    return (
                      <div className='product-review-individual mb-3 px-3' key={elem.review_id}>
                        <div className="reviews-stars-heading d-flex align-items-center mb-2">
                          <div className="review-stars d-flex align-items-center me-2 text-white" style={{ backgroundColor: reviewStar >= 3 ? "green" : reviewStar > 1 && reviewStar < 3 ? "orange" : "red" }}>{reviewStar} <FaStar size={12} className='ms-1' /></div>
                          <div className="review_title">{elem.review_title} </div>
                        </div>
                        <div className="review-comment mb-2">{elem.review_comment}</div>
                        <div className="review-images d-flex">{elem.review_images.map((elem, index) => {
                          return (
                            <img src={elem} key={index} className='img-fluid'></img>
                          )
                        })}</div>
                        <div className="review-author mt-2 d-flex mb-3">
                          <div className="author me-2">{elem.review_author}</div>
                          <div className="saler-certified-review me-2">
                            <FaCheckCircle /> Certified Buyer,
                          </div>
                          <div className="review-data">{elem.review_date}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="next-review-page d-flex justify-content-center">
                  {reviewarr.map((elem) => {
                    return (
                      <p key={elem} className='me-4' onClick={() => loadreview(elem)} style={{ color: elem == reviewpage ? " blue" : "grey" }}>{elem}</p>
                    )
                  })}
                </div>
              </div>
            </div>
          </Col>

        </Row>
        <Row className='gy-3 mt-5'>
          <div className="variation-heading">
            <p className='m-0'>Product Variations</p>
          </div>
          {data?.product_variations?.color?.map((elem, index) => {
            return (
              <Col key={index} lg={2} className='product-variations'>
                <Link to={`/Productdetail/` + elem.asin} as={NavLink}>
                  <img src={elem.photo} className="img-fluid" loading='lazy'></img>
                </Link>
              </Col>
            )
          })}
        </Row>
      </Container >

    </div >
  )
}
