import { useState } from "react";
import { API } from "../../services/api";

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
        window.location.replace('/');
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
        <div className="">
            <form onSubmit={(ev) => ev.preventDefault()}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required onChange={handleInput} value={formState.name} />

                <label htmlFor="year">Year</label>
                <input type="number" id="year" name="year" min="0" required onChange={handleInput} value={formState.year} />

                <label htmlFor="genre">Genre:</label>

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
                <input type="text" id="description" name="description" onChange={handleInput} value={formState.description} />

                <input type="submit" value="Add" onClick={handleClick} />
                <input type="button" value="Cancel" onClick={handleCancel} />

            </form>
        </div>
    )
}

export default AddAnime;