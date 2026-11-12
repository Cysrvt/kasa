import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import './Layout.scss'

export const Layout: React.FC = () => {
    return (
        <div className="layout">
            <Header />
            <main className="layout-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
