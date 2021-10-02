import "./profilecard.css"

function ProfileCard() {
    return (
        <div>
            {/* <div class="container-box">
                <div class="circle">
                    <img id="cam-placement" src="assets/cameraicon.png" />
                </div>
                <img class="edit-icon" src="assets/editicon3.png"/>
                <div>
                <img class ="profile-img" src="assets/user.png"/>
                </div>
                <div class ="text-container">
                <p class ="title-text">Name</p>
                <div class ="desc-textcontainer">
                <span class ="desc-textcontainer1">
                <p class ="container1-items">Branch</p>
                <p class ="container1-items">Mobile Number</p>
                <p class ="container1-items">Institution ID</p>
                </span>
                <span class ="desc-textcontainer2">
                <p class ="container2-itmes">Email</p>
                <p class ="container2-items">Semester</p>
                </span>
                </div>
                </div>
            </div> */}

            <div class="container-box">

                <div class="image">

                    <img class="profile-img" src="assets/user.png"/>

                    <img id="cam-placement" src="assets/cameraicon.png"/>

                    </div>

                    <div class ="text-container">

                    <p class ="title-text">Name</p>

                    <div class ="desc-textcontainer">

                    <span class ="desc-textcontainer1">

                    <p class ="container1-items">Branch</p>

                    <p class ="container1-items">Mobile Number</p>

                    <p class ="container1-items">Institution ID</p>

                    </span>

                    <span class ="desc-textcontainer2">

                    <p class ="container2-itmes">Email</p>

                    <p class ="container2-items">Semester</p>

                    </span>

                    </div>

                    </div>

                    <div><img class ="edit-icon" src="assets/editicon3.png"/> </div>

                </div>

            </div>

            );
}
            export default ProfileCard;