import { Link } from "react-router-dom";
import { useState } from "react";
import { API } from "../../services/api";

const initial_state = {
    email: "",
    password: ""
}

function Register() {

    const [formState, setFormState] = useState(initial_state);

    const handleInput = (ev) => {
        const { name, value } = ev.target;
        setFormState({ ...formState, [name]: value });
    }

    const handleClick = () => {
        console.log(formState);
        API.post("/users/register", formState)
            .then((res) => {
                console.log(res.data);
                window.location.replace('/home');
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <form  onSubmit={(ev) => ev.preventDefault()}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="regemail" name="email" required onChange={handleInput} value={formState.email}/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="regpassword" name="password" required onChange={handleInput} value={formState.password} />

                <input type="submit" className="register" value="Register" onClick={handleClick}/>
            </form>

            <Link to={`/`}>
                <button><span>Already have an account? Login</span></button>
            </Link>
            
        </>
    )
}

export default Register;