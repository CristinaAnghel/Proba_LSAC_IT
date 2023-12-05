import { useState } from "react";
import "./register.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpass, setConfirmPassword] = useState("");
    const [registrationStatus, setRegistrationStatus] = useState(null);

    /*
    function handleRegister(e) {
        e.preventDefault()
        // Code to handle login goes here
        
        props.toggle()
    }
    */
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            // Display a loading message or spinner during the registration process
            //setRegistrationStatus('Registering...');

            const response = await axios.post('http://localhost:5000/api/user', {
                email: email,
                password: password,
            });

            // Registration successful
            setRegistrationStatus('Registration successful');
            console.log(response.data);

            // Use the navigate function to redirect to the "/home" route
            navigate('/registered');
            
        } catch (error) {
            // Handle registration failure
            setRegistrationStatus('Registration failed');
            console.error('Error registering user:', error);
        }
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
