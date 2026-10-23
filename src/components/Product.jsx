import { useState } from 'react'
import noImage from './../assets/cart.png'

export function Product({ product, onAddToCart }) {
    const [isDetailsVisible, setDetailsVisible] = useState(false)

    function onUpdateDetails() {
        setDetailsVisible(previous => !previous)
    }

    const image = product.images?.[0] || noImage

    return (
        <article className="product">
            <div className="product-image">
                <img src={image} alt={product.title} loading="lazy" />
            </div>

            <div className="product-content">
                <p className="product-category">{product.category}</p>
                <h3 className="product-title">{product.title}</h3>

                {isDetailsVisible && (
                    <p className="product-description">
                        {product.description}
                    </p>
                )}

                <p className="product-price">
                    {product.price.toFixed(2)} €
                </p>

                <div className="buttons">
                    <button
                        className="add-cart-button"
                        onClick={() => onAddToCart(product)}
                    >
                        Añadir al carrito
                    </button>

                    <button
                        className="details-button"
                        onClick={onUpdateDetails}
                        aria-expanded={isDetailsVisible}
                    >
                        {isDetailsVisible
                            ? 'Ocultar detalles'
                            : 'Ver detalles'}
                    </button>
                </div>
            </div>
        </article>
    )
}
