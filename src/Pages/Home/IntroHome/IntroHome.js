import CatergoryHome from "./CatergoryHome/CatergoryHome";
import FeatureHome from "./FeatureHome/FeatureHome";

const IntroHome = () => {
  return (
    <div className="container-fluid  px-4 pt-5 my-4 py-3 bg-light text-center border-bottom">
      <h4 className="display-6 fw-bold">
        নিজের শেখা নিজেই গুছিয়ে নেয়ার যাত্রা শুরু হোক
      </h4>
      <div className="col-lg-10 mx-auto">
        <p className="lead mb-4">
          যেকোনো বিষয়ের যেকোনো টপিকে পড়ালেখা করতে চলে যাও তোমার পছন্দের সেকশনে
        </p>
        {/* 
1.     Catergories
  1.1> Map
  1.2> Card
2.     Feature
  2.1> Map
  2.2> Card
    */}

        <CatergoryHome />
        <FeatureHome />
      </div>
    </div>
  );
};

export default IntroHome;
