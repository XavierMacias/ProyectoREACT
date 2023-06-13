import { useState } from "react";
import { API } from "../../services/api";
import './addAnime.css';
import { Link } from "react-router-dom"

const initial_state = {
    name: "",
    year: "",
    genre: [],
    description: "",
    characters: []
}

const genres = ["Action","Adventure","Comedy","Drama","Fantasy","Dark-Fantasy","Post-apocalyptic","Horror","Mistery","Psicological","Romance","Sci-fi","Martial Arts"];

function AddAnime() {
    const [formState, setFormState] = useState(initial_state);
    const [checkedGenre, setCheckedGenre] = useState(new Array(genres.length).fill(false));
    //console.log(animeId);

    const handleInput = (ev) => {
        const { name, value } = ev.target;
        setFormState({ ...formState, [name]: value });
    }

    const handleCancel = () => {
        setFormState(initial_state);
        window.location.replace('/home');
    }

    const handleClick = () => {
        console.log(formState);
        API.post("/animes", formState)
            .then((res) => {
                console.log(res.data)
                window.location.replace('/');
        });
    }

    const handleOnChange = (position) => {
        const updatedCheckedGenre = checkedGenre.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedGenre(updatedCheckedGenre);

        formState.genre = [];
        for(let i=0;i<genres.length;i++) {
            if(updatedCheckedGenre[i]) {
                formState.genre.push(genres[i]);
            }
        }
        
    };

    return (
        <>
        <Link to={`/home`}>
                <span className="home">HOME</span>
        </Link>
    <div className="formu">
        
         <form onSubmit={(ev) => ev.preventDefault()}>
        <div className="nameYear">
                
             <div className="">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name"  className="name" name="name" required onChange={handleInput} value={formState.name} />
             </div>
                 
                <div className="">
                    <label htmlFor="year">Year</label>
                     <input type="number" id="year" className="year"  name="year" min="0" required onChange={handleInput} value={formState.year} />
                </div>
           
        </div>
                <div className="genre"> 
                <label htmlFor="genre">Genre:</label>
                </div> 

                <label htmlFor='custom-checkbox'></label>
                <ul className="toppings-list">
                {genres.map((name , index) => {
                    return (
                        <li key={index}>
                        <input
                            type="checkbox"
                            id='custom-checkbox'
                            name={name}
                            value={name}
                            checked={checkedGenre[index]}
                            onChange={() => handleOnChange(index)}
                        />
                        {name}
                        </li>
                        );
                    })}
                </ul>

                    
                <label htmlFor="description">Description</label>
                <input type="text" className="description" id="description" name="description" onChange={handleInput} value={formState.description} />
                
                <div className="addCancel">
                <input type="submit" value="Add" className="add" onClick={handleClick} />
                <input type="button" value="Cancel" className="cancel" onClick={handleCancel} />
                      </div>
            </form>
    </div>
    </>
    )
}

export default AddAnime;