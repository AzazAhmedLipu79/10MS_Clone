import { Card, Container, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AboutHero from "./AboutHero";
import CircularProgress from "@mui/material/CircularProgress";

const About = () => {
  const [team, setTeam] = React.useState([]);

  React.useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  return (
    <Card className="  container-fluid p-0">
      <AboutHero />
      <Container className="container-fluid p-0 ">
        <h2 className="fw-bold text-center py-5">Know Us</h2>
        <div className=" container-fluid  row row-cols-1 row-cols-sm-2 row-cols-md-4 mx-auto pt-3  rounded px-auto border border-3  mb-5 ">
          {team.length > 0 ? (
            team.map((teamMember) => (
              <div key={teamMember.id + 1}>
                {teamMember.img ? (
                  <Box className="col ">
                    <Box
                      sx={{
                        p: 2,
                        mb: 2,
                        display: "grid",
                      }}
                      className="category-box border bg-gif"
                    >
                      <div className="d-flex-chilo align-items-center-chilo gap-2  rounded ">
                        <img src={teamMember.img} className="img-fluid" />

                        <h5 className="my-2 fw-bolder">{teamMember.name}</h5>
                        <small>{teamMember.role}</small>
                      </div>
                    </Box>
                  </Box>
                ) : (
                  <Box className="category-box my-2">
                    <Skeleton
                      sx={{ height: 190 }}
                      animation="wave"
                      variant="rectangular"
                    />
                    <Skeleton
                      sx={{ height: 190 }}
                      animation="wave"
                      variant="rectangular"
                    />
                  </Box>
                )}
              </div>
            ))
          ) : (
            <Box className="category-box my-2">
                    <Skeleton
                      sx={{ height: 190 }}
                      animation="wave"
                      variant="rectangular"
                    />
                    <Skeleton
                      sx={{ height: 190 }}
                      animation="wave"
                      variant="rectangular"
                    />
                  </Box>
          )}
        </div>
      </Container>
    </Card>
  );
};

export default About;
