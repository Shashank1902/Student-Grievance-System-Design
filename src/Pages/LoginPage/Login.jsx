import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {



    return (
        <div>
            <div className="login-container">

                <div className="login-box">
                    <div className="login-heading-box">
                        <h2 className="login-heading" >Login</h2>

                    </div>
                    <form >
                        <div className="login-inputbox">
                            <input type="text" name="username" required="" placeholder="Username" />

                        </div>
                        <div className="login-inputbox">
                            <input type="password" name="password" required="" placeholder="Password" />


                        </div>

                        <div className="login-btn-box">
                            <button className="login-btn" type="submit">Submit</button>
                        </div>


                        <div className="signup-btn-box">
                            <span>Register Here
                                <Link style={{ textDecoration: 'none', }} to='/RegistrationPage'>

                                    <button className="signup-btn" type="submit">Sign in</button>

                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
