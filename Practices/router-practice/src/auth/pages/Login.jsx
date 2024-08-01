import { useDispatch } from "react-redux";
import { login } from "../../store/auth/authSlice";

export const Login = () => {
  const dispatch = useDispatch();

  const StartLogin = () => {
    event.preventDefault();
    const userName = event.target.username.value;

    if (!userName) alert("invalid user");
    else dispatch(login({ userName }));
  };

  return (
    <>
      <form
        action=""
        onSubmit={() => {
          StartLogin();
        }}
      >
        <label>User Name</label>
        <input type="text" name="username" />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
