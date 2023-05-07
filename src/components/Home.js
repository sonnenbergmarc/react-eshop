import React from "react";
import '../css/Home.css';
import onlineShopImage from '../img/online-shop-768.webp';
import Product from "./Product";

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src={onlineShopImage} alt="Online Shopping Cartoon" className="home__image" />

                    <div className="home__row">
                        <Product />
                        <Product />
                    </div>

                    <div className="home__row">
                        <Product />
                        <Product />
                        <Product />
                    </div>

                    <div className="home__row">
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home