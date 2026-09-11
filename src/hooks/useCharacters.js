import { useEffect, useMemo, useState } from 'react'
import { getAllCharacters } from '../services/apiService.js'

export function useCharacters({ house = 'all', role = 'all' } = {}) {
    const [allCharacters, setAllCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let isCancelled = false

        async function loadCharacters() {
            setIsLoading(true)
            setError(null)

            try {
                const result = await getAllCharacters()
                if (!isCancelled) {
                    setAllCharacters(result)
                }
            } catch {
                if (!isCancelled) {
                    setError('No se han podido cargar los personajes. Inténtalo de nuevo en unos segundos.')
                }
            } finally {
                if (!isCancelled) {
                    setIsLoading(false)
                }
            }
        }

        loadCharacters()

        return () => {
            isCancelled = true
        }
    }, [])

    const characters = useMemo(() => {
        return allCharacters.filter((character) => {
            const matchesHouse =
                house === 'all' ||
                (character.house && character.house.toLowerCase() === house.toLowerCase())

            const matchesRole =
                role === 'all' ||
                (role === 'students' && Boolean(character.hogwartsStudent)) ||
                (role === 'staff' && Boolean(character.hogwartsStaff))

            return matchesHouse && matchesRole
        })
    }, [allCharacters, house, role])

    return { characters, isLoading, error }
}