import { FALLBACK_IMAGE } from '../../data/constants.js'
import './CharacterCard.css'

function houseClassName(house) {
    if (!house) return ''
    const formattedHouse = house.charAt(0).toUpperCase() + house.slice(1).toLowerCase()
    return `card${formattedHouse}`
}

function CharacterCard({ character }) {
    const { name, image, house, species, patronus, actor } = character

    return (
        <article className={`card ${houseClassName(house)}`}>
            <div className="cardImageWrap">
                <img
                    className="cardImage"
                    src={image || FALLBACK_IMAGE}
                    alt={`Retrato de ${name}`}
                    loading="lazy"
                    onError={(event) => {
                        event.currentTarget.onerror = null
                        event.currentTarget.src = FALLBACK_IMAGE
                    }}
                />
            </div>

            <div className="cardBody">
                <h3 className="cardName">{name}</h3>

                {house && <p className="cardHouse">{house}</p>}

                <dl className="cardDetails">
                    {species && (
                        <div className="cardDetail">
                            <dt>Especie</dt>
                            <dd>{species}</dd>
                        </div>
                    )}
                    {patronus && (
                        <div className="cardDetail">
                            <dt>Patronus</dt>
                            <dd>{patronus}</dd>
                        </div>
                    )}
                    {actor && (
                        <div className="cardDetail">
                            <dt>Actor / actriz</dt>
                            <dd>{actor}</dd>
                        </div>
                    )}
                </dl>
            </div>
        </article>
    )
}

export default CharacterCard