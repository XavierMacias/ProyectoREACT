import CharacterList from '../CharacterList/CharacterList';
import InputFilter from '../InputFilter/InputFilter';
import Selector from '../Selector/Selector';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import './Home.css'

function Home() {

    const [animes, setAnimes] = useState([]);
    const [currentAnime, setCurrentAnime] = useState('all');
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
    console.log(currentAnime);

    return (
        <>
          <Link to={`/addanime`}>
                    <button>ADD ANIME</button>
          </Link>
          <Selector animes={animes} handleSelect={handleSelect} />
          <InputFilter handleFilterName={handleFilterName} />
          {currentAnime !== "all" && currentAnime !== "" ?
            <Link to={`/addcharacter/${currentAnime}`}>
                    <button>ADD</button>
            </Link>
          : <> </>}
          <CharacterList characters={characters.filter((char) => char.name.toLowerCase().includes(filterName.toLowerCase()))} />
        </>
      )
}

export default Home;