import './Loader.css'

function Loader({ label = 'Cargando…' }) {
    return (
        <div className="loader" role="status" aria-live="polite">
            <span className="loaderSpinner" aria-hidden="true" />
            <span>{label}</span>
        </div>
    )
}

export default Loader
