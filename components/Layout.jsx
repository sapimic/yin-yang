import HeaderBanner from "./HeaderBanner";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderBanner />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
