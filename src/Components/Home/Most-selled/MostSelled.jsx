import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import './MostSelled.css'
import Expendselled from './Expend-selled';
import { Link, NavLink } from 'react-router-dom';
export default function MostSelled() {


    const Fashionlist = [
        {
            listitem: "Men's Top wear",
            listgroup: ["Men's T-Shirt", "Men's Casual Shirts", "Mens Formal Shirts", "Men's Kurta", "Men's Blazers", "Men's Raincoat", "Men's Suit"]
        },
        {
            listitem: "Men's Bottom Wear",
            listgroup: ["Men's Jeans", "Men's Trousers", "Men's Trackpants", "Men's Shorts", "Men's Cargos", "Men's Dhoti", "Men's Pyjamas"]
        },
        {
            listitem: "Women Ethnic",
            listgroup: ["Women Sarees", "Women Kurta", "Women Gowns", "Women Blouse", "Women Dupatta", "Women Palazzos", "Women Salwar & Suits"]
        },
        {
            listitem: "Men Footwear",
            listgroup: ["Men's Sports Shoes", "Men's Casual Shoes", "Men's Sandals", "Men's Formal shoes", "Men's Flip Flop"]
        },
        {
            listitem: "Women Footwear",
            listgroup: ["Women Flats", "Women Heels", "Women Wedges", "Women Casual Shoes", "Women Sports Shoes", "Women Sneakers", "women Boots", "Women Ballerinas"]
        },
        {
            listitem: "Bags,SuitCase & Luggage",
            listgroup: ["Bags", "SuitCase", "Trolleys", "Dufflebags", "Rucksacks", "Handbags", "Slingbags"]
        },
        {
            listitem: "Essentials",
            listgroup: ["Men's vests", "Men's Boxers", "Men's Trunks", "Women Bra", "Women Panty", "Women Sarees", "Women Kurtas", "Boys Innerwear", "Girls Innerwear", ""]
        },
        {
            listitem: "Winter",
            listgroup: ["Men's Jackets", "Men's Sweatshirts", "Men's Thermals", "women Jackets", "Women Shrugs", "Kids Jackets", "Women Cardigans"]
        }
    ]

    const Electroniclist = [
        {
            listitem: "Audio",
            listgroup: ["Bluetooth Headphones", "Wired Headphones", "Bluetooth Speakers", "Soundbars", "Home Theaters", "Remote Control", "TV", "Headphones pouch"]
        },
        {
            listitem: "Cameras & Accessories",
            listgroup: ["DSLR", "Camcorders", "Camera tripods", "Camera Lenses", "Drone", "Flashes", "Gimbals", ""]
        },
        {
            listitem: "Computer Peripherals",
            listgroup: ["Printers", "Monitors", "Projectors", "Ink Bottles", "Barcode Scanners", "Receipt Printer", "Ink Cartridges"]
        },
        {
            listitem: "Gaming",
            listgroup: ["Gaming Console", "Gaming Mouse", "Gaming Keyboard", "Gamepads", "Controllers", "Gaming Mousepads", "Games"]
        },
        {
            listitem: "Health & Personal care",
            listgroup: ["Trimmers", "Shavers", "Hair Straighteners", "Hair Dryers", "Blood Pressure Monitores", "Massagers", "Weighing Scales", "Digital Thermometer", "Vaporizers"]
        },
        {
            listitem: "Laptop Accessories",
            listgroup: ["Mouse", "Laptop Keyboard", "Router", "Data Cards", "UPS", "USB Gadgets", "Security Software", "Laptop Battery", "Laptop Adapter", "Processor"]
        },
        {
            listitem: "MobileAccessory",
            listgroup: ["Plain Cases", "Designer cases", "Screen Guards", "MobileCable", "MobileFlash", "MobileHolder"]
        }, {
            listitem: "Powerbank",
            listgroup: ["Powerbank"]
        },
        {
            listitem: "Smart Home automation",
            listgroup: ["Smart Assistants", "Smart Lights", "Smart Cameras", "Smart Switches", "Smart Door locks", "Sensors & Alarms"]
        },
        {
            listitem: "Storage",
            listgroup: ["MobileMemoryCard", "ComputerStoragePendrive", "ExternalHarddrive", "InterHardDrive"]
        }
    ]



    return (
        <div className='trend'>
            <Container fluid>
                <Row className='mt-3  flex-nowrap trend-row '>
                    <Col>
                        <Link to={"/product-list/Kilos"} as={NavLink}>
                            <div className="kilos trend-items">
                                <div className="kilos-img mostselled-img">
                                    <img src="../../../images/Trend-img/cleaner-png.png" alt="" />
                                </div>
                                <div className="kilos-heading mostselled-head">
                                    <p className='Selled-head'>Kilos</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link to={"/product-list/mobiles"} as={NavLink}>
                            <div className="mobiles trend-items">
                                <div className="mobiles-img mostselled-img">
                                    <img src="../../../images/Trend-img/Mobile.jpg" alt="" />
                                </div>
                                <div className="mobiles-heading  mostselled-head">
                                    <p className='m-0 Selled-head'>Mobiles</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Expendselled image={"../../../images/Trend-img/fashion.png"} name="fashion" fashionlist={Fashionlist} />
                    </Col>
                    <Col>
                        <Expendselled image={"../../../images/Trend-img/electronic-png.png"} name="Electronic" fashionlist={Electroniclist} />
                    </Col>
                    <Col>
                        <Link to={"/product-list/Furniture"} as={NavLink}>

                            <div className="Furniture trend-items">
                                <div className="Electronic-img mostselled-img">
                                    <img src="../../../images/Trend-img/furniture.png" alt="" />
                                </div>
                                <div className="furniture-heading  mostselled-head">
                                    <p className='m-0 Selled-head'>Furniture</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link to={"/product-list/Toys"} as={NavLink}>

                            <div className="Toys trend-items">
                                <div className="Toys-img mostselled-img">
                                    <img src="../../../images/Trend-img/topys-png.png" alt="" />
                                </div>
                                <div className="Toys-heading  mostselled-head">
                                    <p className='m-0 Selled-head'>Toys</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link to={"/product-list/Beauty"} as={NavLink}>

                            <div className="Beauty trend-items">
                                <div className="Beauty-img mostselled-img">
                                    <img src="../../../images/Trend-img/beauty-png.png" alt="" />
                                </div>
                                <div className="Beauty-heading  mostselled-head">
                                    <p className='m-0 Selled-head'>Beauty</p>
                                </div>
                            </div>
                        </Link>
                    </Col>

                </Row>
            </Container>
        </div >
    )
}
