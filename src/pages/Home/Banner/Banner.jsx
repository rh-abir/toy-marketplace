import img1 from "../../../assets/img/slider.jpg";

const Banner = () => {
  return (
    <div className="carousel max-w-7xl mx-auto">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full h-[500px]" />
        <div className="absolute flex transform top-1/2">
          <div className="ps-10">
            <h2 className="text-6xl text-white">Best kinds Store !</h2>
            <p className="text-white text-2xl">Give The Gift Of Your Children Everyday</p>
            <button className="btn">Click Here</button>
          </div>
        </div>
        <div className="absolute flex transform -translate-y-1/2  right-5 gap-5 bottom-0">
          <a href="#slide4" className="btn btn-circle bg-red-300">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-red-300">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img1} className="w-full h-[500px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img1} className="w-full h-[500px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img1} className="w-full h-[500px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
