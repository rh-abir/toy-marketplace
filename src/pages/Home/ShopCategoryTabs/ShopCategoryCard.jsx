import Rating from "react-rating";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthPorviders";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ShopCategoryCard = ({ cateoryData }) => {
  const { user } = useContext(AuthContext);

  const { photoUrl, Price, toyName, rating, _id } = cateoryData;

  const navigate = useNavigate();

  const handleIsLogin = () => {
    if (!user) {
      Swal.fire({
        title: "",
        text: "You have to log in!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok!",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("hello");
          navigate("/login");
        }
      });
    }
  };

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photoUrl} className="w-full h-[200px]" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toyName}</h2>
          <div className="">
            <p>Price : ${Price}</p>
            <p className="text-yellow-700">
              <Rating
                initialRating={rating}
                readonly
                emptySymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                fullSymbol={<FaStar></FaStar>}
              />
            </p>
          </div>
          <div className="card-actions justify-end">
            {user ? (
              <>
                <button className="btn btn-outline btn-primary">
                  <Link to={`toydetails/${_id}`}>View Details</Link>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleIsLogin}
                  className="btn btn-outline btn-primary"
                >
                  View Details
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategoryCard;
