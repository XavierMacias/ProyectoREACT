import CharacterCard from "../CharacterCard/CharacterCard";
import { Link, useParams } from "react-router-dom";
import './CharacterList.css';
import { useEffect, useState } from "react";
import axios from "axios";

function CharacterList() {

  const [characters, setCharacters] = useState([]);
  const { animeId } = useParams();

  useEffect(() => {
    const getCharacter = async() => {
    const char = await axios.get('http://localhost:8000/animes/characters/'+animeId);
    setCharacters(char.data);
    };
    getCharacter();
  });

  return (
    <div>
    <div className='nav'>
        <Link to={`/home`}>
          <p className="home">HOME</p>
        </Link>
        <Link to={`/`}>
          <p className="loginlink">LOGIN</p>
        </Link>
      </div>

  <Link to={`/addcharacter/${animeId}`}>
            <button className='addCharacter'>ADD CHARACTER</button>
    </Link>

      {characters.length ? (
        <ul className="charList">
          {characters.map((character, i) => (
           
                <li key={i} className="charItem">
                
                <Link to={`/character/${character._id}`}>
                  <CharacterCard character={character} />
                </Link>
              </li>
            
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CharacterList;
