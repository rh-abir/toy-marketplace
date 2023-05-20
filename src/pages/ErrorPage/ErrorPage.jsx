import { Link } from "react-router-dom";
import img from "../../assets/img/errorimg/error.jpg";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex mt-52 items-center justify-center">
        <img className="w-[400px]" src={img} alt="" />
      </div>
      <button className="btn btn-primary mx-auto block"><Link to='/'>Back to Home</Link></button>
    </div>
  );
};

export default ErrorPage;
