import './CharacterCard.css';

function CharacterCard({ character }) {
    return (
        <article>
            <p>{character.name}</p> 
            <img className="imgChar" src={character.image} alt={character.name} />  
        </article>
    )
}

export default CharacterCard;