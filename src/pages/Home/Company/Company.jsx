import Marquee from "react-fast-marquee";

import img1 from "../../../assets/img/company/brand1.png";
import img2 from "../../../assets/img/company/brand2.png";
import img3 from "../../../assets/img/company/brand3.png";
import img4 from "../../../assets/img/company/brand4.png";
import img5 from "../../../assets/img/company/brand5.png";

const Company = () => {
  return (
    <div className="max-w-7xl mx-auto my-40">
        <div className="text-center">
            <h2 className="text-5xl mb-3">Our treated company</h2>
            <p>Fun, educational activities</p>
            <div className="divider"></div> 
        </div>
      <Marquee>
        <div className="flex gap-32">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default Company;
