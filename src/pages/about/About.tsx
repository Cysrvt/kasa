import React from 'react'
import './About.scss'
import contentData from "../../datas/string.json"
import { Collapse } from '../../components/collapse/Collapse'

export const About: React.FC = () => {
    return (
        <div className="about">
            <img
                className="about-banner"
                src="src/assets/Image_source_2.png"
                alt="Image d'une rivière entre des montagnes"
            />

            <section className="about-content">
                {Object.entries(contentData).map(([title, content]) => (
                    <Collapse key={title} title={title} content={content} />
                ))

                }
            </section>

        </div>
    )
}