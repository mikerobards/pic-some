import React, { useContext } from "react";
import PropTypes from "prop-types"
import { Context } from "../Context";
import useHover from "../hooks/useHover"

function Image({ className, img }) {
    // const [hovered, setHovered] = useState(false)
    const [hovered, ref] = useHover()
    const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(Context)

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
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }


    return (
        <div
            className={`${className} image-container`}
            ref={ref}
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