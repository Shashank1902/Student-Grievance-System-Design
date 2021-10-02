import React from 'react';
import './adminPanel.css';
import { Link } from 'react-router-dom';
const AdminPanel = () => {
    return (
        <>
            <div>
                <div className="title">
                    <span className="angular">&lt;</span>
                    <span>em</span>
                    <span className="angular">&gt;</span>
                    <span>brace</span>
                </div>

                <div className="flex-container">
                    <span className="nav-item">Welcome Sharmila!

                        <span className="icon-container">
                            <div >
                                <Link style={{ textDecoration: "none", color: "black"  }} to="/Profile">
                                    <span><img className="icon" src="assets/profileicon2.png" alt="User" /></span>
                                </Link>
                            </div>

                            <span className="icon-container">   
                                <div >
                                    <Link style={{ textDecoration: "none", color: "black"  }} to="/">
                                        <span><img className="icon" src="assets/LogoutIcon.png" alt="User" /></span>
                                    </Link>
                                </div>
                            </span>
                        </span>

                        
                    
                    </span>
                </div>

                

            </div>








        </>
    )
}

export default AdminPanel; 