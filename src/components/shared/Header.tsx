import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logOut } from "../../service/user.services";
import { setUser } from "../../redux/slice/userSlice";

const Header = () => {
  const user: { email: string; userId: string } = useAppSelector(
    (state) => state.user.user
  );
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    logOut();
    dispatch(setUser({ userId: null, email: null }));
  };
  return (
    <div className="h-16 mt-10 w-full border max-w-7xl mx-auto rounded-2xl shadow flex items-center  justify-center gap-5">
      <Link to="/">Home</Link>

      <Link to="/my-team">My Team</Link>
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
