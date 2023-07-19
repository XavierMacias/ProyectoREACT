import { Link } from "react-router-dom";

function AnimeList({ animes }) {
  return (
    <div>
      {animes.length ? (
        <ul className="charList">
          {animes.map((anime, i) => (
           
            <li key={i} className="animeItem">
                <Link to={`/characters/${anime._id}`}>
                    <h3 className='nombre'>{anime.name}</h3> 
                    <p className='nombre'>{anime.description}</p> 
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