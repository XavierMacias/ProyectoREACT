import CharacterCard from "../CharacterCard/CharacterCard";
import { Link } from "react-router-dom"

function CharacterList({ characters }) {
    return (
        <>
            <div>
                {characters.length ? (
                <ul>
                    {characters.map((character, i) => (
                        <li key={i}> 
                            <Link to={`/character/${character._id}`}>
                                <CharacterCard character={character}/>
                            </Link>
                        </li>
                    
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