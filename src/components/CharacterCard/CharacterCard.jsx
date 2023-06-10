function CharacterCard({ character }) {
    return (
        <article>
            <p>{character.name}</p> 
            <img src={character.image} alt={character.name} />  
        </article>
    )
}

export default CharacterCard;