import {Link} from 'react-router-dom';

const CharactersByHero =({alter_ego, characters}) => {
    return (alter_ego === characters)
    ? <></>
    : <p className="card-text">{characters}</p>
}

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    const heroImageUrl = `/assets/${id}.jpg`

    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImageUrl} className="card-img animate__animated animate__flipInY" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-tittle">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            <CharactersByHero alter_ego={alter_ego} characters={characters}/>
                            <Link to={`/hero/${id}`}>Más...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}