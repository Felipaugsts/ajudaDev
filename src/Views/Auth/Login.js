import "./login.css";

import { Auth, Provider } from "../../Model/FirebaseSetup";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserActive,
  selectUserName,
  setLoader,
  loading,
} from "../../Model/userSlice";
import icon from "../../Assets/Icons/googleAuth.png";
import loadingIcon from "../../Assets/Icons/lock.gif";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const loader = useSelector(loading);
  let navigate = useNavigate();
  // const userEmail = useSelector(selectUserEmail)

  const handleSignIn = () => {
    dispatch(
      setLoader({
        loading: true,
      })
    );
    Auth.signInWithPopup(Provider)
      .then((result) => {
        dispatch(
          setUserActive({
            userEmail: result.user.email,
            userName: result.user.displayName,
          })
        );
        dispatch(
          setLoader({
            loading: false,
          })
        );
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log("catched error", err);
        dispatch(
          setLoader({
            loading: false,
          })
        );
      });
  };

  return (
    <div className="login-card ">
      <div>
        <form>
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
            <img className="auth-icon-loader" src={loadingIcon} />
          ) : (
            <img
              onClick={handleSignIn}
              className="auth-icon-google "
              src={icon}
            />
          )}
        </form>
      </div>
    </div>
  );
};
export default Login;
