
import React, { useState } from 'react'
import './Carousel.scss'

type CarouselProps = {
    pictures: string[]
}

export const Carousel: React.FC<CarouselProps> = ({ pictures }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextPicture = () => {
        setCurrentIndex((previousIndex) =>
            (previousIndex + 1) % pictures.length
        )
    }

    const previousPicture = () => {
        setCurrentIndex((previousIndex) =>
            (previousIndex - 1 + pictures.length) % pictures.length
        )
    }

    return (
        <div className="carousel">
            <img
                src={pictures[currentIndex]}
                alt={`Photo ${currentIndex + 1} du logement`}
                className="carousel-image"
            />

            {pictures.length > 1 && (
                <>
                    <button
                        className="carousel-arrow carousel-arrow-left"
                        onClick={previousPicture}
                        aria-label="Image précédente"
                    >
                        ❮
                    </button>

                    <button
                        className="carousel-arrow carousel-arrow-right"
                        onClick={nextPicture}
                        aria-label="Image suivante"
                    >
                        ❯
                    </button>

                    <span className="carousel-counter">
                        {currentIndex + 1}/{pictures.length}
                    </span>
                </>
            )}
        </div>
    )
}
