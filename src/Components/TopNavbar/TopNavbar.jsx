import "./topnavbar.css";

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
                       
                        <span className="nav-item">Home</span>
                       
                        <span className="nav-item">Student Community</span>
                        <span className="nav-item">Help</span>
                        <span className="nav-item">Contact</span>

                    </div>
                    <div className="nav-container2">
                        <span className="profile-text">Profile</span>
                        <span><img className="icon" src="assets/profileicon.png" alt="User" /></span>
                    </div>
                </div>

            </div>
        </>
    );
}
export default TopNavbar;