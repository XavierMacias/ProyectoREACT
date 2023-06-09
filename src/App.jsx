import './App.css'
import { useEffect, useState } from "react";
import axios from "axios"

function App() {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    const getAnimes = async() => {
      const anime = await axios.get('http://localhost:8000/animes');
      setAnimes(anime.data);
      console.log(anime.data);
    };
    getAnimes();
  }, []);

  return (
    <>
      <div>
        {animes.length ? (
          <ul>
            {animes.map((character, i) => (
              <li key={i}>{character.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  )
}

export default App
