import './Home.scss'
import imgTitle from '../../assets/Image_source_1.png'
import LogementsData from '../../datas/logements.json'
import { LogementCard } from '../../components/logementCard/LogementCard'


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

                {LogementsData.map((logement) => (
                    <LogementCard key={logement.id} dataId={logement.id} title={logement.title} cover={logement.cover} />
                ))}


            </section>
        </section>
    )
}