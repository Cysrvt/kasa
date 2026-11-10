import './Home.scss'
import imgTitle from '../../assets/Image_source_1.png'
import imgFigure from '../../assets/Carrousel.png'


export const Home = () => {
    return (
        <section className='home-content'>
            <div className='gallery-header'>
                <img
                    src={imgTitle}
                    alt="Paysage avec une falaise"
                />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>

            <section className='gallery'>
                <figure className='gallery-figure'>
                    <img src={imgFigure} alt="Logement" />
                    <figcaption>Titre de la location</figcaption>
                </figure>

                <figure className='gallery-figure'>
                    <img src={imgFigure} alt="Logement" />
                    <figcaption>Titre de la location</figcaption>
                </figure>

                <figure className='gallery-figure'>
                    <img src={imgFigure} alt="Logement" />
                    <figcaption>Titre de la location</figcaption>
                </figure>
                <figure className='gallery-figure'>
                    <img src={imgFigure} alt="Logement" />
                    <figcaption>Titre de la location</figcaption>
                </figure>

                <figure className='gallery-figure'>
                    <img src={imgFigure} alt="Logement" />
                    <figcaption>Titre de la location</figcaption>
                </figure>
            </section>
        </section>
    )
}