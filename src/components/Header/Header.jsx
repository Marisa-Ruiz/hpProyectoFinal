import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header className="header">
            <div className="container headerInner">
                <NavLink to="/" className="headerBrand">
                    <span className="headerBrandMark">⚡</span>
                    Archivo Mágico
                </NavLink>

                <nav className="headerNav" aria-label="Navegación principal">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? 'headerLink headerLinkActive' : 'headerLink'
                        }
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/personajes"
                        className={({ isActive }) =>
                            isActive ? 'headerLink headerLinkActive' : 'headerLink'
                        }
                    >
                        Personajes
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header
