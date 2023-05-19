// import img from "../../../assets/img/wedo/img.jpg";
import img from "../../../assets/img/wedo/hero.jpg";

const Wedo = () => {
  return (
    <div className="hero h-full max-w-7xl mx-auto my-28">
      <div className="hero-content gap-10">
        <div className="w-1/2 ">
          <img src={img} className=" rounded-lg shadow-2xl w-full" />
        </div>
        <div className="w-1/2">
            <p>WHAT WE DO</p>
          <h1 className="text-5xl font-bold">We help organize events for kids</h1>
          <p className="py-6">
          Fun, educational activities for every occasion with premium toys and snacks. Learn more about our services!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Wedo;
