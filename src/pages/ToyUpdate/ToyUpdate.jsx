import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../customHook/useTitle";

const ToyUpdate = () => {
  const { id } = useParams();

  const handleToyUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const Price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updateToyInfo = {
      Price,
      quantity,
      description,
    };

    fetch(`https://animal-toys-server-rosy.vercel.app/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "",
            icon: "success",
            confirmButtonText: "Ok",
          });
          event.target.reset();
        }
      });
  };

  useTitle("ToyUpdate-Page");

  return (
    <div className="card-body max-w-7xl mx-auto">
      <form onSubmit={handleToyUpdate}>
        <div className="grid grid-cols-2 gap-5">
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
          <input className="btn btn-outline btn-primary" type="submit" value="Update Toy" />
        </div>
      </form>
    </div>
  );
};

export default ToyUpdate;
