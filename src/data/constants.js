export const HOUSES = [
    { value: 'all', label: 'Todas las casas' },
    { value: 'gryffindor', label: 'Gryffindor' },
    { value: 'slytherin', label: 'Slytherin' },
    { value: 'ravenclaw', label: 'Ravenclaw' },
    { value: 'hufflepuff', label: 'Hufflepuff' },
]

export const ROLES = [
    { value: 'all', label: 'Todos' },
    { value: 'students', label: 'Estudiantes' },
    { value: 'staff', label: 'Personal de Hogwarts' },
]

export const FALLBACK_IMAGE =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400">
      <rect width="300" height="400" fill="#ece0c2"/>
      <text x="50%" y="50%" font-family="sans-serif" font-size="20"
        fill="#7c5f27" text-anchor="middle" dominant-baseline="middle">
        Sin foto
      </text>
    </svg>`,
    )