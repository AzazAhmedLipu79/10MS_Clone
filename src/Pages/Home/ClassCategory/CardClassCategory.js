const CardClassCategory = ({ ClassCategory }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center m-2">
      <div className="card shadow-lg">
        <div className="upper">
          {" "}
          <img
            src={ClassCategory?.cover}
            alt={ClassCategory.title}
            className="img-fluid"
          />{" "}
        </div>
        <div className="user text-center">
          <div className="profile">
            {" "}
            <img
              src="https://cdn.10minuteschool.com/images/main/10ms_favicon.png"
              alt={ClassCategory.title}
              className="p-3 shadow-sm rounded-circle"
              width="80"
            />{" "}
          </div>
        </div>
        <div className="mt-5 text-center">
          <h4 className="mb-0">
            {" "}
            {ClassCategory?.titleBn} || {ClassCategory.title}{" "}
          </h4>{" "}
          <span className="text-muted d-block mb-2">
            {" "}
            {ClassCategory?.Subject}{" "}
          </span>{" "}
          <button className="btn btn-primary btn-sm follow">Follow</button>
          <div className="d-flex justify-content-between align-items-center mt-4 px-4">
            <div className="stats">
              <h6 className="mb-0">Videos</h6>{" "}
              <span> {ClassCategory?.totalvideos} </span>
            </div>
            <div className="stats">
              <h6 className="mb-0">Courses</h6>{" "}
              <span>{ClassCategory?.totalCourses} </span>
            </div>

            <div className="stats">
              <h6 className="mb-0">Chapter</h6>{" "}
              <span> {ClassCategory?.totalChapter} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardClassCategory;
