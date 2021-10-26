import React from 'react';
import './studentprofileupdate.css';

export default function StudentProfileUpdate() {
    return (
        <div>
            <form class="edit-profile-form">
                <p className="title-of-form">Edit Profile</p>

                <div className="inputContainer3">
                    <div className="inputContainer3">
                        <label className="label-for-input">Name:</label> 
                        <textarea className="input-for-form" type="text"
                        id="Your_name"
                        name="Your name"
                        placeholder="Type Your Name"
                        ref={yourName}></textarea>
                    </div>
                    
                    <label className="label-for-input">Enrollment:</label> 
                    <textarea className="input-for-form" type="text"
                    id="Your_enrollment"
                    name="Your enrollment"
                    placeholder="Type Your Enrollment"
                    ref={enrollment}></textarea>

                    <label className="label-for-input"> Email:</label>
                    <textarea className="input-for-form" type="text"
                    id="Your_email"
                    name="Your email"
                    placeholder="Type Your Email"
                    ref={emailId}></textarea>

                    <label className="label-for-input">Branch:</label> 
                    <textarea className="input-for-form" type="text"
                    id="Your_branch"
                    name="Your branch"
                    placeholder="Type Your Branch"
                    ref={yourBranch}></textarea>

                    <label className="label-for-input"> Semester:</label>
                    <textarea className="input-for-form" type="text"
                    id="Your_semester"
                    name="Your semester"
                    placeholder="Type Your Semester"
                    ref={yourSem}></textarea>
                </div>

                <div className="container-of-button">
                <label htmlFor="submit">
                    <button className="button-for-submit" id="submit" type="submit">
                    Submit
                    </button>
                </label>
                </div>

    </form>



        </div>
    )
}
