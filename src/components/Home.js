import React from "react";
import '../css/Home.css';
import onlineShopImage from '../img/online-shop-768.webp';
// import acUnitImage from "../img/acunit-720.webp";
// import tvMountImage from "../img/tvmount-720.webp";
// import backpackImage from "../img/backpack-720.webp";
// import playstationFiveImage from "../img/playstationfive-720.webp";
// import xboxXImage from "../img/xboxx-720-720.webp";
// import tvImage from "../img/tv-720.webp";
// import shoesImage from "../img/shoes-720.webp";
import Product from "./Product";

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src={onlineShopImage} alt="Online Shopping Cartoon" className="home__image" />

                    <div className="home__row">
                        <Product
                            id="12321341" 
                            title="SereneLife Portable Electric Air Conditioner Unit-900W 8000 BTU Power Plug-in AC Cold Indoor Room Conditioning System"
                            price={120.99}
                            rating={4}
                            image="src={acUnitImage} alt='Air conditioning unit with remote.'"
                        />
                        <Product 
                        id="12321342"
                        title="Full Motion TV Monitor Wall Mount Bracket Articulating Arms Swivels Tilts Extension Rotation for Most 13-42"
                        price={32.96}
                        rating={5}
                        image="src={tvMountImage} alt='TV swivel wall mount.'"
                        />
                    </div>

                    <div className="home__row">
                        <Product 
                            id="12321343"
                            title="Samsung 55 inch TU7000 4K Ultra HD HDR Smart TV"
                            price={605.65}
                            rating={5}
                            image="src={tvImage} alt='Samsung 55 Inch TV.'"
                        />
                        <Product 
                            id="12321344"
                            title="Four Herringbone Bags For Work Or Travel"
                            price={204.99}
                            rating={3}
                            image="src={backpackImage} alt='Four brown travel bags.'"
                        />
                        <Product 
                            id="12321345"
                            title="Sony PS5 Playstation Gaming Console - 16GB GDDR6 Memory, Ultra-High Speed 825GB SSD, 4K Blu-ray Player, WiFi 6, Bluetooth 5.1, Ethernet, 120Hz 8K Output"
                            price={986.65}
                            rating={5}
                            image="src={playstationFiveImage} alt='Playstation 5 console with controller.'"
                        />
                    </div>

                    <div className="home__row">
                        <Product 
                            id="12321346"
                            title="Xbox Series X - Forza Horizon 5 Bundle"
                            price={655.28}
                            rating={5}
                            image="src={xboxXImage} alt='Xbox Series X Console with Forza Horizon 5 bundle.'"                        
                        />
                        <Product 
                            id="12321347"
                            title="Adidas Men's Daily 3.0 Skate Shoe - Navy"
                            price={90.65}
                            rating={4}
                            image="src={shoesImage} alt='Navy Adida shoes.'"                        
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home