import './Collapse.scss'
import React, { useRef, useState, type ReactNode } from 'react'

interface CollapseProps {
    title: string,
    content: ReactNode

}

export const Collapse: React.FC<CollapseProps> = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false)
    const [divHeight, setDivHeight] = useState(5.5)
    const contentRef = useRef<HTMLDivElement | null>(null)

    const toggleCollapse = () => {
        setIsActive(!isActive)  //Inverse l'etat
        if (!isActive) {
            setDivHeight(((contentRef.current?.offsetHeight || 0) / window.innerHeight) * 100 + 5)

        } else {
            setDivHeight(5.5)
        }
    }

    return (

        <div className={`collapse-element ${isActive ? "active" : ""}`} style={{ height: `${divHeight}vh` }}>
            <h3>
                {title} <i onClick={toggleCollapse} className='fa-solid fa-chevron-up'></i>
            </h3>
            <div ref={contentRef}>
                {content}
            </div>
        </div>
    )
}