import './ErrorMessage.css'

function ErrorMessage({ message }) {
    return (
        <div className="errorMessage" role="alert">
            <strong>Vaya…</strong> {message}
        </div>
    )
}

export default ErrorMessage