import { useState } from "react";
import "./login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(null);

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/user', {
                email: email,
                password: password,
            });

            setLoginStatus('Login successful');
            console.log(response.data);

            navigate('/registered');
            
        } catch (error) {
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
