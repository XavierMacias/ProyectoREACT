import './App.css'
import { useEffect, useState } from "react";
import axios from "axios"
import CharacterList from './components/CharacterList/CharacterList';
import InputFilter from './components/InputFilter/InputFilter';
import Selector from './components/Selector/Selector';

function App() {
  const [animes, setAnimes] = useState([]);
  const [currentAnime, setCurrentAnime] = useState(['all']);
  const [filterName, setFilterName] = useState('');
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
      //console.log(character.data);
    };
    getCharacters();
  }, [currentAnime]);

  const handleFilterName = (value) => {
    setFilterName(value);
  };

  return (
    <>
      <Selector animes={animes} handleSelect={handleSelect} />
      <InputFilter handleFilterName={handleFilterName} />
      <CharacterList characters={characters.filter((char) => char.name.toLowerCase().includes(filterName.toLowerCase()))} />
    </>
  )
}

export default App
