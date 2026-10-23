import { useState, useEffect } from "react"

export function useProducts() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchProducts() {
            try {
                setLoading(true)
                setError(null)

                const res = await fetch('https://dummyjson.com/products')

                if (!res.ok) {
                    throw new Error(`Error en la petición: código ${res.status}`)
                }

                const data = await res.json()
                setProducts(data.products)
            } catch (e) {
                setError(e.message || 'Ocurrió un error inesperado')
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    return { products, loading, error }
}