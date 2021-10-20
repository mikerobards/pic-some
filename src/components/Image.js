import React, { useState, useContext } from "react";
import PropTypes from "prop-types"
import { Context } from "../Context";

function Image({ className, img }) {
    const [hovered, setHovered] = useState(false)
    const { toggleFavorite, addToCart, cartItems } = useContext(Context)

    function heartIcon() {
        if (img.isFavorite) {
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>
        } else if (hovered) {
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        // if the item is already in the cart, return <i className="ri-shopping-cart-fill cart"></i>
        // else if the image is being hovered return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        if (alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart"></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }


    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid" alt="" />
            {heartIcon()}
            {cartIcon()}
        </div >
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image