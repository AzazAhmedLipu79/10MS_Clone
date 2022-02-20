import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import PrimaryPreloader from "./Component/Preloader/PrimaryPreloader";
import BottomNavBar from "./Component/BottomNavBar/BottomNavBar";
import TopNavigation from "./Component/TopNavigation/TopNavigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";

function App() {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-danger">
          {" "}
          <PrimaryPreloader />
        </div>
      ) : (
        <BrowserRouter>
          <TopNavigation />
          <div className="App">
            <Routes>
              {" "}
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
            </Routes>
            <BottomNavBar />
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
