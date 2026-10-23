export function Search({ search, onUpdateSearch }) {

    return (
        <form className="buscar-contenedor" >
            <input aria-label="Buscar productos" type="search" placeholder="Buscar..." value={search} className="buscar-input"
                onChange={(e) => onUpdateSearch(e.target.value)}
            />
            <button type="button" className="buscar-boton" >🔍</button>
        </form>
    )
}