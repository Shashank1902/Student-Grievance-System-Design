import "./topnavbar.css";
import {Link} from 'react-router-dom'

function TopNavbar() {
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
                        <Link style={{textDecoration: 'none'}} to='/'>
                            <span className="nav-item">Home</span>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to='/StudentCommunity'>
                            <span className="nav-item">Student Community</span>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to='/Help'>
                            <span className="nav-item">Help</span>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to ='/Contact'>
                            <span className="nav-item">Contact</span>
                        </Link>

                    </div>
                    <div className="nav-container2">
                        
                        <Link style={{textDecoration: 'none'}} to='/Profile'><span className="profile-text">Profile</span>
                        <span><img className="icon" src="assets/profileicon.png" alt="User" /></span>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}
export default TopNavbar;