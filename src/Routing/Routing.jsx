import Main from "../Pages/Main";
import Cart from "../Pages/Cart";
import Detail from "../Pages/Detail";
import ListView from "../Pages/Listview";
import SignIn from "../Pages/SignIn";

import { Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="Detail/:id" element={<Detail />} />
      <Route path="ListView" element={<ListView />} />
      <Route path="SignIn" element={<SignIn />} />
    </Routes>
  );
};

export default Routing;
