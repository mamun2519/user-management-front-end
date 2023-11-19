import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logOut } from "../../service/user.services";
import { setUser } from "../../redux/slice/userSlice";
import { useMyTeamQuery } from "../../redux/api/userApi";

const Header = () => {
  const user: { email: string | null; userId: string | null } = useAppSelector(
    (state) => state.user.user
  );
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    logOut();
    dispatch(setUser({ userId: null, email: null }));
  };
  const { data } = useMyTeamQuery({});
  console.log(data?.length);
  return (
    <div className="h-16 mt-10 w-full border max-w-7xl mx-auto rounded-2xl shadow flex items-center  justify-center gap-5">
      <Link to="/">Home</Link>

      <div className="h-6  relative">
        <Link to="/my-team">My Team</Link>
      </div>
      {user?.email && (
        <div className=" absolute    top-12 p-1 rounded-full w-6 h-6 bg-red-500 flex justify-center text-white items-center">
          <span>{data?.length}</span>
        </div>
      )}
      <div>
        {user?.email ? (
          <button
            onClick={() => handleLogout()}
            className="px-8 py-2 bg-red-500 text-white rounded-xl"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="px-8 py-2 bg-red-500 text-white rounded-xl"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
