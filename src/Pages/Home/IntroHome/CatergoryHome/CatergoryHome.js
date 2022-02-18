import { Box } from "@mui/system";
import React from "react";

const CatergoryHome = () => {
  const [categoryHome, setCategoryHome] = React.useState([]);

  React.useEffect(() => {
    fetch("/CategoryHome.json")
      .then((res) => res.json())
      .then((data) => setCategoryHome(data));
  }, []);

  return (
    <div className=" container-fluid bg-white row row-cols-2 row-cols-sm-2 row-cols-md-4 mx-auto pt-3  rounded px-auto shadow-lg">
      {categoryHome.map((category) => (
        <div key={category.id}>
          <div className="col">
            <Box
              sx={{
                p: 2,
                mb: 2,
                display: "grid",
              }}
              className="category-box bg-light"
            >
              <div className="d-flex align-items-center gap-2 rounded ">
                <img src={category.img} />
                <h6>{category.title}</h6>
              </div>
            </Box>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatergoryHome;
