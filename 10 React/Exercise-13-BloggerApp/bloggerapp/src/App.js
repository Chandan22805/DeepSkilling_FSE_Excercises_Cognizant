import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const showCourses = true;
  const showBooks = true;
  const showBlogs = true;

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      {showCourses && <CourseDetails />}
      {showBooks ? <BookDetails /> : null}
      {showBlogs && <BlogDetails />}
    </div>
  );
}

export default App;
