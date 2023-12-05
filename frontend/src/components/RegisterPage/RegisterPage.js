import { useState } from "react";
import "../TestComponent/TestComponent.css"
//import "./login.css"
//import "./register.css"
import { Link } from "react-router-dom"
import Register from  "../Register/Register"
import Login from "../Login/Login"


export default function RegisterPage() {
	const [seen, setSeen] = useState(false)
    const [loginPopVisible, setLoginPopVisible] = useState(false);
    const [registerPopVisible, setRegisterPopVisible] = useState(false);

    const togglePopLogin = () => {
        setLoginPopVisible(!loginPopVisible);
        setRegisterPopVisible(false);
      };
    
      const togglePopRegister = () => {
        setRegisterPopVisible(!registerPopVisible);
        setLoginPopVisible(false);
      };
/*
    function togglePopLogin () {
        setSeen(!seen);
    };

    function togglePopRegister () {
        setSeen(!seen);
    };

*/
	return (
		<div className="screen">
            <div className="text-intro">
				<p>Opiniile sunt mai importante ca niciodată.</p> 
				<p>Platformele de sondaje permit organizatorilor </p>
				<p>să culeagă feedback direct de la audiența</p>
				<p>lor și să înțeleagă mai bine nevoile</p>
				<p>și dorințele acesteia.</p>
				
			</div>
            
            <div>
                <button className="StartPoll"></button>
            </div>
            <div>
                <ul className="Polls">
                    <li className="PollBox">
                        <br></br>
                        <text className="Question">Ce animal se afla pe tricourile departamentului de IT?</text>
                        <br></br>
                        <text className="Text2">Make a choice:</text>
                        <br></br>
                        <input type="Radio" className="Options"></input> 
                        <text className="OptionsText">Un elefant</text>
                        <br></br>
                        <input type="Radio" className="Options"></input> 
                        <text className="OptionsText">O testoasa</text>
                        <br></br>
                        <input type="Radio" className="Options"></input>
                        <text className="OptionsText">Un lenes</text>
                    </li>
                    <li className="PollBox">
                    <br></br>
                        <text className="Question">Ce animal se afla pe tricourile departamentului de IT?</text>
                        <br></br>
                        <text className="Text2">Make a choice:</text>
                        <br></br>
                        <input type="Radio" className="Options"></input> 
                        <text className="OptionsText">Un elefant</text>
                        <br></br>
                        <input type="Radio" className="Options"></input> 
                        <text className="OptionsText">O testoasa</text>
                        <br></br>
                        <input type="Radio" className="Options"></input>
                        <text className="OptionsText">Un lenes</text>
                    </li>
                    <li className="PollBox">
                    <br></br>
                        <text className="Question">Ce animal se afla pe tricourile departamentului de IT?</text>
                        <br></br>
                        <text className="Text2">Make a choice:</text>
                        <br></br>
                        <input type="Radio" className="Options"></input> 
                        <text className="OptionsText">Un elefant</text>
                        <br></br>
                        <input type="Radio" className="Options"></input> 
                        <text className="OptionsText">O testoasa</text>
                        <br></br>
                        <input type="Radio" className="Options"></input>
                        <text className="OptionsText">Un lenes</text>
                    </li>
                    
                    <li className="PollBox"></li>
                    <li className="PollBox"></li>
                </ul>
            </div>
            
            
			
			
			<div>
				<ul className="navbar">
					<li><div className="logo"></div></li>
					<li className="login" >
						<a className="login-button" onClick={togglePopLogin}>Login</a>
            			{loginPopVisible ? <Login toggle={togglePopLogin}/> : null}
					</li>
					<li className="register">
						<a className="register-button" onClick={togglePopRegister}>Register</a>
						{registerPopVisible ? <Register toggle={togglePopRegister} /> : null}
					</li>
				</ul>
			</div>
			<div>
				
			</div>
            
			
			
			<div>
				<ul className="footer">
					<li className="links"><a href="https://www.instagram.com/lsacbucuresti/" target="_blank" className="instagram"></a></li>
					<li className="links"><a href="https://www.facebook.com/LsacBucuresti/?locale=ro_RO" target="_blank" className="facebook"></a></li>
					<li className="links"><a href="https://www.twitch.tv/lsac_bucuresti" target="_blank" className="twitch"></a></li>
				</ul>
			</div>
			
		</div>


	)
}

