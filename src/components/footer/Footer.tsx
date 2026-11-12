import React from 'react'
import './Footer.scss'
import Logo from '../../assets/Logo_black.png'

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <img src={Logo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}