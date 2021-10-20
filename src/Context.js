import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url =
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        // Get the data from the api
        // save the data to state
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    // Don't modify state directly!!
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if (photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })

        setAllPhotos(updatedArr)
    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    console.log(cartItems)

    return (
        <Context.Provider value={{ allPhotos, toggleFavorite, addToCart, cartItems }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }