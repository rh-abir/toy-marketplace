import Lottie from "lottie-react";

import car from "./banner.json";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" bg-gradient-to-r from-[#F2F2F2] to-violet-500">
      <div className="hero">
        <div className="hero-content  min-h-screen  flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <Lottie animationData={car} loop={true}></Lottie>
          </div>
          <div className="lg:w-1/2">
            <p className="text-white">Your Happy Toys</p>
            <h1 className="text-5xl font-bold mb-5">Prime Members <br /> Save 30%</h1>
            
            <button className="btn btn-primary"><Link to='/login'>Get Started</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
