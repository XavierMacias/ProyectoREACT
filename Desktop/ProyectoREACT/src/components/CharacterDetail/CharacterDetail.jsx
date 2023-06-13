import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './CharacterDetail.css';

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
        <div className="caja">
            <h2 className="charname">{character.name}</h2>
            <div className="info">
            <p>{character.gender}</p>
            <p>{character.age}</p>
            <p>{character.race}</p>
            <p>{character.status}</p>
            </div>
            <p className="description">{character.description}</p>

            <img className="imagen" src={character.image} alt={character.name} />
        </div>
    )
}

export default CharacterDetail;