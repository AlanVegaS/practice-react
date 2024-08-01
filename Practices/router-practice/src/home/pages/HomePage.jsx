import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth/authSlice";

export const HomePage = () => {
  const dispatch = useDispatch();

  const startLogout = () => {
    console.log(event);
    dispatch(logout());
  };

  const { userName } = useSelector((state) => state.auth);
  return (
    <>
      <h1>Welcome {userName}</h1>
      <button onClick={() => startLogout()}>Logout</button>
    </>
  );
};
