import './App.css'
import { Products } from './components/Products'
import { Search } from './components/Search'
import { Filters } from './components/Filters'
import { Cart } from './components/Cart'
import { useProducts } from './hooks/useProducts'
import { useSearch } from './hooks/useSearch'
import { useFilter } from './hooks/useFilter'
import { useCart } from './hooks/useCart'
import cartIcon from './assets/cart.png';


function App() {

  const { products, loading, error } = useProducts()
  const { filter, onUpdateFilter } = useFilter()
  const { search, filteredProducts, onUpdateSearch } = useSearch({ products, filter })
  const { productsCart, onAddToCart, onRemoveFromCart, onDeleteFromCart, total, isCartVisible, onUpdateVisibilityCart } = useCart()

  return (
    <>
      <header>
        <h2>Shopping Cart</h2>
        <button
          className={`cartButton ${isCartVisible ? 'cartVisible' : ''}`}
          onClick={() => onUpdateVisibilityCart()}
        >
          <img src={cartIcon} alt="imagen carrito" />
        </button>
      </header>
      <main>
        <div className='main'>
          <div className='actions'>
            <Search search={search} onUpdateSearch={onUpdateSearch} />
            <Filters onUpdateFilter={onUpdateFilter} filter={filter} products={products} />
          </div>
          <Products
            filteredProducts={filteredProducts}
            onAddToCart={onAddToCart}
            loading={loading}
            error={error}
          />
        </div>
        {isCartVisible &&
          (<Cart productsCart={productsCart}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
            onDeleteFromCart={onDeleteFromCart}
            total={total} />)
        }
      </main>
    </>
  )
}

export default App
