import { useState } from "react";
import "./login.css"

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault()
        // Code to handle login goes here
        props.toggle()
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
