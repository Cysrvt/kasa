import './Footer.scss'
import Logo from '../../assets/Logo_black.png'

export const Footer = () => {
    return (
        <footer className="footer">
            <img src={Logo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}