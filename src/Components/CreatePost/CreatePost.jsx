import './createpost.css';


function CreatePost() {
    return (
        <div className="container">


            <div className="top">
                <div className="heading">
                    <span>Create Post</span>
                </div>

                <div className="cross-logo">
                    <img className="cross" src="assets/PostLogo/cross.png" alt="cross" />

                </div>
            </div>




            <div className="post">


                <div className="postContainer-1">
                    <span><img className="profile-icon" src="assets/profileicon.png" alt="User" /></span>
                </div>

                <div className="postContainer-2">


                    <div className="profile-text"> <span >Sanket Raikward</span>  </div>

                    <div >
                        <select
                            className="option"
                            name="Category"
                            placeholder="Select Category"
                            id="Category"
                            defaultValue="-"

                        >

                            <option value="Category1">Public</option>
                            <option value="Category2">Private</option>
                        </select>
                    </div>


                </div>


            </div>

            <textarea className="textarea" name="" id="" rows="6" placeholder="What's on your mind?"></textarea>


            <div className="addpost">
                <div className="postHeading">
                    <span>Add to your post</span>

                </div>
                <div className="">
                    <span><img className=" PostLogo" src="assets/PostLogo/gallery.png" alt="" /></span>
                    <span><img className="PostLogo" src="assets/PostLogo/tag.png" alt="" /></span>
                    <span><img className="PostLogo" src="assets/PostLogo/emoji.png" alt="" /></span>
                    <span><img className="PostLogo" src="assets/PostLogo/location.png" alt="" /></span>
                    <span><img className="PostLogo" src="assets/PostLogo/flag.png" alt="" /></span>
                    <span><img className="PostLogo" src="assets/PostLogo/more.png" alt="" /></span>

                </div>

            </div>
            <div className="btn-container" >
                <button className="btn" type="submit">Post</button>

            </div>
        </div>
    )
};

export default CreatePost;