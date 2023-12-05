import { useState } from "react";
import "./CreatePoll.css"
import axios from 'axios';

function CreatePoll(props) {
    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [pollStatus, setpollStatus] = useState(null);

    /*
    function handleLogin(e) {
        e.preventDefault()
        // Code to handle login goes here
        props.toggle()
    }
    */

    const handleCreatePoll = async () => {
        try {
            // Display a loading message or spinner during the registration process
            //setRegistrationStatus('Registering...');

            const response = await axios.post('http://localhost:5000/api/polls', {
                question: question,
                option1: option1,
                option2: option2,
                option3: option3
            });

            // Registration successful
            setpollStatus('Poll creation successful');
            console.log(response.data);

            // Use the navigate function to redirect to the "/home" route
            //navigate('/registered');
            
        } catch (error) {
            // Handle registration failure
            setpollStatus('Poll creation failed');
            console.error('Error registering user:', error);
        }
    }


    return (
        <div className="popup-poll">
            <div className="popup-inner-poll">
				<button type="close-poll" onClick={props.toggle}>X</button>
                <h2>Create a poll</h2>
                <form onSubmit={handleCreatePoll}>
                    <text>Title</text>
                    <label className="roz"></label>
                    <label className="transp">
                        <input type="text" value={question} onChange={e => setQuestion(e.target.value)} placeholder="Type your question here" />
                    </label>
                    <br></br>
                    <br></br>
                    <text>Answer Options</text>
                    <label className="roz"></label>
                    <label className="transp">
                        <input type="text" value={option1} onChange={e => setOption1(e.target.value)} placeholder="Option 1" />
                    </label>
                    <label className="roz"></label>
                    <label className="transp">
                        <input type="text" value={option2} onChange={e => setOption2(e.target.value)} placeholder="Option 2" />
                    </label>
                    <label className="roz"></label>
                    <label className="transp">
                        <input type="text" value={option3} onChange={e => setOption3(e.target.value)} placeholder="Option 3" />
                    </label>
                    <button type="submit-poll">Create poll</button>
                </form>
                
            </div>
        </div>
    )
}

export default CreatePoll;
