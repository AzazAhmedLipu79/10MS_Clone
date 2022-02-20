import { Card } from "@mui/material";
import React from "react";
// import Footer from "../../Component/Footer/Footer";
import ClassCategory from "./ClassCategory/ClassCategory";
import FeturedCourse from "./FeturedCourse/FeturedCourse";
import HeroHome from "./HeroHome";
import IntroHome from "./IntroHome/IntroHome";
import OurAchievement from "./OurAchievement/OurAchievement";
import RunningCourse from "./RunningCourse/RunningCourse";
import StrategyHome from "./StrategyHome/StrategyHome";
const Home = () => {
  return (
    <Card className="container-fluid  p-0 mx-auto">
      <HeroHome />
      <RunningCourse />
      <IntroHome />
      <ClassCategory />
      <OurAchievement />
      <StrategyHome />
      <FeturedCourse />
      {/* <Footer /> */}
    </Card>
  );
};

export default Home;
