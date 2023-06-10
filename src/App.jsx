import './App.css'
import { useEffect, useState } from "react";
import axios from "axios"
import CharacterList from './components/CharacterList/CharacterList';

function App() {
  const [animes, setAnimes] = useState([]);
  const [currentAnime, setCurrentAnime] = useState(['647ef86d34e52d1d8e06d2b0']);
  const [characters, setCharacters] = useState([]);

  const handleSelect = (event) => {
    setCurrentAnime(event.target.value);
  };

  useEffect(() => {
    const getAnimes = async() => {
      const anime = await axios.get('http://localhost:8000/animes');
      setAnimes(anime.data);
    };
    getAnimes();
  }, []);

  useEffect(() => {
    const getCharacters = async() => {
      const character = await axios.get('http://localhost:8000/animes/characters/' + currentAnime);
      setCharacters(character.data);
      console.log(character.data);
    };
    getCharacters();
  }, [currentAnime]);

  return (
    <>
      <select name="" id="" onChange={handleSelect}>
        {animes.map((anime, i) => (
          <option key={i} value={anime._id}>{anime.name}</option>
        ))}
      </select>

      <CharacterList characters={characters}/>
    </>
  )
}

export default App
