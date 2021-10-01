import React from 'react';
import './registrationPage.css';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
    return (
        <>
            <div className="regs-box">
                <form action="">
                    <div className="regs-heading-box">
                        <span>Sign Up</span>
                    </div>

                    <div className="regs-label-box">

                        <label htmlFor="name" className="regs-label" >Name :</label>
                    </div>

                    <div className="regs-input-box">
                        <input className="regs-input" type="text" name="name" required="" placeholder="Name" />
                    </div>

                    <div className="regs-label-box">
                        <label htmlFor="name" className="regs-label" >Email :</label>

                    </div>
                    <div className="regs-input-box">
                        <input className="regs-input" type="text" name="email" required="" placeholder="Email" />
                    </div>
                    <div className="regs-label-box">
                        <label htmlFor="name" className="regs-label" >Mobile NO :</label>

                    </div>
                    <div className="regs-input-box">
                        <input className="regs-input" type="text" name="moblieNo" required="" placeholder="Mobile Number" />
                    </div>

                    <div className="option-box">
                       

                            <select
                                className="branch-option"
                                name="branch"
                                id="branch"
                                defaultValue="-"
                            >
                                <option value="-" disabled>
                                    Branch
                                </option>
                                <option value="cse">CSE</option>
                                <option value="it">IT</option>
                            </select>

                       

                            <select
                                className="sem-option"
                                name="sem"
                                id="sem"
                                defaultValue="-"

                            >
                                <option value="-" disabled>
                                    Semester
                                </option>
                                <option value="sem1">1</option>
                                <option value="sem2">2</option>
                            </select>
                       
                    </div>

                    <div className="regs-btn-box">
                        <button type="submit" className="regs-btn">Submit</button>

                    </div>


                    <Link style={{ textDecoration: 'none', }} to='/Login'>

                        <div className="signin-btn-box">
                            <div>
                                <button className="regs-signup-btn" type="submit">Login</button>
                            </div>
                            <div>
                                <img className="signin-logo" src="/assets/Registration-Logo/signin-logo.png" alt="" />
                            </div>
                        </div>
                    </Link>

                </form>
            </div>
        </>
    )
}

export default RegistrationPage;
