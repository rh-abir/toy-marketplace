// import img from "../../../assets/img/wedo/img.jpg";
import { Link } from "react-router-dom";
import img from "../../../assets/img/wedo/hero.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";


const Wedo = () => {

  useEffect(()=> {
    Aos.init();
  }, [])

  return (
    <div className="hero h-full max-w-7xl mx-auto my-28">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div data-aos="fade-right" className="lg:w-1/2 ">
          <img src={img} className=" rounded-lg shadow-2xl w-full" />
        </div>
        <div data-aos="fade-left" className="lg:w-1/2">
            <p>WHAT WE DO</p>
          <h1 className="text-5xl font-bold">We help organize events for kids</h1>
          <p className="py-6">
          Fun, educational activities for every occasion with premium toys and snacks. Learn more about our services!
          </p>
          <button className="btn btn-outline btn-primary"> <Link to='/login'>Get Started</Link> </button>
        </div>
      </div>
    </div>
  );
};

export default Wedo;
