import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://hp-api.onrender.com/api',
})

export async function getAllCharacters() {
    const response = await apiClient.get('/characters')
    return response.data
}

export async function getStudents() {
    const response = await apiClient.get('/characters/students')
    return response.data
}

export async function getStaff() {
    const response = await apiClient.get('/characters/staff')
    return response.data
}

export async function getCharactersByHouse(house) {
    const response = await apiClient.get(`/characters/house/${house}`)
    return response.data
}
