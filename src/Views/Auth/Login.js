import "./login.css";
import icon from "../../Assets/Icons/googleAuth.png";
import loadingIcon from "../../Assets/Icons/lock.gif";

import LoginViewModel from "./LoginViewModel";

const Login = () => {
  const { handleSignIn, loader } = LoginViewModel();

  return (
    <div className="login-card ">
      <div>
        <form className="shadow">
          <h3>Sign In</h3>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>

          <span className="small light signin-text">or sign in with</span>

          {loader ? (
            <img
              className="auth-icon-loader"
              src={loadingIcon}
              alt="auth-icon"
            />
          ) : (
            <img
              className="auth-icon-google "
              src={icon}
              alt="icon"
              onClick={handleSignIn}
            />
          )}
        </form>
      </div>
    </div>
  );
};
export default Login;
