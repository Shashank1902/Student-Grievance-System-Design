import "./homecontent.css";
function HomeContent() {
  return (
    <>
      <div className="homecontent">
        <div className="homecontent-txt-container">
          <p className="homecontent-txt">
            This Web Application is developed to provide students with a
            platform where an easy, user-friendly interface serves the purpose
            of lodging complaints in a more formal pattern.{" "}
          </p>
          <p className="homecontent-txt">
            It allows users to lay forward their grievances belonging to any of
            our specified categories of academic and/or non-academic issues. The
            college admin would look into all the lodged complaints and solve
            the issues accordingly in the best interest of its students.
          </p>
        </div>
        <div className="homeImage-container">
          <img className="homeImage" src="assets/images/student-home-img.png" alt=""/>
        </div>
      </div>
    </>
  );
}
export default HomeContent;
