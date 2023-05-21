import { useContext } from "react";
import { AuthContext } from "../../providers/AuthPorviders";
import Swal from "sweetalert2";
import useTitle from "../../customHook/useTitle";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    console.log("btn click");

    const form = event.target;
    const sellerName = form.seller.value;
    const sellerEmail = form.email.value;
    const toyName = form.toyname.value;
    const photoUrl = form.photoUrl.value;
    const category = form.category.value;
    const Price = form.price.value;
    const priceNum = parseFloat(Price)
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const addTdyInfo = {
      sellerName,
      sellerEmail,
      toyName,
      photoUrl,
      category,
      priceNum,
      rating,
      quantity,
      description,
    };

    fetch("https://animal-toys-server-rosy.vercel.app/animaltoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addTdyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "",
            icon: "success",
            confirmButtonText: "Ok",
          });
          event.target.reset();
        }
      });

    console.log(addTdyInfo);
  };

  useTitle("AddToy-Page");

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
              required
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
              required
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Sub-category</span>
            </label>
            <select name="category" required className="input input-bordered">
              <option disabled defaultValue="teddy bear">
                Sellect ...
              </option>
              <option value="teddy bear">teddy bear</option>
              <option value="horse">horse</option>
              <option value="dinosaur">dinosaur</option>
              <option value="dogs">dogs</option>
              <option value="cat">cat</option>
              <option value="unicorn">unicorn</option>
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
              required
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Rating</span>
            </label>
            <input
              type="text"
              placeholder="Rating"
              name="rating"
              required
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
              required
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
