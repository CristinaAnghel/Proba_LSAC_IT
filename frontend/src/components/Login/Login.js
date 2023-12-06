import { useState } from "react";
import "./login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(null);

    /*
    function handleLogin(e) {
        e.preventDefault()
        // Code to handle login goes here
        props.toggle()
    }
    */

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            // Display a loading message or spinner during the registration process
            //setRegistrationStatus('Registering...');

            const response = await axios.get('http://localhost:5000/api/user', {
                email: email,
                password: password,
            });

            // Registration successful
            setLoginStatus('Login successful');
            console.log(response.data);

            // Use the navigate function to redirect to the "/home" route
            navigate('/registered');
            
        } catch (error) {
            // Handle registration failure
            setLoginStatus('Login failed');
            console.error('User not found:', error);
        }
    }

    return (
        <div className="popup-log">
            <div className="popup-inner-log">
				<button type="close-log" onClick={props.toggle}>X</button>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    </label>
                    <label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    </label>
                    <button type="submit-log">Login</button>
                </form>
                
            </div>
        </div>
    )
}

export default Login;
