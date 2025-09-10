import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Role } from "../types/auth";

type Props = { allowedRoles?: Role[] };

export default function PrivateRouter({ allowedRoles }: Props) {
  const isAuth = localStorage.getItem("auth") === "true";
  const role = (localStorage.getItem("role") || "") as Role;
  const location = useLocation();
  if (!isAuth) return <Navigate to="/login" state={{ from: location }} replace />;
  if (allowedRoles && !allowedRoles.includes(role)) return <Navigate to="/account" replace />;
  return <Outlet />;
}
