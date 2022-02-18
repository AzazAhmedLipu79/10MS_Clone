import React from "react";
import CardClassCategory from "./CardClassCategory";
const ClassCategory = () => {
  const [classCategories, setClassCategories] = React.useState([]);
  React.useEffect(() => {
    fetch("/ClassCatergoryDetails.json")
      .then((res) => res.json())
      .then((data) => setClassCategories(data));
  }, []);

  return (
    <div className="container-fluid text-center mx-auto">
      <div className="text-center py-5">
        <h3 className="fw-bold">ক্লাস ১-১২</h3>
        <h6>তুমি এখন পড়াশোনার কোন পর্যায়ে আছো?</h6>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mx-auto py-5">
        {classCategories.map((ClassCategory) => (
          <div key={ClassCategory.id}>
            {console.log(ClassCategory)}
            <div className="col">
              <div className="d-flex justify-content-center align-items-center gap-2 rounded ">
                <CardClassCategory ClassCategory={ClassCategory} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassCategory;
