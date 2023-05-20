import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthPorviders";
import loginImg from "./login.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";

import img1 from '../../../assets/img/login/google.png'
import img2 from '../../../assets/img/login/github.png'
import { Link } from "react-router-dom";


const Login = () => {
  const { LogIn, googlLogin, githubLogin } = useContext(AuthContext);
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

        if(loggedUser){
          Swal.fire({
            icon: 'success',
            title: 'success',
          })
          event.target.reset()
        }

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

  const handleGoogleLogin = () => {
    googlLogin()
    .then(result => {
      const loggedUser = result.user;
      if(loggedUser){
        Swal.fire({
          icon: 'success',
          title: 'success',
        })
      }
      
    })
    .catch(error => {
      console.log(error.message)
    })
  }
  const handleGithubLogin = () => {
    githubLogin()
    .then(result => {
      const loggedUser = result.user;
      if(loggedUser){
        Swal.fire({
          icon: 'success',
          title: 'success',
        })
      }
      
    })
    .catch(error => {
      console.log(error.message)
    })
  }



  return (
    <div className="bg-base-150 max-w-7xl mx-auto">
        <h1 className="text-5xl text-center font-bold mt-20">Login now!</h1>
      <div>
        <div className="hero  min-h-full">
          <div className="hero-content flex-row">
            <div className="text-center lg:text-left">
              <Lottie animationData={loginImg}></Lottie>
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

                <p className="text-center font-semibold">Create An new Account? <Link to='/signup' className="text-blue-600">Click here</Link> </p>


                <div className="divider">OR</div>
                {/* social login  */}
                <div className="space-y-3">
                    <div>
                      <img onClick={handleGoogleLogin} className="cursor-pointer h-[50px] w-[100%]" src={img1} alt="" />
                    </div>
                    <div>
                      <img onClick={handleGithubLogin} className="cursor-pointer" src={img2} alt="" />
                    </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
