import { useEffect, useState } from 'react'
import {
    getAllCharacters,
    getCharactersByHouse,
    getStaff,
    getStudents,
} from '../services/apiService.js'

export function useCharacters({ house, role }) {
    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let isCancelled = false

        async function loadCharacters() {
            setIsLoading(true)
            setError(null)

            try {
                let result
                if (house !== 'all') {
                    result = await getCharactersByHouse(house)
                } else if (role === 'students') {
                    result = await getStudents()
                } else if (role === 'staff') {
                    result = await getStaff()
                } else {
                    result = await getAllCharacters()
                }

                if (!isCancelled) {
                    setCharacters(result)
                }
            } catch (err) {
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
    }, [house, role])

    return { characters, isLoading, error }
}