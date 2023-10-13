import Main from "../Pages/Main";
import Cart from "../Pages/Cart";
import Detail from "../Pages/Detail";
import ListView from "../Pages/Listview";
import SignIn from "../Pages/SignIn";
import ErrorPage from "../Pages/PageDesign/ErrorPage";

import { Routes, Route, Navigate } from "react-router-dom";

const Routing = () => {
  const isAuthenticated = Boolean(localStorage.getItem('token'));

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="Detail/:id" element={<Detail />} />
      <Route path="ListView" element={<ListView />} />
      <Route path="SignIn" element={<SignIn />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="Cart" element={<Cart />} />
      {/* <Route path="Cart" element={isAuthenticated ? <Cart /> : <Navigate to="/SignIn" />}/> */}
    </Routes>
  );
};

export default Routing;
