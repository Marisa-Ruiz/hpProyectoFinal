import CharacterCard from '../CharacterCard/CharacterCard';
import './CharacterList.css'

function CharacterList({ characters }) {
    if (characters.length === 0) {
        return (
            <p className="characterListEmpty">
                No hay personajes que coincidan con tu búsqueda. Prueba a cambiar
                los filtros.
            </p>
        )
    }

    return (
        <div className="characterList">
            {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </div>
    )
}

export default CharacterList
