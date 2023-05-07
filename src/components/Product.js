import React from "react";
import "../css/Product.css";
import acUnitImage from "../img/acunit-720.webp"

function Product() {
    return (
        <div>
            <div className="product">
                <div className="product__info">
                    <p>SereneLife Portable Electric Air Conditioner Unit-900W 8000 BTU Power Plug-in AC Cold Indoor Room Conditioning System</p>
                    <p className="product__price">
                        <small></small>
                        <strong>$30</strong>
                    </p>
                    <div className="product__rating">⭐⭐</div>
                </div>

                <img src={acUnitImage} alt="Air conditioning unit with remote." />

                <button>Add to Basket</button>
            </div>
        </div>
    )
}

export default Product