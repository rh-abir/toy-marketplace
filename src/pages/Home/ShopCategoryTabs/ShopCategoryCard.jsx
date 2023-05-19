import Rating from "react-rating";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthPorviders";

const ShopCategoryCard = ({ cateoryData }) => {

  const { user } = useContext(AuthContext);

  console.log(user)

  console.log(cateoryData);
  const { photoUrl, Price, toyName, rating } = cateoryData;

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
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategoryCard;
