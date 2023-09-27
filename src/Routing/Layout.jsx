import Header from "../Components/GlobalComponents/Header";
import Footer from "../Components/GlobalComponents/Footer";
import Routing from "./Routing";

const Layout = () => {
  return (
    <>
      <Header />
      <Routing/>
      <Footer />
    </>
  );
};

export default Layout;
