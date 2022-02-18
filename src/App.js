import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import PrimaryPreloader from "./Component/Preloader/PrimaryPreloader";
import BottomNavBar from "./Component/BottomNavBar/BottomNavBar";
function App() {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-danger">
          {" "}
          <PrimaryPreloader />
        </div>
      ) : (
        <div className="App">
          <Home />
          <BottomNavBar />
        </div>
      )}
    </>
  );
}

export default App;
