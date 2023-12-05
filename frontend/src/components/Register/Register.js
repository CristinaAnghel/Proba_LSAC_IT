import { useState } from "react";
import "./register.css"

function Register(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpass, setConfirmPassword] = useState("");

    function handleRegister(e) {
        e.preventDefault()
        // Code to handle login goes here
        props.toggle()
    }

    return (
        <div className="popup-reg">
            <div className="popup-inner-reg">
				<button type="close-reg" onClick={props.toggle}>X</button>
                <h2>Register</h2>
                <form onSubmit={handleRegister} method="POST">
                    <label>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                    </label>
                    <label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    </label>
					<label>
                        <input type="password" value={confpass} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm Password"/>
                    </label>
                    <button type="submit-reg">Create account</button>
                </form>
                
            </div>
        </div>
    )
}

export default Register;
