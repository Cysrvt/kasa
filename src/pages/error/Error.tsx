import type React from 'react'
import './Error.scss'
import { Link } from 'react-router-dom'


export const Error: React.FC = () => {
    return (
        <div className='error'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas. </p>
            <Link to="/">Retournez sur la page d'accueil</Link>
        </div>
    )
}