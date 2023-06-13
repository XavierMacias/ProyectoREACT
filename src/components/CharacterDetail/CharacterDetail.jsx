import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CharacterDetail() {
    const [character, setCharacter] = useState([]);
    const { id } = useParams();
    //console.log(id);

    useEffect(() => {
        const getCharacter = async() => {
        const char = await axios.get('http://localhost:8000/characters/id/'+id);
        setCharacter(char.data);
        };
        getCharacter();
    }, [id]);

    return (
        <div>
            <h1>Character details</h1>
            <h3>{character.name}</h3>
            <p>{character.gender}</p>
            <p>{character.age}</p>
            <p>{character.race}</p>
            <p>{character.status}</p>
            <p>{character.description}</p>

            <img src={character.image} alt={character.name} />
        </div>
    )
}

export default CharacterDetail;