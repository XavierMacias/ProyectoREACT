import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './CharacterDetail.css';
import { Link } from "react-router-dom"

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
        <>
        <div className='nav'>
        <Link to={`/home`}>
          <p className="home">HOME</p>
        </Link>
        <Link to={`/`}>
          <p className="loginlink">LOGIN</p>
        </Link>
      </div>
        <div className="caja">
            
            <h2 className="charname">{character.name}</h2>
            <div className="info">
                <p><span className="prop">Gender</span>: {character.gender}</p>
                <p><span className="prop">Age</span>: {character.age}</p>
                 <p><span className="prop">Race</span>: {character.race}</p>
                 <p><span className="prop">Status</span>: {character.status}</p>
            </div>
            
            <p className="descriptione">{character.description}</p>

            <img className="imagen" src={character.image} alt={character.name} />
        </div>
        </>

        
    )
}

export default CharacterDetail;