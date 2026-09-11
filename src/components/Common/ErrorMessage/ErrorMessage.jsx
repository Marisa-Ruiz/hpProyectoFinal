import './ErrorMessage.css'

function ErrorMessage({ message }) {
    return (
        <div className="errorMessage" role="alert">
            <span>Vaya…</span> {message}
        </div>
    )
}

export default ErrorMessage