import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
    return (
        <div className="home">
            <section className="hero">
                <div className="container heroInner">
                    <p className="heroEyebrow">Desarrollo web freelance</p>
                    <h1 className="heroTitle">Convierto ideas en webs que funcionan</h1>
                    <p className="heroLead">
                        Soy Marisa, desarrolladora frontend. Creo páginas y aplicaciones web con tecnologías como HTML, CSS, JavaScript y React, buscando que sean claras, funcionales y adaptadas a las necesidades de cada proyecto.
                    </p>
                    <div className="heroActions">
                        <Link to="/personajes" className="btn">
                            Ver mi proyecto
                        </Link>
                        <a href="mailto:marysa.rt85@gmail.com" className="btn btnGhost">
                            Escríbeme
                        </a>
                    </div>
                </div>
            </section>

            <section className="container section">
                <h2>Qué puedo hacer por ti</h2>
                <div className="services">
                    <article className="serviceCard">
                        <h3>Desarrollo de webs a medida</h3>
                        <p>Creo páginas y aplicaciones web adaptadas a las necesidades de cada proyecto, cuidando tanto su funcionamiento como su presentación.</p>
                    </article>

                    <article className="serviceCard">
                        <h3>Integración con APIs</h3>
                        <p>Desarrollo aplicaciones web que utilizan APIs para obtener y mostrar información de servicios externos.</p>
                    </article>

                    <article className="serviceCard">
                        <h3>Mejoras y mantenimiento</h3>
                        <p>Puedo ayudarte a realizar cambios, mejoras y actualizaciones en proyectos web existentes.</p>
                    </article>
                </div>
            </section>

            <section className="container section">
                <h2>Herramientas con las que trabajo:</h2>
                <ul className="skills">
                    <li className="skillsItem">HTML</li>
                    <li className="skillsItem">CSS</li>
                    <li className="skillsItem">JavaScript</li>
                    <li className="skillsItem">React</li>
                    <li className="skillsItem">Git & GitHub</li>
                    <li className="skillsItem">APIs</li>
                </ul>
            </section>

            <section className="container section cta">
                <h2>¿Tienes un proyecto en mente?</h2>
                <p>
                    Esta misma web es un ejemplo de cómo trabajo: componentes ordenados, un servicio dedicado a hablar con la API y estilos simples pero cuidados. Hablemos de tu idea.
                </p>
                <div className="ctaLinks">
                    <a href="mailto:marysa.rt85@gmail.com" className="ctaLink">Email</a>
                    <span className="ctaDivider">·</span>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="ctaLink">LinkedIn</a>
                    <span className="ctaDivider">·</span>
                    <a href="https://github.com/Marisa-Ruiz" target="_blank" rel="noreferrer" className="ctaLink">GitHub</a>
                </div>
            </section>
        </div>
    )
}

export default HomePage

