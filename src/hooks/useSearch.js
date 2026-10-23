import { useState, useMemo } from "react";

export function useSearch({ products, filter }) {
    const [search, setSearch] = useState('');

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());

            const matchesCategory = filter === 'all' || product.category === filter;

            return matchesSearch && matchesCategory;
        });
    }, [products, search, filter]);

    function onUpdateSearch(text) {
        setSearch(text);
    }

    return { search, filteredProducts, onUpdateSearch };
}
