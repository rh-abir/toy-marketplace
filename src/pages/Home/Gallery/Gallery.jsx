import img1 from "../../../assets/img/gallery-img/gallery1.jpg";
import img2 from "../../../assets/img/gallery-img/gallery2.jpg";
import img3 from "../../../assets/img/gallery-img/gallery3.jpg";
import img4 from "../../../assets/img/gallery-img/gallery4.jpg";
import img5 from "../../../assets/img/gallery-img/gallery5.jpg";
import img6 from "../../../assets/img/gallery-img/gallery6.jpg";
import img7 from "../../../assets/img/gallery-img/gallery7.jpg";
import img8 from "../../../assets/img/gallery-img/gallery8.jpg";
import img9 from "../../../assets/img/gallery-img/gallery9.jpg";
import img10 from "../../../assets/img/gallery-img/gallery10.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Gallery = () => {

  useEffect(()=> {
    Aos.init();
  }, [])


  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20 mt-28">
        <h2 className="text-5xl mb-3"> Gallery Collection</h2>
        <p>Add featured Gallery to weekly lineup</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 bg-[#F2F2F2] p-5 rounded-3xl">
        <div data-aos="fade-right" className="h-[300px]">
          <img className="rounded-2xl  w-[100%]" src={img3} alt="" />
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div data-aos="fade-down">
            <img className="w-[100%] rounded-md" src={img2} alt="" />
          </div>

          <div data-aos="fade-left">
            <img className="w-[100%] rounded-md" src={img1} alt="" />
          </div>

          <div data-aos = "fade-up">
            <img className="w-[100%] rounded-md" src={img4} alt="" />
          </div>
          <div data-aos = "fade-left">
            <img className="w-[100%] rounded-md" src={img5} alt="" />
          </div>
        </div>
        <div  className="grid lg:grid-cols-2 gap-5">
          <div data-aos = "fade-right">
            <img className="w-[100%] rounded-md" src={img6} alt="" />
          </div>

          <div data-aos = "fade-up">
            <img className="w-[100%] rounded-md" src={img7} alt="" />
          </div>

          <div data-aos = "fade-left">
            <img className="w-[100%] rounded-md" src={img8} alt="" />
          </div>

          <div data-aos = "fade-up">
            <img className="w-[100%] rounded-md" src={img9} alt="" />
          </div>
        </div>
        <div data-aos = "fade-up">
          <img className="rounded-2xl w-[100%]" src={img10} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
