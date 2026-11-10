import React from 'react'
import { Link } from 'react-router-dom';
import './LogementCard.scss'


type CardProps = {
    dataId: string;
    title: string;
    cover: string;
};

export const LogementCard: React.FC<CardProps> = ({ dataId, title, cover }) => {
    console.log(dataId)
    return (
        <Link to={`/logement/${dataId}`}>
            <figure className='gallery-figure'>
                <img src={cover} alt={title} />
                <figcaption>{title}</figcaption>
            </figure>
        </Link>


    )

}
