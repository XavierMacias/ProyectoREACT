import { useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../services/api";

const initial_state = {
    name: "",
    age: "",
    gender: "Asexual",
    race: "",
    description: "",
    status: "Alive",
    image: ""
}

function AddCharacter() {
    const [formState, setFormState] = useState(initial_state);
    const { animeId } = useParams();
    //console.log(animeId);

    const handleInput = (ev) => {
        if(ev.target.name === 'image') {
            const { name, files } = ev.target;
            setFormState({ ...formState, [name]: files[0]});
        } else {
            const { name, value } = ev.target;
            setFormState({ ...formState, [name]: value });
        }
    }

    const handleCancel = () => {
        setFormState(initial_state);
        window.location.replace('/');
    }

    const handleClick = () => {
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        const config2 = {
            _id: animeId
        };
        //console.log(formState);
        API.post("/characters", formState, config)
            .then((res) => {
                console.log(res.data)
                API.put("/animes/id/"+res.data._id, config2)
                .then((res2) => {
                    console.log(res2);
                    window.location.replace('/');
                });
        });
    }

    return (
        <div className="">
            <form onSubmit={(ev) => ev.preventDefault()}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={handleInput} value={formState.name} />

                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" onChange={handleInput} value={formState.age} />

                <label htmlFor="gender">Gender:</label>
                <select name="gender" id="gender" onChange={handleInput}>
                    <option value="Asexual">Asexual</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <label htmlFor="race">Race</label>
                <input type="text" id="race" name="race" onChange={handleInput} value={formState.race} />

                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description" onChange={handleInput} value={formState.description} />

                <label htmlFor="status">Status:</label>
                <select name="status" id="status" onChange={handleInput}>
                    <option value="Alive">Alive</option>
                    <option value="Deceased">Deceased</option>
                    <option value="Unknown">Unknown</option>
                </select>

                <label htmlFor="image">Select an image:</label>
                <input type="file" name="image" accept="image/*" onChange={handleInput} />

                <input type="submit" value="Add" onClick={handleClick} />
                <input type="button" value="Cancel" onClick={handleCancel} />

            </form>
        </div>
    )
}

export default AddCharacter;