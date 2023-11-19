import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const user: { email: string; userId: string } = useAppSelector(
    (state) => state.user.user
  );
  const location = useLocation();

  //   if (lodaing) {
  //     return <Loading></Loading>;
  //   }

  if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
