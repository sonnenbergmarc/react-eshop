import React from "react";
import "../css/Product.css";

function Product() {
    return (
        <div>
            <div className="product">
                <div className="product__info">
                    <p>Title</p>
                    <p className="proudct__price">$30</p>
                    <div className="product__rating"></div>
                </div>

                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Product