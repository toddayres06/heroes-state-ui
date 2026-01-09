import { capitalizeWords } from '../utils.js/stringUtils.js'

function HeroesGrid( {heroes} ) {
    return (
        <ul>
            {heroes.map(hero => (
                <li key={hero.id}>{capitalizeWords(hero.name)} - {capitalizeWords(hero.role)}</li>
            ))}
        </ul>
    )
}

export default HeroesGrid