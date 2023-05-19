import { useContext } from "react";
import { AuthContext } from "../../providers/AuthPorviders";

const AddToy = () => {

    const {user} = useContext(AuthContext)

    console.log(user)

  const handleAddToy = (event) => {
    event.preventDefault();
    console.log("btn click");

    const form = event.target;
    const sellerName = form.seller.value;
    const sellerEmail = form.email.value;
    const toyName = form.toyname.value;
    const photoUrl = form.photoUrl.value;
    const select = form.select.value;
    const Price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;




    const addTdy = {
        sellerName, 
        sellerEmail,
        toyName,
        photoUrl,
        select,
        Price,
        rating,
        quantity,
        description
    }



    console.log(addTdy)

    
  };

  return (
    <div className="card-body max-w-7xl mx-auto">
      <form onSubmit={handleAddToy}>
        <div className="grid grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Seller Name</span>
            </label>
            <input
              type="text"
              placeholder="seller"
              defaultValue={user?.displayName}
              name="seller"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Seller Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Toy Name</span>
            </label>
            <input
              type="text"
              placeholder="Toy Name"
              name="toyname"
              className="input input-bordered"
            />
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text font-bold">Toy Picture URL</span>
            </label>
            <input
              type="url"
              placeholder="Picture URL"
              name="photoUrl"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Sub-category</span>
            </label>
            <select name="select" className="input input-bordered">
              <option disabled selected>
                Sellect ...
              </option>
              <option value="teddy bear">teddy bear</option>
              <option value="horse">horse</option>
              <option value="dinosaur">dinosaur</option>
              <option value="dogs">dogs</option>
              <option value="cat">cat</option>
              <option value="cows">cows</option>
              
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              type="text"
              placeholder="$"
              name="price"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Rating</span>
            </label>
            <input
              type="number"
              placeholder="Rating"
              name="rating"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">quantity</span>
            </label>
            <input
              type="number"
              placeholder="Quantity"
              name="quantity"
              className="input input-bordered"
            />
          </div>

          <div className="form-control font-bold">
            <label className="label">
              <span className="label-text">Detail description</span>
            </label>
            <textarea
              className="textarea textarea-primary"
              placeholder="Bio"
              name="description"
            ></textarea>
          </div>
        </div>
        <div className="form-control mt-6">
          
          <input className="btn btn-primary" type="submit" value="Add Toy" />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
