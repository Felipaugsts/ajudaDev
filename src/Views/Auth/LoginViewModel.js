import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserActive, setLoader, loading } from "../../Model/userSlice";
import { Auth, Provider } from "../../Firebase/FirebaseConfig";

export default function LoginViewModel() {
  const dispatch = useDispatch();
  const loader = useSelector(loading);
  const navigate = useNavigate();

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
        dispatch(
          setLoader({
            loading: false,
          })
        );
      });
  };

  return {
    loader,
    handleSignIn,
  };
}
