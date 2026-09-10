import './SearchBar.css'

function SearchBar({ value, onChange }) {
    return (
        <div className="searchBar">
            <label htmlFor="searchInput" className="searchBarLabel">
                Buscar por nombre
            </label>
            <input
                id="searchInput"
                type="search"
                className="searchBarInput"
                placeholder="Ej. Hermione, Snape, Neville…"
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    )
}

export default SearchBar
