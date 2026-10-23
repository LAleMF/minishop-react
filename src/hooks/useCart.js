import { useState } from "react"

export function useCart() {
    const [productsCart, setProductsCart] = useState([])
    const [isCartVisible, setCartVisible] = useState(false)


    function onAddToCart(product) {
        setProductsCart(previousCart => {
            const productInCart = previousCart.find(
                item => item.id === product.id
            )

            if (productInCart) {
                return previousCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

            return [...previousCart, { ...product, quantity: 1 }]
        })
    }


    function onRemoveFromCart(product) {
        const productInCartIndex = productsCart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = [...productsCart]

            if (newCart[productInCartIndex].quantity > 1) {
                newCart[productInCartIndex] = {
                    ...newCart[productInCartIndex],
                    quantity: newCart[productInCartIndex].quantity - 1
                }
            } else {
                newCart.splice(productInCartIndex, 1)
            }

            return setProductsCart(newCart)

        }

        return

    }

    function onDeleteFromCart(product) {
        setProductsCart(previousCart =>
            previousCart.filter(item => item.id !== product.id)
        )
    }

    const total = productsCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )

    function onUpdateVisibilityCart() {
        setCartVisible(previous => !previous)
    }

    return {
        productsCart, onAddToCart, onRemoveFromCart, onDeleteFromCart,
        total, isCartVisible, onUpdateVisibilityCart
    }
}