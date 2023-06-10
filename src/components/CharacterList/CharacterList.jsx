import CharacterCard from "../CharacterCard/CharacterCard";

function CharacterList({ characters }) {
    return (
        <>
            <div>
                {characters.length ? (
                <ul>
                    {characters.map((character, i) => (
                    <li key={i}> <CharacterCard character={character}/></li>
                    ))}
                </ul>
                ) : (
                <p>Loading...</p>
                )}
            </div>
        </>
    )
}

export default CharacterList;