import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function PrivateRouter() {
  const isAuth = localStorage.getItem("auth") === "true";
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
}
