import './Footer.css'

function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container footerInner">
                <p className="footerText">
                    © {year} Archivo Mágico — proyecto de portfolio desarrollado con fines educativos.
                </p>
                <p className="footerText">
                    Datos servidos por{' '}
                    <a
                        href="https://hp-api.onrender.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="footerLink"
                    >
                        HP-API
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
