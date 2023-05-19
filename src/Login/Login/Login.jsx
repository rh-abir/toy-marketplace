import { useContext } from "react";
import { AuthContext } from "../../providers/AuthPorviders";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Login = () => {
  const { LogIn } = useContext(AuthContext);
  //   console.log(user);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    LogIn(email, password)
      .then((logUser) => {
        const loggedUser = logUser.user;
        Swal.fire({
          title: "success",
          icon: "success",
          confirmButtonText: "Done",
        });

        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log(email, password);
  };

  return (
    <div>
      <h2>This is login page</h2>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                {/* form */}
                <form onSubmit={handleLogin}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      required
                      className="input input-bordered"
                    />
                    
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Log In"
                    />
                  </div>
                </form>
                <label className="label">
                      <p >
                        New to Spots shop ! <Link className=" link link-hover font-semibold" to='/signup'>SignUp Now</Link> ?
                      </p>
                    </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
