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
const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2>This is Gallery</h2>
      <div className="grid grid-cols-2 gap-5">
        <div className="">
          <img className="rounded-2xl w-[100%]" src={img3} alt="" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <img className="w-[100%] " src={img2} alt="" />
          </div>
          <div>
            <img className="w-[100%]" src={img1} alt="" />
          </div>
          <div>
            <img className="w-[100%]" src={img4} alt="" />
          </div>
          <div>
            <img className="w-[100%]" src={img5} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <img className="w-[100%]" src={img6} alt="" />
          </div>
          <div>
            <img className="w-[100%]" src={img7} alt="" />
          </div>
          <div>
            <img className="w-[100%]" src={img8} alt="" />
          </div>
          <div>
            <img className="w-[100%]" src={img9} alt="" />
          </div>
        </div>
        <div>
          <img className="rounded-2xl w-[100%]" src={img10} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
