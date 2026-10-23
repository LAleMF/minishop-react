export function Filters({ onUpdateFilter, filter, products }) {

    const categories = ['all', ...new Set(products.map(product => product.category))]

    return (
        <div className="filters">
            {categories.map(category => (
                <div key={category}>
                    <input
                        type="radio"
                        value={category}
                        className="btn-check"
                        name="options"
                        id={`option-${category}`}
                        checked={filter === category}
                        onChange={() => onUpdateFilter(category)}
                    />

                    <label
                        className="btn btn-outline-primary"
                        htmlFor={`option-${category}`}
                    >
                        {category === 'all' ? 'Todas' : category}
                    </label>
                </div>
            ))}
        </div>
    )
}
