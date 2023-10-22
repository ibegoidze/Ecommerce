import { useLocation, Outlet, Navigate } from "react-router-dom";

const RequireAuth = () => {
  const token = localStorage.getItem("token");

  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/auth/login"} state={{ from: location }} replace />
  );
};
export default RequireAuth;
