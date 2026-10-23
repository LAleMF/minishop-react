import { useState } from "react";

export function useFilter() {

    const [filter, setFilter] = useState('all')

    function onUpdateFilter(category) {
        setFilter(category)
    }

    return { filter, onUpdateFilter }
}