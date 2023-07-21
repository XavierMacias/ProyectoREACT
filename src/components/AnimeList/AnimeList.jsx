import { Link } from "react-router-dom";
import './AnimeList.css'

function AnimeList({ animes }) {
  return (
    <div>
      {animes.length ? (
        <ul className="animeList">
          {animes.map((anime, i) => (
           
            <li key={i} className="animeItem">
                <Link to={`/characters/${anime._id}`}>
                    <img className="img_anime" src={anime.image} alt={anime.name}/>
                    <h3>{anime.name}</h3> 
                    <div className="year2">
                        <p>{anime.year}</p> 
                    </div>
                    <p className="desc">{anime.description}</p> 
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

export default AnimeList;