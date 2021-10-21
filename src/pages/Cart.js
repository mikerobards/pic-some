import React, { useState, useContext } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const { cartItems, emptyCart } = useContext(Context)
    const cartTotalCost = cartItems.length * 5.99
    const totalCostDisplay = cartTotalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    console.log(cartItems)

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order Placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                <button onClick={placeOrder}>{buttonText}</button>
            </div>
        </main>
    )
}

export default Cart