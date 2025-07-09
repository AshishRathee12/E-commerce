import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Suggestion from './Suggestion';

export default function SuggestionList() {

    const Electronic = [
        {
            listitem: "Mobiles",
            listgroup: ["Apple", "Samsung", "OnePlus", "Xiaomi", "Realme", "Vivo", "Oppo", "iQOO", "Motorola", "Nokia", "Google", "Asus", "Infinix", "Tecno", "Lava"]
        },
        {
            listitem: "Mobile Accessories",
            listgroup: ["Phone Cases & Covers", "Screen Protectors", "Power Banks", "Chargers & Adapters", "Earphones & Headphones", "Mobile Holders & Stands", "Wireless Chargers", "USB", "Memory Cards", "Selfie Sticks"]
        },
        {
            listitem: "Laptops",
            listgroup: ["Gaming Laptop", "Dell", "HP", "Lenovo", "Asus", "Apple"]
        },
        {
            listitem: "Cameras",
            listgroup: ["DSLR Cameras", "Mirrorless Cameras", "Action Cameras", "Point & Shoot Cameras", "Instant Cameras", "360-Degree Cameras", "Camcorders", "Drone Cameras", "Canon", "Nikon"]
        },
        {
            listitem: "Important Electronic Items",
            listgroup: ["Smartphones", "Laptops", "Tablets", "Televisions", "Refrigerators", "Washing Machines", "Microwave Ovens", "Air Conditioners", "Ceiling Fans", "Water Heaters", "Bluetooth Speakers", "Printers", "Smartwatches", "CCTV Cameras", "Wi-Fi Routers"]
        }

    ];

    const TvAppliences = [
        {
            listitem: "Small Home Appliances",
            listgroup: ["Electric Iron", "Handheld Vacuum Cleaner", "Electric Fan", "Hair Dryer", "Electric Heater", "Air Purifier", "Water Heater", "Electric Grill", "Food Steamer", "Electric Toothbrush", "Electric Shaver", "Garment Steamer", "Coffee Grinder", "Electric Kettle", "Portable Air Conditioner"]
        },
        {
            listitem: "TVs",
            title: "TVs",
            listgroup: ["Samsung", "LG", "Sony", "Panasonic", "TCL", "Hisense", "Xiaomi", "OnePlus", "Vizio", "Philips"]
        },
        {
            listitem: "TV Sizes",
            title: "tv",
            listgroup: ["32 Inch ", "43 Inch ", "50 Inch ", "55 Inch ", "65 Inch "]
        },
        {
            listitem: "Washing Machines",
            listgroup: ["Top Load Washing Machine", "Front Load Washing Machine", "Semi Automatic Washing Machine", "Fully Automatic Washing Machine", "Washer Dryer Combo"]
        },
        {
            listitem: "Kitchen Appliances",
            title: "Kitchen",
            listgroup: ["Microwave Oven", "Refrigerator", "Electric Kettle", "Mixer Grinder", "Toaster", "Coffee Maker", "Blender", "Food Processor", "Dishwasher", "Induction Cooktop", "Rice Cooker", "Slow Cooker", "Juicer", "Air Fryer", "Water Purifier"]
        },

    ];

    const MensFashion = [
        {
            listitem: "Men Winter Styles",
            title: "Men",
            listgroup: ["Woolen Overcoat", "Puffer Jacket", "Leather Jacket", "Wool Sweater", "Thermal Underwear", "Down Vest", "Fleece Jacket", "Trench Coat", "Wool Scarf", "Beanie Hat", "Gloves", "Boots", "Hooded Parka", "Cable Knit Sweater", "Turtleneck Sweater"]
        },
        {
            listitem: "Footwear Styles",
            title: "Men",
            listgroup: ["Sneakers", "Loafers", "Derby Shoes", "Brogues", "Chelsea Boots", "Chukka Boots", "Monk Strap Shoes", "Sandals", "Running Shoes", "Slip-ons"]
        },
        {
            listitem: "Men's Grooming Items",
            title: "Men",
            listgroup: ["Beard Trimmer", "Electric Shaver", "Hair Clipper", "Aftershave Lotion", "Face Wash"]
        },
        {
            listitem: "Men's Summer Wear",
            title: "Men",
            listgroup: ["Cotton T-Shirts", "Linen Shirts", "Shorts", "Sunglasses", "Flip Flops", "Tank Tops", "Chino Pants", "Baseball Caps", "Lightweight Polo Shirts", "Sandals"]
        },
        {
            listitem: "Men's Bottom and Top Wear",
            title: "Men",
            listgroup: ["Jeans", "Chinos", "Cargo Pants", "Shorts", "Sweatpants", "Formal Trousers", "T-Shirts", "Casual Shirts", "Dress Shirts", "Polos", "Sweaters", "Hoodies", "Jackets", "Blazers", "Henley Shirts"]
        }
    ];

    const WomensFashion = [
        {
            listitem: "Women Winter Styles",
            title: "women",
            listgroup: ["Woolen Coat", "Puffer Jacket", "Leather Jacket", "Wool Sweater", "Thermal Leggings", "Down Vest", "Fleece Jacket", "Trench Coat", "Wool Scarf", "Beanie Hat", "Gloves", "Ankle Boots", "Hooded Parka", "Cable Knit Sweater", "Turtleneck Sweater"]
        },
        {
            listitem: "Footwear Styles",
            title: "women",
            listgroup: ["Sneakers", "Ballet Flats", "Heels", "Loafers", "Ankle Boots", "Chelsea Boots", "Sandals", "Wedges", "Running Shoes", "Slip-ons"]
        },
        {
            listitem: "Women's Beauty Styles",
            title: "women",
            listgroup: ["Natural Makeup", "Bold Lipstick", "Matte Finish", "Winged Eyeliner", "Glitter Makeup", "Bronzed Look", "Minimalist Makeup"]
        },
        {
            listitem: "Women's Summer Wear",
            title: "women",
            listgroup: ["Cotton Tops", "Linen Dresses", "Shorts", "Sunglasses", "Flip Flops", "Tank Tops", "Capri Pants", "Sun Hats", "Lightweight Blouses", "Sandals"]
        },
        {
            listitem: "Women's Bottom and Top Wear",
            title: "women",
            listgroup: ["Jeans", "Skirts", "Leggings", "Shorts", "Sweatpants", "Formal Trousers", "Tops", "Casual Shirts", "Blouses", "Polos", "Sweaters", "Cardigans", "Jackets", "Blazers", "Tunics"]
        }
    ];

    const KidsAndBabyCare = [
        {
            listitem: "Baby Care",
            title: "kids",
            listgroup: [" Diapers", " Wipes", " Lotion", " Shampoo", " Powder", " Bottles", "Pacifiers", " Clothes", " Blankets", " Toys", "Feeding", " Stroller", " Monitor", "Baby Food", "Teething Rings"]
        },
        {
            listitem: "Boy",
            title: "Baby Boy",
            listgroup: ["Onesies Clothes", "Rompers Clothes", "T-Shirts Clothes", "Shorts Clothes", "Sleepwear Clothes", "Jackets Clothes", "Booties Clothes", "Hats Clothes"]
        },
        {
            listitem: "Girl",
            title: "Baby Girl",
            listgroup: ["Dresses Clothes", "Rompers Clothes", "T-Shirts Clothes", "Skirts Clothes", "Sleepwear Clothes", "Cardigans Clothes", "Booties Clothes", "Headbands Clothes"]
        },
        {
            listitem: "Kids Toys",
            title: "Toys",
            listgroup: ["Building Blocks", "Action Figures", "Dolls", "Remote Control Cars", "Puzzle Games", "Stuffed Animals", "Board Games", "Educational Toys", "Toy Trains", "Water Guns", "Play-Doh", "Lego Sets", "Musical ", "Outdoor Swing", "Toy Robots"]
        }
    ];

    const sportsAndBooks = [
        {
            listitem: "Books",
            listgroup: ["Fiction", "Non-Fiction", "Mystery", "Thriller", "Science Fiction", "Fantasy", "Biography", "Self-Help", "History", "Romance", "Horror", "Children's Books", "Cookbooks", "Poetry", "Travel Guides"]
        },
        {
            listitem: "Food Essentials Categories",
            listgroup: ["Grains & Cereals", "Pulses & Lentils", "Edible Oils", "Spices & Condiments", "Dairy Products", "Baking Essentials", "Snacks & Namkeen", "Tea & Coffee", "Sweeteners (Sugar, Jaggery, Honey)", "Vegetables", "Fruits", "Packaged Foods", "Frozen Foods", "Beverages", "Ready-to-Cook Items"]
        },
        {
            listitem: "Fitness Equipment",
            listgroup: ["Treadmill", "Exercise Bike", "Dumbbells", "Kettlebells", "Resistance Bands", "Yoga Mat", "Pull-Up Bar", "Rowing Machine", "Elliptical Trainer", "Medicine Ball", "Foam Roller", "Skipping Rope", "Ab Roller", "Weight Bench", "Power Rack"]
        }
    ];







    return (
        <Container fluid className='suggest-lists'>
            <Suggestion name={["Electronic", "TV & Appliences", "Men's", "Women's", "Kids & Baby"]} data={[Electronic, TvAppliences, MensFashion, WomensFashion, KidsAndBabyCare]} />




        </Container>
    )
}
