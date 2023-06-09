import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthPorviders";
import Swal from "sweetalert2";
import Lottie from "lottie-react";

import img from "./login.json";
import { useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../../customHook/useTitle";

const Register = () => {
  const { signUp, upDateProfile } = useContext(AuthContext);
  //   console.log(signUp);
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const location = useLocation()
  console.log(location)

  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if ( !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError("Minimum eight characters, at least one letter and one number");
      return;
    }

    setError("");
    signUp(email, password)
      .then((createUSer) => {
        const singUpUser = createUSer.user;
        upDateProfile(name, photo);
        console.log(singUpUser);
        Swal.fire({
          title: "Success",
          text: "",
          icon: "success",
          confirmButtonText: "Done",
        });
        navigate('/')
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });

    console.log(name, email, password, photo);
  };

  useTitle('Register-page')


  return (
    <div className="bg-base-150 max-w-7xl mx-auto">
      <h1 className="text-5xl text-center font-bold mt-20">Register now!</h1>
      <div>
        <div className="hero min-h-full ">
          <div className="hero-content flex-row">
            <div className="text-center lg:text-left">
              <Lottie animationData={img}></Lottie>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                {/* form */}
                <form onSubmit={handleSingUp}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Name</span>
                    </label>
                    <input
                      type="name"
                      name="name"
                      placeholder="name"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      required
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  font-semibold">
                        Password
                      </span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      required
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Photo URL
                      </span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="photo"
                      required
                      className="input input-bordered"
                    />
                    <label className="label">
                      <p className="label-text-alt text-sm text-red-500">
                        {error}
                      </p>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Sing Up"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
