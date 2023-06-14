import { Link } from "react-router-dom";
import { useState } from "react";
import { API } from "../../services/api";
import './Login.css';

const initial_state = {
    email: "",
    password: ""
}

function Login() {
    const [formState, setFormState] = useState(initial_state);

    const handleInput = (ev) => {
        const { name, value } = ev.target;
        setFormState({ ...formState, [name]: value });
    }

    const handleClick = async () => {
        console.log(formState);
        try {
          const response = await API.post("/users/login", formState);
          console.log(response);
          JSON.stringify(response);
          if (response.statusText === 'OK') {
            const token = response.data.token;
            const email = response.data.user.email;
            //alert(token); 
    
            localStorage.setItem('email', email);
            localStorage.setItem('token', token);
    
            console.log(`Login successful. Email: ${email}, Token: ${token}`);
            window.location.replace('/home');
          } else {
            const data = await response.json();
            const { message } = data;
            console.log(message);
            alert("Email not found"); 
          }
        } catch (error) {
          console.log(error);
          //console.log("Error en la solicitud de inicio de sesión");
          alert("Email or password wrong"); 
        }
      };

    return (
        <div className="loginform">
            <form  onSubmit={(ev) => ev.preventDefault()}>
                <div className="emailbox">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="email" name="email" required onChange={handleInput} value={formState.email} />
                </div>

                <div className="passwordbox">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="password" name="password" required onChange={handleInput} value={formState.password}/>
                </div>

                <input className="loginbuton" type="submit" value="Login"  onClick={handleClick}/>
            </form>

            <Link to={`/register`}>
                <button className="registeraviso"><span>Do not have account? Register now</span></button>
            </Link>
        </div>
    )
}

export default Login;