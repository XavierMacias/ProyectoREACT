import CharacterCard from "../CharacterCard/CharacterCard";
import { Link } from "react-router-dom"
import './CharacterList.css';

function CharacterList({ characters }) {
    return (
        <>
            <div>
                {characters.length ? (
                <ul className="charList">
                    {characters.map((character, i) => (
                        <li className="charItem" key={i}> 
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