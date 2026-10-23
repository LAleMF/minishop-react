import { Product } from './Product'

export function Products({ filteredProducts, onAddToCart, loading, error }) {


    if (error) {
        return (
            <div className='products-message'>
                <p className='error-text'>{error}</p>
            </div>
        )
    }

    if (loading) {
        return (
            <div className='products-message'>
                <p className='loading-text'>CARGANDO...</p>
            </div>
        )
    }

    if (filteredProducts.length === 0) {
        return (
            <div className='products-message'>
                <p className='no-matches'>No hay coincidencias</p>
            </div>
        )
    }

    return (
        <div className='products'>
            {
                filteredProducts.map(product => (
                    <Product key={product.id} product={product} onAddToCart={onAddToCart} />
                ))
            }
        </div>
    )
}