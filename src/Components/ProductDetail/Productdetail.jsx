import React, { useEffect, useState } from 'react'
import './Productdetail.css'
import { useParams, useSearchParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from "react-icons/fa";

export default function Productdetail() {

  const id = useParams();
  // console.log(id.id)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  // const [imge, setImge] = useState(data.product_photo)


  const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${id.id}&country=IN`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'bd52f8d6a4msh8eb450807febe1bp1b3e5djsn175ae6c6f60b',
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };


  useEffect(() => {

    const fetchdata = async () => {
      const cachedData = localStorage.getItem("Productdetail");
      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false)
        console.log(JSON.parse(cachedData))
        return
      }
      // console.log(data)


      // try {
      //   const response = await fetch(url, options);
      //   const result = await response.json();
      //   setData(result.data)
      setLoading(false)
      //   localStorage.setItem("Productdetail", JSON.stringify(result.data))
      // } catch (error) {
      //   console.error(error);
      // }

    }

    fetchdata();

  }, [id])

  const calculatePrice = () => {
    const cleanPrice1 = data.product_original_price.replace(/[^0-9.]/g, ""); // removes ₹, commas, etc.
    const cleanPrice2 = data.product_price.replace(/[^0-9.]/g, "");

    const originalPrice = Number(cleanPrice1);
    const discountPrice = Number(cleanPrice2);


    const discount = ((originalPrice - discountPrice) / originalPrice) * 100
    console.log(discount)
    const finaldiscount = Math.floor(discount)
    // console.log(finaldiscount)
    return finaldiscount

  }

  const changepic = (elem) => {
    setData(prev => ({ ...prev, product_photo: elem }))
  }



  if (loading) return;

  return (
    <div>

      <Container fluid>
        <Row>
          <Col lg={5}>
            <div className='Product-images'>
              <Row>
                <Col lg={2}>
                  <div className="Product-small-imgs">
                    <div className="product-img-list">
                      {data.product_photos.map((elem, index) => {
                        console.log(elem)
                        return (
                          <div className="img-list mb-2" key={index}>
                            <img src={elem} alt="" onMouseEnter={() => changepic(elem)} />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </Col>
                <Col className='d-flex justify-content-center align-items-center'>
                  <div className="Product-main-img ">
                    <img src={data.product_photo} alt="" className='img-fluid' />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={5}>
            <div className="product-details-content">
              <div className="product-title">
                <p>{data.product_title}</p>
              </div>
              <div className="product-brand">
                <p>Brand: {data.product_details?.Brand}</p>
              </div>
              <div className="product-ratings d-flex ">
                <div className="rating-stars d-flex justify-content-center" style={{ backgroundColor: data.product_star_rating > 4 ? "green" : data.product_star_rating >= 3 ? "orange" : "red", color: "white" }}>
                  {data.product_star_rating} <FaStar color='white' className='start-icon' />
                </div>
                <div className="rating-number ms-2">{data.product_num_ratings}  Ratings
                </div>
              </div>
              <div className="product-price">
                <p>{calculatePrice()} %</p>
                <div className="paying-price"></div>
              </div>
            </div>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>

    </div>
  )
}
