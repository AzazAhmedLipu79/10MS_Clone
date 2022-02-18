import { Box } from "@mui/system";
import React from "react";

const FeatureHome = () => {
  const [categoryHome, setCategoryHome] = React.useState([]);

  React.useEffect(() => {
    fetch("/FeatureHome.json")
      .then((res) => res.json())
      .then((data) => setCategoryHome(data));
  }, []);

  return (
    <div className="p-0 mx-auto row row-cols-2 row-cols-sm-2 row-cols-md-3 my-5">
      {categoryHome.map((category) => (
        <div key={category.id}>
          <div className="col">
            <Box
              sx={{
                mb: 2,
                display: "grid",
              }}
              className="container-fluid p-0 "
            >
              <div className="d-block align-items-center gap-2 rounded p-3">
                <img className="my-4" src={category.img} />
                <h5 className="fw-bold">{category.title}</h5>
                <p className="p-hide">{category.text}</p>
              </div>
            </Box>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureHome;
