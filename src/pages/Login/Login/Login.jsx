import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthPorviders";

const Login = () => {
  const { LogIn } = useContext(AuthContext);
  //   console.log(signUp);
  const [error, setError] = useState("");

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    LogIn(email, password)
      .then((logUser) => {
        const loggedUser = logUser.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        if (error.code == "auth/wrong-password") {
          setError("wrong password");
          console.log(error.code);
        } else {
          setError("user not found");
          console.log(error.message);
        }
      });

    console.log(email, password);
  };

  return (
    <div>
      <h2>This is Login page</h2>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                {/* form */}
                <form onSubmit={handleLogIn}>
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

                  <p className=" text-red-500 mt-5 my-0">{error}</p>

                  <div className="form-control mt-6">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Log In"
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

export default Login;
