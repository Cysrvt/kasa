import React from 'react'
import './DetailLogement.scss'
import { useParams } from 'react-router-dom'
import logementData from '../../datas/logements.json'
import { Collapse } from '../../components/collapse/Collapse'

export const DetailLogement: React.FC = () => {
    const { id } = useParams()
    const logement = logementData.find((logement) => logement.id === id)

    if (!logement) {
        return <p>Logement introuvable</p>
    }

    return (
        <section className="detail-logement">
            <div className="logement-pictures">
                <img
                    src={logement.pictures[0]}
                    alt={logement.title}
                />
            </div>

            <div className="logement-info">
                <div className="logement-left">
                    <h1>{logement.title}</h1>
                    <p className="logement-location">
                        {logement.location}
                    </p>

                    <div className="logement-tags">
                        {logement.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="logement-right">
                    <div className="logement-host">
                        <p>{logement.host.name}</p>
                        <img
                            src={logement.host.picture}
                            alt={logement.host.name}
                        />
                    </div>
                    <div className="logement-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={
                                    star <= Number(logement.rating)
                                        ? 'star-active'
                                        : 'star-inactive'
                                }
                            >
                                <i className="fa-solid fa-star"></i>
                            </span>
                        ))}
                    </div>

                </div>
            </div>
            <div className="logement-collapse">
                <div className="collapse">
                    <Collapse
                        title="Descrition"
                        content={logement.description}
                    />
                </div>

                <div className="collapse">
                    <Collapse
                        title="Equipenemt"
                        content={
                            <ul>
                                {logement.equipments.map((equipment) => (
                                    <li key={equipment}>
                                        {equipment}
                                    </li>
                                ))}
                            </ul>}
                    />
                </div>




            </div>

        </section>

    )
}