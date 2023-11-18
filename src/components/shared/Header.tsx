import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

const Header = () => {
  const user: { email: string; _id: string } = useAppSelector(
    (state) => state.user.user
  );
  return (
    <div className="h-16 mt-10 w-full border max-w-7xl mx-auto rounded-2xl shadow flex items-center  justify-center gap-5">
      <Link to="/">Home</Link>

      <p>My Team </p>
      <div>
        {user?.email ? (
          <button className="px-8 py-2 bg-red-500 text-white rounded-xl">
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
