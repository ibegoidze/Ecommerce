import Main from "../Pages/Main";
import Cart from "../Pages/Cart";
import Detail from "../Pages/Detail";
import ListView from "../Pages/Listview";
import SignIn from "../Pages/SignIn";
import ErrorPage from "../Pages/PageDesign/ErrorPage";
import OutletMain from "./outlet";
import RequireAuth from "../Components/requireAuth/requireAuth";

import { Routes, Route, Navigate } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<OutletMain/>}>
        <Route path="/" element={<Main />} />
        <Route path="Detail/:id" element={<Detail />} />
        <Route path="ListView" element={<ListView />} />
        <Route path="/auth/:method" element={<SignIn />} />
        <Route path="*" element={<ErrorPage />} />
        <Route element={<RequireAuth/>}>
          <Route path="Cart" element={<Cart />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routing;
