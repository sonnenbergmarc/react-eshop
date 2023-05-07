import React from "react";
import './Home.css';
import onlineShopImage from './img/online-shop-768.webp'

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src={onlineShopImage} alt="Online Shopping Cartoon" className="home__image" />
                </div>
            </div>
        </div>
    )
}

export default Home