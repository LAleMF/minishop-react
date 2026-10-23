import btnEliminarIcon from './../assets/btn-eliminar.png';
import noImage from './../assets/cart.png'

export function Cart({ productsCart, onAddToCart, onRemoveFromCart, onDeleteFromCart, total }) {

    const hasProducts = productsCart.length > 0

    return (
        <div className='cart'>
            <div className='productsCart'>
                {
                    hasProducts ?
                        productsCart.map(product => (
                            <div key={product.id} className='productCart'>
                                <img src={product.images?.[0] || noImage} alt={product.title} />
                                <div>
                                    <p>{product.title}</p>
                                    <span>PU: {product.price} €</span>
                                    <p>
                                        <button aria-label='decrementa' className="removeButton"
                                            onClick={() => onRemoveFromCart(product)}>
                                            -
                                        </button>
                                        {product.quantity}
                                        <button aria-label='aumenta' className="addButton"
                                            onClick={() => onAddToCart(product)}>
                                            +
                                        </button></p>
                                </div>
                                <button className='deleteButton'
                                    onClick={() => onDeleteFromCart(product)}>
                                    <img src={btnEliminarIcon} alt="boton eliminar" />
                                </button>
                            </div>
                        )) :
                        (
                            <p>No hay productos en el carro</p>
                        )
                }
            </div>
            <div className="d-grid gap-2">
                <div className='total-cart'>
                    <p>Total:</p>
                    <p>{total.toLocaleString('es-ES', {
                        style: 'currency',
                        currency: 'EUR'
                    })}</p>
                </div>
                <button className='btn btn-primary' type='button'>Finalizar compra</button>
            </div>
        </div>
    )
}