import { useMemo, useState } from 'react'
import FiltersBar from '../../components/Filters/FiltersBar/FiltersBar';
import CharacterList from '../../components/CharacterList/CharacterList';
import './CharactersPage.css'


function CharactersPage() {
    const [search, setSearch] = useState('')
    const [house, setHouse] = useState('all')
    const [role, setRole] = useState('all')

    const { characters, isLoading, error } = useCharacters({ house, role })

    const filteredCharacters = useMemo(() => {
        const query = search.trim().toLowerCase()
        if (!query) return characters
        return characters.filter((character) =>
            character.name.toLowerCase().includes(query),
        )
    }, [characters, search])

    return (
        <section className="charactersPage">
            <div className="container">
                <header className="charactersPageIntro">
                    <h1>Personajes del mundo mágico</h1>
                    <p>
                        Datos obtenidos en tiempo real desde la HP-API. Filtra por casa,
                        por rol dentro de Hogwarts, o busca a alguien por su nombre.
                    </p>
                </header>

                <FiltersBar
                    search={search}
                    onSearchChange={setSearch}
                    house={house}
                    onHouseChange={setHouse}
                    role={role}
                    onRoleChange={setRole}
                />

                {isLoading && <Loader label="Invocando personajes…" />}
                {!isLoading && error && <ErrorMessage message={error} />}
                {!isLoading && !error && (
                    <>
                        <p className="charactersPageCount">
                            {filteredCharacters.length} personaje
                            {filteredCharacters.length === 1 ? '' : 's'} encontrado
                            {filteredCharacters.length === 1 ? '' : 's'}
                        </p>
                        <CharacterList characters={filteredCharacters} />
                    </>
                )}
            </div>
        </section>
    )
}

export default CharactersPage
