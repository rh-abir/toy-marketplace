import img1 from "../../../assets/img/gallery-img/gallery1.png";
import img2 from "../../../assets/img/gallery-img/gallery2.png";
import img3 from "../../../assets/img/gallery-img/gallery3.png";
import img4 from "../../../assets/img/gallery-img/gallery4.png";
import img5 from "../../../assets/img/gallery-img/gallery5.png";
import img6 from "../../../assets/img/gallery-img/gallery6.png";
import img8 from "../../../assets/img/gallery-img/gallery8.png";

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="text-center py-10">
        <h2 className="text-4xl">Featured Gallery</h2>
        <p>Add featured products to weekly lineup</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
          <img src={img1} className="w-[100%]" alt="" />
          </figure>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
          <img src={img2} className="w-[100%]" alt="" />
          </figure>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
          <img src={img3} className="w-[100%]" alt="" />
          </figure>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
          <img src={img4} className="w-[100%]" alt="" />
          </figure>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
          <img src={img5} className="w-[100%]" alt="" />
          </figure>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
          <img src={img6} className="w-[100%]" alt="" />
          </figure>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
          <img src={img6} alt="" className="w-[100%]"/>
          </figure>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
          <img className="w-[100%]" src={img8} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
