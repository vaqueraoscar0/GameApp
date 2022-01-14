
import React, {useState} from "react";
import axios from 'axios';

export default function Signup (){

    // States for registration
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState([]);
    const [alert, setAlert] = useState(false);

    const [registerUser, setRegisterUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const registerHandler = (e) => {
        console.log(registerUser)
        e.preventDefault();
        axios.post("http://localhost:8001/signup", registerUser)
            .then(res => console.log(res))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                // Loop through error messages and push the message in the array
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr); // set new state to be the error array
                setAlert(true); // If errors, set alert to true to display
            })
        // Reset once validations are met
        setErrors([]);
        setAlert(false);
    }

    return (
        <div>
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={registerHandler}>
                    <div>
                        <label htmlFor="">Username: </label>
                        <input type="text"
                               className="input"
                               placeholder="Username"
                               onChange={(e) => setUsername(e.target.value)}
                               value={username}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Email: </label>
                        <input type="text"
                               className="input"
                               placeholder="Email"
                               onChange={(e) => setEmail(e.target.value)}
                               value={email}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Password: </label>
                        <input type="text"
                               className="input"
                               placeholder="Password"
                               onChange={(e) => setPassword(e.target.value)}
                               value={password}
                        />
                    </div>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

