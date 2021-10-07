import React from 'react'; 
import { Link } from 'react-router-dom';
import "./adminnavbar.css";


const AdminNavbar = () => {
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
                    <div className="nav-container1">
                        <span className="nav-item">Welcome Admin</span>
                    </div>

                    <div className="nav-container2">
                        <Link style={{ textDecoration: "none", color: "black"  }} to="/Profile">
                            <span className="profile-text">Profile</span>
                            <span><img className="icon" src="assets/ProfileIcon2.png" alt="User" /></span>
                        </Link>

                        <Link style={{ textDecoration: "none", color: "black"  }} to="/">
                            <span className="profile-text">Log Out</span>
                            <span><img className="icon" src="assets/LogoutIcon.png" alt="User" /></span>
                        </Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default AdminNavbar;
