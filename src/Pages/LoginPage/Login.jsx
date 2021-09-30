import React from 'react';
import './login.css';

const Login = () => {
    
    
    
    return (
        <div>
            <div className="login-container">

                <div className="login-box">
                    <div className="login-heading-box">
                        <h2 className="login-heading" >Login</h2>

                    </div>
                    <form >
                        <div className="inputbox">
                            <input type="text" name="username" required="" placeholder= "Username"/ >
                           
                        </div>
                        <div className="inputbox">
                            <input type="password" name="password" required="" placeholder= "Password"/>
                            

                        </div>

                        <div className="login-btn-box">
                            <button className="login-btn" type="submit">Submit</button>
                        </div>

                        <div className="signup-btn-box">
                            <span>Register Here <button className="signup-btn" type="submit">Sign in</button> </span>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
