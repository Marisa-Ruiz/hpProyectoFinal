import FilterSelect from '../FilterSelect/FilterSelect';
import SearchBar from '../SearchBar/SearchBar';
import { HOUSES, ROLES } from '../../../data/constants.js'
import './FiltersBar.css';

function FiltersBar({ search, onSearchChange, house, onHouseChange, role, onRoleChange }) {
    return (
        <div className="filtersBar">
            <SearchBar value={search} onChange={onSearchChange} />
            <FilterSelect
                id="houseFilter"
                label="Casa"
                options={HOUSES}
                value={house}
                onChange={onHouseChange}
            />
            <FilterSelect
                id="roleFilter"
                label="Rol en Hogwarts"
                options={ROLES}
                value={role}
                onChange={onRoleChange}
            />
        </div>
    )
}

export default FiltersBar
